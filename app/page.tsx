import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { areas, brands, problems, services, site } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <section className="noise relative min-h-screen overflow-hidden bg-[#f7f7f2] px-5 pt-32 md:pt-40">
        <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#fff200]/60 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-black shadow-xl shadow-black/5 backdrop-blur-xl">
                <Sparkles size={16} /> 2007’den beri aynı adreste
              </div>
              <h1 className="max-w-4xl text-balance text-6xl font-black leading-[.88] tracking-[-0.06em] text-zinc-950 md:text-8xl">
                Ankara Bilgisayar Servisi
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-zinc-700 md:text-2xl">
                <span className="text-zinc-950">19 yıldır aynı adreste</span> laptop tamiri, veri kurtarma, SSD yükseltme ve teknik servis.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+903122613955" className="rounded-full bg-zinc-950 px-8 py-4 text-center text-base font-black text-white transition hover:-translate-y-1">Hemen Ara</a>
                <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-[#fff200] px-8 py-4 text-center text-base font-black text-black transition hover:-translate-y-1">WhatsApp Destek</a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  ["19+", "Yıl tecrübe"],
                  ["Aynı", "Adreste hizmet"],
                  ["Ankara", "Yerel servis"],
                ].map(([a,b]) => (
                  <div key={a} className="rounded-3xl border border-black/10 bg-white/70 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-black">{a}</div>
                    <div className="text-xs font-bold text-zinc-500">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-[#fff200] blur-2xl opacity-40" />
              <div className="relative overflow-hidden rounded-[3rem] bg-zinc-950 shadow-2xl shadow-black/30">
                <Image src="/images/servis-hero.jpeg" alt="Nitro Bilgisayar servis ortamı" width={1100} height={1300} priority className="h-[620px] w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <div className="text-sm font-bold text-zinc-200">Gerçek servis ortamı</div>
                  <div className="mt-1 text-2xl font-black">Cihazınız gerçek teknisyen kontrolünde.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">Hızlı yönlendirme</p>
                <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Bilgisayarınızda bu sorunlar mı var?</h2>
              </div>
              <p className="max-w-md text-lg font-medium text-zinc-500">Gereksiz bilgi yok. Sorunu seçin, doğrudan ilgili servis sayfasına gidin.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-4">
            {problems.slice(0,8).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.03}>
                <Link href={`/sorunlar/${p.slug}`} className="group block min-h-48 rounded-[2rem] border border-black/10 bg-[#f7f7f2] p-6 transition hover:-translate-y-2 hover:bg-zinc-950 hover:text-white">
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff200] text-black"><ArrowRight size={19}/></div>
                  <h3 className="text-2xl font-black tracking-[-0.03em]">{p.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm font-medium text-zinc-500 group-hover:text-zinc-300">{p.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-[#fff200]">Gerçek bakım</p>
              <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Öncesi / Sonrası</h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-[2.5rem] bg-white/5">
                <Image src="/images/fan-oncesi.jpeg" alt="Laptop fan bakım öncesi" width={900} height={700} className="h-[520px] w-full object-cover" />
                <div className="p-6"><h3 className="text-2xl font-black">Bakım Öncesi</h3><p className="mt-2 text-zinc-400">Tozlanma, ısınma ve performans kaybı.</p></div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[2.5rem] bg-white/5">
                <Image src="/images/fan-sonrasi.jpeg" alt="Laptop fan bakım sonrası" width={900} height={700} className="h-[520px] w-full object-cover" />
                <div className="p-6"><h3 className="text-2xl font-black">Bakım Sonrası</h3><p className="mt-2 text-zinc-400">Temiz hava kanalı, daha sağlıklı çalışma.</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[3rem] bg-zinc-900 shadow-2xl">
              <Image src="/images/magaza.jpeg" alt="Nitro Bilgisayar mağaza" width={1000} height={850} className="h-[620px] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">Güven</p>
              <h2 className="text-5xl font-black leading-[.95] tracking-[-0.05em] md:text-7xl">19 yıldır aynı adreste.</h2>
              <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-zinc-600">Cihazınızı teslim edeceğiniz teknik serviste en önemli konu güven. Nitro Bilgisayar, Elvankent Etimesgut’ta ulaşılabilir ve gerçek servis deneyimi sunar.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Gerçek servis", "Hızlı tespit", "Veri güvenliği"].map((x) => (
                  <div key={x} className="rounded-3xl bg-white p-5 text-sm font-black shadow-xl shadow-black/5"><CheckCircle2 className="mb-3" />{x}</div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">Servisler</p>
                <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">En çok tercih edilen hizmetler</h2>
              </div>
              <Link href="/hizmetler" className="font-black">Tüm hizmetler →</Link>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.03}>
                <Link href={`/hizmetler/${s.slug}`} className="group block rounded-[2rem] border border-black/10 p-7 transition hover:-translate-y-2 hover:border-transparent hover:bg-zinc-950 hover:text-white">
                  <p className="mb-8 text-sm font-black text-zinc-400 group-hover:text-[#fff200]">{s.kicker}</p>
                  <h3 className="text-3xl font-black tracking-[-0.04em]">{s.title}</h3>
                  <p className="mt-4 line-clamp-3 font-medium leading-7 text-zinc-500 group-hover:text-zinc-300">{s.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">Ankara</p>
              <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Hizmet bölgeleri</h2>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {areas.map((a) => (
              <Link key={a.slug} href={`/bolgeler/${a.slug}`} className="rounded-full bg-white px-5 py-4 text-center font-black shadow-xl shadow-black/5 transition hover:bg-[#fff200]">
                {a.name}
              </Link>
            ))}
          </div>
          <div className="mt-12 overflow-hidden rounded-[3rem]">
            <Image src="/images/atolye.jpeg" alt="Nitro Bilgisayar atölye" width={1400} height={760} className="h-[520px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-8 text-4xl font-black tracking-[-0.04em] md:text-6xl">Çalıştığımız markalar</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {brands.map((b) => <div key={b} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-2xl font-black">{b}</div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
