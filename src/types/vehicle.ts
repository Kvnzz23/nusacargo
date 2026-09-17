export const VEHICLE_TYPE = ["truk-kontainer", "truk-engkel", "van"] as const;
export type VehicleType = (typeof VEHICLE_TYPE)[number];

export interface Vehicle {
  id: string;
  plateNumber: string; // nomor polisi
  type: VehicleType;
  capacityKg: number;
}

export interface Driver {
  id: string;
  name: string;
  licenseNumber: string;
  phone: string;
}