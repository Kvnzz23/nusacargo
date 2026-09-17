"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "rounded-md px-3 py-2 text-sm hover:bg-muted",
        isActive ? "bg-muted font-medium text-brand" : "",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}