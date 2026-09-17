// Modul 3 — Layout bertahan antar navigasi anak, sidebar tidak ikut render ulang.
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NavLink } from "@/components/dashboard/nav-link";

const NAV = [
  { href: "/shipments", label: "Pengiriman" },
  { href: "/analytics", label: "Analitik" },
  { href: "/settings", label: "Pengaturan" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[240px_1fr]">
      <aside className="border-r border-border bg-surface p-4">
        <p className="mb-6 text-sm font-semibold">NusaCargo Control Tower</p>
        <nav className="flex flex-col gap-1">
          {NAV.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="flex items-center justify-end border-b border-border p-4">
          <ThemeToggle />
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}