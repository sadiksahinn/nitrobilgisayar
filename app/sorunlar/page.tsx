import Link from "next/link";
import { problems } from "@/lib/data";

export const metadata = {
  title: "Bilgisayar Sorunları",
  description: "Bilgisayar açılmıyor, laptop şarj olmuyor, Windows açılmıyor ve mavi ekran hatası gibi sorunlar için teknik servis.",
};

export default function SorunlarPage() {
  return (
    <main className="bg-white px-5 pb-20 pt-36">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">Soruna göre servis</p>
        <h1 className="max-w-4xl text-6xl font-black tracking-[-0.06em] md:text-8xl">Bilgisayar sorunları</h1>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {problems.map((p) => (
            <Link key={p.slug} href={`/sorunlar/${p.slug}`} className="rounded-[2rem] border border-black/10 p-7 transition hover:-translate-y-2 hover:bg-zinc-950 hover:text-white">
              <h2 className="text-2xl font-black tracking-[-0.04em]">{p.title}</h2>
              <p className="mt-4 font-medium leading-7 text-zinc-500">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
