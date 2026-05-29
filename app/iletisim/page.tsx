import { site } from "@/lib/data";

export const metadata = {
  title: "İletişim",
  description: "Nitro Bilgisayar telefon, WhatsApp, adres ve yol tarifi bilgileri.",
};

export default function IletisimPage() {
  return (
    <main className="bg-[#f7f7f2] px-5 pb-20 pt-36">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">İletişim</p>
          <h1 className="text-6xl font-black leading-[.9] tracking-[-0.06em] md:text-8xl">Bize ulaşın.</h1>
          <div className="mt-8 rounded-[2rem] bg-white p-7 shadow-xl shadow-black/5">
            <p className="font-black">Adres</p>
            <p className="mt-2 text-zinc-600">{site.address}</p>
            <p className="mt-6 font-black">Telefon</p>
            <p className="mt-2 text-zinc-600">{site.phone}<br />{site.mobile}</p>
            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+903122613955" className="rounded-full bg-zinc-950 px-7 py-4 text-center font-black text-white">Hemen Ara</a>
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-[#fff200] px-7 py-4 text-center font-black text-black">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[3rem] bg-zinc-950 p-6 text-white">
          <h2 className="mb-4 text-3xl font-black">Google Harita</h2>
          <p className="mb-6 text-zinc-400">Buraya Google Maps iframe kodunu ekleyebilirsin. Şimdilik şık bir yer tutucu bıraktım.</p>
          <div className="flex h-[520px] items-center justify-center rounded-[2rem] bg-white/10 text-center text-2xl font-black">Harita Alanı</div>
        </div>
      </div>
    </main>
  );
}
