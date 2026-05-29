import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import Header from "@/components/Header";
import MobileDock from "@/components/MobileDock";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ankara Bilgisayar Servisi | Nitro Bilgisayar",
    template: "%s | Nitro Bilgisayar",
  },
  description:
    "Nitro Bilgisayar, Ankara Etimesgut Elvankent’te 19 yıldır aynı adreste laptop tamiri, bilgisayar tamiri, veri kurtarma, fan temizliği ve SSD yükseltme hizmeti verir.",
  keywords: [
    "Ankara bilgisayar servisi",
    "Ankara laptop tamiri",
    "Etimesgut bilgisayar servisi",
    "Elvankent bilgisayar servisi",
    "Eryaman bilgisayar servisi",
    "laptop tamiri Ankara",
    "SSD yükseltme Ankara",
    "veri kurtarma Ankara",
    "fan temizliği Ankara",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nitro Bilgisayar | Ankara Bilgisayar Servisi",
    description:
      "19 yıldır aynı adreste hizmet veren Nitro Bilgisayar; laptop tamiri, veri kurtarma, SSD yükseltme ve teknik servis çözümleri sunar.",
    url: site.url,
    siteName: "Nitro Bilgisayar",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${site.url}/images/magaza-genel.jpeg`,
        width: 1200,
        height: 630,
        alt: "Nitro Bilgisayar Ankara Bilgisayar Servisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitro Bilgisayar | Ankara Bilgisayar Servisi",
    description:
      "Ankara Etimesgut Elvankent’te 19 yıldır aynı adreste bilgisayar teknik servis hizmeti.",
    images: [`${site.url}/images/magaza-genel.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ComputerRepair"],
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    image: `${site.url}/images/magaza-genel.jpeg`,
    logo: `${site.url}/images/logo.png`,
    telephone: ["+903122613955", "+905309417757"],
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Atakent Mahallesi 1514. Cadde 85/D",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.9700",
      longitude: "32.6300",
    },
    hasMap: site.maps,
    areaServed: [
      "Ankara",
      "Etimesgut",
      "Elvankent",
      "Eryaman",
      "Bağlıca",
      "Yapracık",
      "Batıkent",
      "Sincan",
      "Yenimahalle",
      "Çankaya",
      "Keçiören",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    description:
      "Nitro Bilgisayar, Ankara Etimesgut Elvankent’te 19 yıldır aynı adreste laptop tamiri, bilgisayar tamiri, veri kurtarma, SSD yükseltme, format ve fan temizliği hizmetleri sunar.",
    sameAs: [],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Nitro Bilgisayar nerede?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nitro Bilgisayar, Atakent Mahallesi 1514. Cadde 85/D Elvankent Etimesgut / Ankara adresinde hizmet verir.",
        },
      },
      {
        "@type": "Question",
        name: "Laptop tamiri ne kadar sürer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arızanın durumuna göre laptop tamiri aynı gün içinde veya birkaç iş günü içerisinde tamamlanabilir. Önce arıza tespiti yapılır ve kullanıcı bilgilendirilir.",
        },
      },
      {
        "@type": "Question",
        name: "SSD yükseltme bilgisayarı hızlandırır mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Mekanik diskten SSD'ye geçiş, bilgisayarın açılış süresini, programların çalışma hızını ve genel performansı ciddi şekilde iyileştirebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Veri kurtarma mümkün mü?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veri kurtarma ihtimali diskin durumuna, hasar seviyesine ve cihazın sonrasında kullanılıp kullanılmadığına bağlıdır. Nitro Bilgisayar’da ön inceleme yapılır.",
        },
      },
      {
        "@type": "Question",
        name: "Laptop neden çok ısınır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Laptoplarda ısınma genellikle fan ve hava kanallarının tozlanması, termal macunun özelliğini kaybetmesi veya soğutma sisteminin verimsiz çalışmasından kaynaklanır.",
        },
      },
      {
        "@type": "Question",
        name: "Bilgisayar açılmıyorsa ne yapılmalı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilgisayar açılmıyorsa güç kablosu, adaptör ve priz kontrol edilebilir. Sorun devam ederse veri kaybı veya ek arıza riskine karşı teknik servis kontrolü önerilir.",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: "Nitro Bilgisayar",
    inLanguage: "tr-TR",
    publisher: {
      "@id": `${site.url}/#localbusiness`,
    },
  };

  return (
    <html lang="tr" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Header />
        {children}
        <Footer />
        <MobileDock />
      </body>
    </html>
  );
}
