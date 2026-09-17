// Tugas mandiri Modul 3: loading.tsx otomatis jadi batas Suspense untuk segmen ini.
export default function DashboardLoading() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-24 animate-pulse rounded-xl border border-border bg-muted"
          />
        ))}
      </div>
      <div className="h-64 animate-pulse rounded-xl border border-border bg-muted" />
    </div>
  );
}