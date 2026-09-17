import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-semibold">NusaCargo Control Tower</h1>
      <p className="text-sm text-foreground/70">
        Coba lacak salah satu resi contoh berikut:
      </p>
      <div className="flex flex-col gap-2">
        <Link href="/track/NC-2026-000481" className="text-brand underline">
          NC-2026-000481
        </Link>
        <Link href="/track/NC-2026-999999" className="text-brand underline">
          NC-2026-999999 (uji not-found)
        </Link>
        <Link href="/shipments" className="text-brand underline">
          Buka dasbor →
        </Link>
      </div>
    </main>
  );
}