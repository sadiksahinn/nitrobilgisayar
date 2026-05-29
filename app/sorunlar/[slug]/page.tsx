import Image from "next/image";
import { notFound } from "next/navigation";
import { problems, site } from "@/lib/data";

export function generateStaticParams() {
  return problems.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const problem = problems.find((p) => p.slug === params.slug);
  if (!problem) return {};
  return {
    title: problem.title,
    description: `${problem.title} sorunu için Nitro Bilgisayar Ankara teknik servis desteği.`,
    alternates: { canonical: `/sorunlar/${problem.slug}` },
  };
}

export default function ProblemPage({ params }: { params: { slug: string } }) {
  const problem = problems.find((p) => p.slug === params.slug);
  if (!problem) notFound();

  return (
    <main className="bg-white px-5 pb-20 pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-zinc-500">Soruna göre servis</p>
          <h1 className="text-6xl font-black leading-[.9] tracking-[-0.06em] md:text-8xl">{problem.title}</h1>
          <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-zinc-600">{problem.description}</p>
          <p className="mt-5 text-lg leading-8 text-zinc-600">Cihazı zorlamadan teknik servis kontrolü almak veri kaybı ve ek arıza riskini azaltır.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="tel:+903122613955" className="rounded-full bg-zinc-950 px-7 py-4 text-center font-black text-white">Hemen Ara</a>
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-[#fff200] px-7 py-4 text-center font-black text-black">WhatsApp</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[3rem] bg-zinc-950">
          <Image src="/images/servis-masa.jpeg" alt={problem.title} width={1100} height={850} className="h-[560px] w-full object-cover" />
        </div>
      </div>
    </main>
  );
}
