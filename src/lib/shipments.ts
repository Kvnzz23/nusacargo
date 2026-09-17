import { Shipment } from "@/types/shipment";

// Contoh data dummy sementara
const dummyShipments: Shipment[] = [
  {
    awb: "NC-2026-000481",
    origin: "Solo",
    destination: "Jakarta",
    status: "transit",
    weightKg: 5,
    etaISO: "2026-04-10T12:00:00Z",
    delayedMinutes: 0,
    client: { id: "c1", name: "Budi" },
  },
];

export async function getShipment(awb: string): Promise<Shipment | null> {
  // Cari data berdasarkan nomor resi (awb)
  const shipment = dummyShipments.find((s) => s.awb === awb);
  return shipment || null;
}

export async function getShipments(): Promise<Shipment[]> {
  await new Promise((r) => setTimeout(r, 150));
  return dummyShipments;
}