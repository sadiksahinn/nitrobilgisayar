import Image from "next/image";
import { notFound } from "next/navigation";
import { areas, site } from "@/lib/data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return areas.map((x) => ({
    slug: x.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const x = areas.find((i) => i.slug === slug);

  if (!x) return {};

  return {
    title: x.title,
    description: x.description,
    alternates: {
      canonical: `/bolgeler/${x.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const x = areas.find((i) => i.slug === slug);

  if (!x) notFound();

  return (
    <main className="bg-[#f7f7f2] px-5 pb-24 pt-36 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[.28em] text-zinc-500">
            Ankara Bölge Servisi
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
            src="/images/magaza-genel.jpeg"
            alt={x.title}
            width={1100}
            height={850}
            className="h-[560px] w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
