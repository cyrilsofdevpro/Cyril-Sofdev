import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-5 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-wider text-brand-cyan">404</p>
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        This page doesn't exist.
      </h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        The page you're looking for may have been moved or never existed.
      </p>
      <Button asChild>
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
