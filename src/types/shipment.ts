export const SHIPMENT_STATUS = [
    "dijemput", "transit", "di-pelabuhan", "dikirim", "selesai", "tertunda", "dibatalkan",
] as const;
export type ShipmentStatus = (typeof SHIPMENT_STATUS)[number];
export interface Shipment {
    awb: string; // nomor resi, contoh: NC-2026-000481
    origin: string;
    destination: string;
    status: ShipmentStatus;
    weightKg: number;
    etaISO: string;
    delayedMinutes: number;
    client: { id: string; name: string };
}
export type ShipmentSummary = Pick<Shipment, "awb" | "status" | "etaISO">;