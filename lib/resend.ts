import { Resend } from "resend";

// Lazily instantiated so the app doesn't crash at build time if the
// RESEND_API_KEY env var isn't set yet (e.g. during initial local setup).
let resendClient: Resend | null = null;

export function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to your .env file — see .env.example."
    );
  }
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}
