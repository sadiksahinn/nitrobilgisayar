import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, site } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/hizmetler/${service.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <main className="bg-white">
      <section className="px-5 pb-16 pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">{service.kicker}</p>
            <h1 className="text-6xl font-black leading-[.9] tracking-[-0.06em] md:text-8xl">{service.title}</h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-zinc-600">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+903122613955" className="rounded-full bg-zinc-950 px-7 py-4 text-center font-black text-white">Hemen Ara</a>
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-[#fff200] px-7 py-4 text-center font-black text-black">WhatsApp</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[3rem] bg-zinc-950">
            <Image src="/images/teknisyen.jpeg" alt={service.title} width={1100} height={850} className="h-[560px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {service.bullets.map((b) => <div key={b} className="rounded-[2rem] bg-white p-6 text-lg font-black shadow-xl shadow-black/5">{b}</div>)}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.65fr]">
          <article className="prose prose-zinc max-w-none">
            <h2 className="text-4xl font-black tracking-[-0.04em]">Nitro Bilgisayar’da {service.title}</h2>
            <p className="text-lg leading-8 text-zinc-600">Nitro Bilgisayar, Ankara Etimesgut Elvankent’te 19 yıldır aynı adreste hizmet veren bilgisayar teknik servis noktasıdır. Bu sayfa, {service.title.toLowerCase()} arayan kullanıcılar için net, kısa ve dönüşüm odaklı hazırlanmıştır.</p>
            <p className="text-lg leading-8 text-zinc-600">Cihaz tesliminde önce sorun dinlenir, ardından arıza tespiti yapılır. Gereksiz parça değişimi yerine sorunun kaynağı anlaşılır şekilde paylaşılır.</p>
            <h3 className="text-2xl font-black">Sık sorulan sorular</h3>
            <details className="rounded-2xl border border-black/10 p-5"><summary className="font-black">Verilerim silinir mi?</summary><p className="mt-3 text-zinc-600">İşleme göre değişir. Veri riski olan işlemlerde yedekleme konusu ayrıca konuşulur.</p></details>
            <details className="mt-3 rounded-2xl border border-black/10 p-5"><summary className="font-black">Adresiniz nerede?</summary><p className="mt-3 text-zinc-600">{site.address}</p></details>
          </article>
          <aside className="h-fit rounded-[2rem] bg-zinc-950 p-7 text-white">
            <h3 className="text-2xl font-black">Hızlı iletişim</h3>
            <p className="mt-4 text-zinc-300">{site.phone}<br />{site.mobile}</p>
            <p className="mt-4 text-zinc-300">{site.address}</p>
            <Link href="/iletisim" className="mt-6 inline-block rounded-full bg-[#fff200] px-6 py-3 font-black text-black">Yol Tarifi</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
