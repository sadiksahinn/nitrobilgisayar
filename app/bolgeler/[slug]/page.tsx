import Image from "next/image";
import { notFound } from "next/navigation";
import { areas, site } from "@/lib/data";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) return {};
  return {
    title: area.title,
    description: `${area.title} arayanlar için Nitro Bilgisayar, Elvankent Etimesgut’ta 19 yıldır aynı adreste hizmet verir.`,
    alternates: { canonical: `/bolgeler/${area.slug}` },
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) notFound();

  return (
    <main className="bg-[#f7f7f2] px-5 pb-20 pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">Ankara bölge servisi</p>
          <h1 className="text-6xl font-black leading-[.9] tracking-[-0.06em] md:text-8xl">{area.title}</h1>
          <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-zinc-600">Nitro Bilgisayar, {area.name} ve çevresinde bilgisayar servisi arayanlar için Elvankent Etimesgut’ta 19 yıldır aynı adreste hizmet veren güvenilir teknik servis noktasıdır.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="tel:+903122613955" className="rounded-full bg-zinc-950 px-7 py-4 text-center font-black text-white">Hemen Ara</a>
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-[#fff200] px-7 py-4 text-center font-black text-black">WhatsApp</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[3rem] bg-zinc-950">
          <Image src="/images/magaza.jpeg" alt={area.title} width={1100} height={850} className="h-[560px] w-full object-cover" />
        </div>
      </div>
    </main>
  );
}
