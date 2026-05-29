import Link from "next/link";
import { services } from "@/lib/data";

export const metadata = {
  title: "Hizmetler",
  description: "Nitro Bilgisayar laptop tamiri, bilgisayar tamiri, SSD yükseltme ve veri kurtarma hizmetleri.",
};

export default function HizmetlerPage() {
  return (
    <main className="bg-white px-5 pb-20 pt-36">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">Nitro Bilgisayar</p>
        <h1 className="max-w-4xl text-6xl font-black tracking-[-0.06em] md:text-8xl">Hizmetler</h1>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="rounded-[2rem] border border-black/10 p-7 transition hover:-translate-y-2 hover:bg-zinc-950 hover:text-white">
              <p className="mb-6 text-sm font-black text-zinc-400">{s.kicker}</p>
              <h2 className="text-3xl font-black tracking-[-0.04em]">{s.title}</h2>
              <p className="mt-4 font-medium leading-7 text-zinc-500">{s.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
