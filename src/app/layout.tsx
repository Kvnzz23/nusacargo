import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "NusaCargo Control Tower",
  description: "Dashboard pemantauan pengiriman logistik lintas pulau",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}