// Placeholder untuk Modul 3–4. Tabel dengan filter/sorting/pagination
// dibangun lengkap di Modul 10 setelah Server/Client Component (Modul 6)
// dan pengambilan data (Modul 7) dibahas.
import { getShipments } from "@/lib/shipments";
import { StatusBadge } from "@/components/ui/status-badge";

export default async function ShipmentsPage() {
  const shipments = await getShipments();

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Pengiriman</h1>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left">
            <tr>
              <th className="px-4 py-2">AWB</th>
              <th className="px-4 py-2">Rute</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Keterlambatan</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((s) => (
              <tr key={s.awb} className="border-t border-border">
                <td className="px-4 py-2 font-mono text-xs">{s.awb}</td>
                <td className="px-4 py-2">
                  {s.origin} → {s.destination}
                </td>
                <td className="px-4 py-2">
                  <StatusBadge status={s.status} />
                </td>
                <td className="px-4 py-2">
                  {s.delayedMinutes > 0 ? `${s.delayedMinutes} menit` : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}