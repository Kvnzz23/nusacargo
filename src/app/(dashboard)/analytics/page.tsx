import { MetricCards } from "@/components/dashboard/metric-cards";
import { getShipments } from "@/lib/shipments";

export default async function AnalyticsPage() {
  const shipments = await getShipments();
  const total = shipments.length;
  const delayed = shipments.filter((s) => s.delayedMinutes > 0).length;
  const ontimeRate = Math.round(((total - delayed) / total) * 100);

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold">Analitik</h1>
      <MetricCards total={total} delayed={delayed} ontimeRate={ontimeRate} />
    </section>
  );
}