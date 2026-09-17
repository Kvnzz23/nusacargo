type Props = { total: number; delayed: number; ontimeRate: number };

export function MetricCards({ total, delayed, ontimeRate }: Props) {
  const items = [
    { label: "Total pengiriman", value: total },
    { label: "Ketepatan waktu", value: `${ontimeRate}%` },
    { label: "Jumlah tertunda", value: delayed },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-border bg-surface p-4"
        >
          <p className="text-xs text-foreground/70">{item.label}</p>
          <p className="mt-1 text-2xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}