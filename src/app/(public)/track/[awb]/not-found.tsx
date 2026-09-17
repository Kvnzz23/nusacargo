import Link from "next/link";

export default function TrackNotFound() {
  return (
    <section className="mx-auto max-w-lg space-y-3 p-6 text-center">
      <h1 className="text-lg font-semibold">Nomor resi tidak ditemukan</h1>
      <p className="text-sm text-foreground/70">
        Periksa kembali nomor resi (format NC-YYYY-NNNNNN) lalu coba lagi.
      </p>
      <Link href="/" className="text-sm font-medium text-brand underline">
        Coba resi lain
      </Link>
    </section>
  );
}