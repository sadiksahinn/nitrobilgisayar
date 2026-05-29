import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { problems, services, site } from "@/lib/data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return problems.map((x) => ({
    slug: x.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const x = problems.find((i) => i.slug === slug);

  if (!x) return {};

  return {
    title: `${x.title} | Ankara Bilgisayar Servisi`,
    description: x.description,
    alternates: {
      canonical: `/sorunlar/${x.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const x = problems.find((i) => i.slug === slug);

  if (!x) notFound();

  const faq = x.faq ?? [
    {
      q: `${x.title} sorunu neden olur?`,
      a: `${x.title} sorunu donanım, yazılım, sürücü, disk, RAM, güç veya ısınma kaynaklı olabilir. Net tespit için cihazın teknik servis ortamında kontrol edilmesi gerekir.`,
    },
    {
      q: `Bu sorun evde çözülebilir mi?`,
      a: `Basit kablo, adaptör, priz veya yeniden başlatma kontrolleri yapılabilir. Sorun devam ediyorsa gereksiz müdahale veri kaybı veya ek arıza riski oluşturabilir.`,
    },
    {
      q: `Nitro Bilgisayar bu konuda nasıl yardımcı olur?`,
      a: `Nitro Bilgisayar, Ankara Etimesgut Elvankent’te 19 yıldır aynı adreste arıza tespiti, teknik servis ve onarım hizmeti verir.`,
    },
  ];

  const content = x.content ?? [
    `${x.title} problemi, bilgisayar kullanıcılarının en sık karşılaştığı teknik sorunlardan biridir. Bu sorun bazen basit bir yazılım hatasından, bazen de disk, RAM, anakart, güç devresi veya ısınma gibi donanımsal problemlerden kaynaklanabilir.`,
    `Bu tarz arızalarda en doğru yaklaşım, cihazı zorlamadan önce belirtileri doğru okumaktır. Bilgisayar açılmıyor, donuyor, kapanıyor, yavaşlıyor veya görüntü vermiyorsa rastgele format atmak ya da parça değiştirmek yerine önce arıza tespiti yapılmalıdır.`,
    `Nitro Bilgisayar, Ankara Etimesgut Elvankent’te 19 yıldır aynı adreste bilgisayar teknik servis hizmeti verir. Cihaz tesliminde sorun dinlenir, ön inceleme yapılır ve kullanıcıya anlaşılır şekilde bilgi verilir.`,
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="bg-[#f7f7f2] px-5 pb-24 pt-36 text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[.28em] text-zinc-500">
            Soruna göre servis
          </p>

          <h1 className="text-6xl font-black leading-[.86] tracking-[-0.075em] md:text-8xl">
            {x.title}
          </h1>

          <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-zinc-600">
            {x.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+903122613955"
              className="rounded-full bg-black px-7 py-4 text-center font-black text-white"
            >
              Hemen Ara
            </a>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              className="rounded-full bg-[#fff200] px-7 py-4 text-center font-black text-black"
            >
              WhatsApp
            </a>

            <a
              href={site.maps}
              target="_blank"
              className="rounded-full bg-white px-7 py-4 text-center font-black text-black"
            >
              Yol Tarifi
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[3rem] bg-black">
          <Image
            src="/images/servis-masa.jpeg"
            alt={x.title}
            width={1100}
            height={850}
            className="h-[560px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-10 lg:grid-cols-[1fr_.38fr]">
        <article className="rounded-[3rem] bg-white p-7 shadow-xl shadow-black/5 md:p-12">
          <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
            {x.title} sorunu hakkında bilmeniz gerekenler
          </h2>

          <div className="mt-8 space-y-6 text-lg font-semibold leading-8 text-zinc-600">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] bg-[#f7f7f2] p-6">
              <h3 className="text-xl font-black">Neden oluşur?</h3>
              <p className="mt-3 font-semibold leading-7 text-zinc-600">
                Donanım, yazılım, sürücü, disk, RAM, güç veya ısınma kaynaklı olabilir.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f7f7f2] p-6">
              <h3 className="text-xl font-black">Ne zaman servise gelmeli?</h3>
              <p className="mt-3 font-semibold leading-7 text-zinc-600">
                Sorun tekrar ediyorsa, veri kaybı riski varsa veya cihaz açılmıyorsa servis kontrolü gerekir.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f7f7f2] p-6">
              <h3 className="text-xl font-black">Nitro nasıl çözer?</h3>
              <p className="mt-3 font-semibold leading-7 text-zinc-600">
                Önce arıza tespiti yapılır, ardından kullanıcıya net bilgi verilir.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-black tracking-[-0.04em]">
              Sık sorulan sorular
            </h2>

            <div className="mt-5 space-y-3">
              {faq.map((item, index) => (
                <details
                  key={index}
                  className="rounded-[1.5rem] border border-black/10 bg-white p-5"
                >
                  <summary className="cursor-pointer text-lg font-black">
                    {item.q}
                  </summary>
                  <p className="mt-4 font-semibold leading-7 text-zinc-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </article>

        <aside className="h-fit rounded-[3rem] bg-black p-7 text-white lg:sticky lg:top-28">
          <h3 className="text-3xl font-black tracking-[-0.04em]">
            Hızlı destek
          </h3>

          <p className="mt-4 font-semibold leading-7 text-white/60">
            {site.address}
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:+903122613955"
              className="rounded-full bg-white px-6 py-4 text-center font-black text-black"
            >
              Hemen Ara
            </a>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              className="rounded-full bg-[#fff200] px-6 py-4 text-center font-black text-black"
            >
              WhatsApp
            </a>

            <a
              href={site.maps}
              target="_blank"
              className="rounded-full border border-white/15 px-6 py-4 text-center font-black text-white"
            >
              Yol Tarifi
            </a>
          </div>

          <div className="mt-8">
            <h4 className="mb-4 font-black">İlgili hizmetler</h4>
            <div className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="block rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold text-white/75 transition hover:bg-white hover:text-black"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
