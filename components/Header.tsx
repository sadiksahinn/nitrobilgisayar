import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { site } from "@/lib/data";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex w-[94%] max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/75 px-4 py-3 shadow-2xl shadow-black/5 backdrop-blur-2xl md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Nitro Bilgisayar" width={174} height={52} priority className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-zinc-700 lg:flex">
          <Link href="/hizmetler" className="hover:text-black">Hizmetler</Link>
          <Link href="/bolgeler" className="hover:text-black">Bölgeler</Link>
          <Link href="/sorunlar" className="hover:text-black">Sorunlar</Link>
          <Link href="/hakkimizda" className="hover:text-black">Hakkımızda</Link>
          <Link href="/iletisim" className="hover:text-black">İletişim</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+903122613955" className="hidden items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 md:flex">
            <Phone size={16} /> Ara
          </a>
          <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-[#fff200] px-5 py-3 text-sm font-black text-black transition hover:-translate-y-0.5">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
