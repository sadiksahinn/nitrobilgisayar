import { MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/data";

export default function MobileDock() {
  return (
    <div className="mobile-safe fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-zinc-950 text-white shadow-2xl md:hidden">
      <a href="tel:+903122613955" className="flex flex-col items-center gap-1 py-3 text-xs font-bold"><Phone size={18}/>Ara</a>
      <a href={`https://wa.me/${site.whatsapp}`} className="flex flex-col items-center gap-1 bg-[#fff200] py-3 text-xs font-black text-black"><MessageCircle size={18}/>WhatsApp</a>
      <a href="/iletisim" className="flex flex-col items-center gap-1 py-3 text-xs font-bold"><MapPin size={18}/>Konum</a>
    </div>
  );
}
