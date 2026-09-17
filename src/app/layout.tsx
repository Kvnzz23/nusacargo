import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "NusaCargo Control Tower",
  description: "Dashboard pemantauan pengiriman logistik lintas pulau",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}