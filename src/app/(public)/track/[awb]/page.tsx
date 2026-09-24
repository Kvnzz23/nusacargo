// Modul 3 — Next.js 15: params berupa Promise sehingga wajib di-await.
import { notFound } from "next/navigation";
import { getShipment } from "@/lib/shipments";
import { StatusBadge } from "@/components/ui/status-badge";

type Props = { params: Promise<{ awb: string }> };

// Helper function untuk format tanggal aman
function formatEtaDate(etaISO: string): string {
  const formattedISO =
    etaISO.includes("+") || etaISO.endsWith("Z") ? etaISO : `${etaISO}+07:00`;

  return new Date(formattedISO).toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export async function generateMetadata({ params }: Props) {
  const { awb } = await params;
  return {
    title: `Lacak ${awb} · NusaCargo`,
    description: `Status terkini pengiriman ${awb} pada jaringan NusaCargo.`,
  };
}

export default async function TrackPage({ params }: Props) {
  const { awb } = await params;
  const shipment = await getShipment(awb);

  if (!shipment) notFound();

  // Format tanggal dilakukan di level logika komponen
  const formattedEta = formatEtaDate(shipment.etaISO);

  return (
    <section aria-labelledby="judul" className="mx-auto max-w-lg space-y-4 p-6">
      <h1 id="judul" className="text-lg font-semibold">
        Lacak resi {shipment.awb}
      </h1>
      <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
        <p className="text-sm">
          {shipment.origin} → {shipment.destination}
        </p>
        <div>
          <StatusBadge status={shipment.status} />
        </div>
        <p className="text-xs text-foreground/70">
          Estimasi tiba: {formattedEta}
        </p>
      </div>
    </section>
  );
}
