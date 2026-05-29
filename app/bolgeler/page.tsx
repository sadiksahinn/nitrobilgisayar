import Link from "next/link";
import { areas } from "@/lib/data";

export const metadata = {
  title: "Hizmet Bölgeleri",
  description: "Nitro Bilgisayar Ankara Etimesgut, Elvankent, Eryaman ve çevre bölgelerde bilgisayar servisi hizmeti verir.",
};

export default function BolgelerPage() {
  return (
    <main className="bg-[#f7f7f2] px-5 pb-20 pt-36">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">Ankara</p>
        <h1 className="max-w-4xl text-6xl font-black tracking-[-0.06em] md:text-8xl">Hizmet bölgeleri</h1>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {areas.map((a) => (
            <Link key={a.slug} href={`/bolgeler/${a.slug}`} className="rounded-[2rem] bg-white p-7 text-center text-2xl font-black shadow-xl shadow-black/5 transition hover:-translate-y-2 hover:bg-[#fff200]">
              {a.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
