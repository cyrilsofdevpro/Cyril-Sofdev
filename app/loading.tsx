export default function Loading() {
  return (
    <div className="container pb-32 pt-32">
      <div className="h-8 w-40 animate-pulse rounded bg-surface-2" />
      <div className="mt-6 h-12 w-2/3 animate-pulse rounded bg-surface-2" />
      <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-surface-2" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 animate-pulse rounded-2xl bg-surface-2" />
        ))}
      </div>
    </div>
  );
}
