import Image from "next/image";
import Link from "next/link";
import { areas, services, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 px-5 pb-28 pt-16 text-white md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Image src="/images/logo.png" alt="Nitro Bilgisayar" width={190} height={60} className="mb-6 h-12 w-auto brightness-0 invert" />
          <p className="max-w-md text-zinc-400">Ankara Etimesgut Elvankent’te 19 yıldır aynı adreste laptop ve bilgisayar teknik servis hizmeti.</p>
          <p className="mt-5 text-sm font-semibold text-zinc-300">{site.address}</p>
          <p className="mt-3 text-sm font-semibold text-zinc-300">{site.phone} • {site.mobile}</p>
        </div>
        <div>
          <h3 className="mb-4 font-black">Hizmetler</h3>
          {services.slice(0, 5).map((s) => <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="mb-3 block text-sm text-zinc-400 hover:text-white">{s.title}</Link>)}
        </div>
        <div>
          <h3 className="mb-4 font-black">Bölgeler</h3>
          {areas.slice(0, 5).map((a) => <Link key={a.slug} href={`/bolgeler/${a.slug}`} className="mb-3 block text-sm text-zinc-400 hover:text-white">{a.title}</Link>)}
        </div>
        <div>
          <h3 className="mb-4 font-black">Hızlı Erişim</h3>
          <Link href="/iletisim" className="mb-3 block text-sm text-zinc-400 hover:text-white">İletişim</Link>
          <a href={`https://wa.me/${site.whatsapp}`} className="mb-3 block text-sm text-zinc-400 hover:text-white">WhatsApp</a>
          <a href="tel:+903122613955" className="mb-3 block text-sm text-zinc-400 hover:text-white">Hemen Ara</a>
        </div>
      </div>
    </footer>
  );
}
