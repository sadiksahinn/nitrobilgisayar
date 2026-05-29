export const site = {
  name: "Nitro Bilgisayar",
  url: "https://www.nitrobilgisayar.com.tr",
  phone: "0312 261 39 55",
  mobile: "0530 941 77 57",
  whatsapp: "905309417757",
  address: "Atakent Mahallesi 1514. Cadde 85/D Elvankent Etimesgut / ANKARA",
  shortAddress: "Elvankent / Etimesgut",
  maps: "https://www.google.com/maps/search/?api=1&query=Atakent%20Mahallesi%201514.%20Cadde%2085%2FD%20Elvankent%20Etimesgut%20Ankara",
};

export type Service = {
  title: string;
  slug: string;
  kicker: string;
  description: string;
  bullets: string[];
};

export type Area = {
  name: string;
  title: string;
  slug: string;
  description: string;
};

export type ProblemFaq = {
  q: string;
  a: string;
};

export type Problem = {
  title: string;
  slug: string;
  description: string;
  content: string[];
  faq: ProblemFaq[];
};

export const services: Service[] = [
  {
    title: "Laptop Tamiri Ankara",
    slug: "laptop-tamiri-ankara",
    kicker: "Laptop servisi",
    description:
      "Açılmayan, ısınan, donan veya ekran sorunu yaşayan laptoplar için hızlı arıza tespiti ve profesyonel servis.",
    bullets: ["Arıza tespiti", "Fan ve termal bakım", "Ekran, klavye, batarya kontrolü", "Veri güvenliği"],
  },
  {
    title: "Bilgisayar Tamiri Ankara",
    slug: "bilgisayar-tamiri-ankara",
    kicker: "Masaüstü ve laptop",
    description:
      "Donanım, yazılım, performans ve sistem sorunlarında 19 yıllık servis tecrübesiyle çözüm.",
    bullets: ["Donanım kontrolü", "Yazılım sorunları", "Performans iyileştirme", "Parça değişim desteği"],
  },
  {
    title: "SSD Yükseltme Ankara",
    slug: "ssd-yukseltme-ankara",
    kicker: "Performans",
    description:
      "Yavaş açılan bilgisayarlar için SSD montajı, sistem aktarımı ve temiz kurulum desteği.",
    bullets: ["SSD montajı", "Sistem aktarımı", "Windows kurulumu", "Hız testi"],
  },
  {
    title: "Veri Kurtarma Ankara",
    slug: "veri-kurtarma-ankara",
    kicker: "Veri güvenliği",
    description:
      "Silinen, kaybolan veya erişilemeyen dosyalar için güvenli ön inceleme ve veri kurtarma süreci.",
    bullets: ["Disk ön inceleme", "Silinen dosya analizi", "Harici disk desteği", "Gizlilik"],
  },
  {
    title: "Format Atma Ankara",
    slug: "format-atma-ankara",
    kicker: "Windows kurulum",
    description:
      "Veri yedekleme, Windows kurulumu, sürücü yükleme ve temiz sistem teslimi.",
    bullets: ["Veri yedekleme", "Temiz kurulum", "Sürücü yükleme", "Program kurulumu"],
  },
  {
    title: "Fan Temizliği Ankara",
    slug: "fan-temizligi-ankara",
    kicker: "Isınma çözümü",
    description:
      "Isınan, ses yapan ve performansı düşen laptoplar için fan temizliği ve termal bakım.",
    bullets: ["Fan temizliği", "Termal macun", "Hava kanalı bakımı", "Isı kontrolü"],
  },
];

const tr = (s: string) =>
  s
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const areas: Area[] = [
  "Eryaman",
  "Etimesgut",
  "Elvankent",
  "Bağlıca",
  "Yapracık",
  "Batıkent",
  "Sincan",
  "Yenimahalle",
  "Çankaya",
  "Keçiören",
].map((name) => ({
  name,
  title: `${name} Bilgisayar Servisi`,
  slug: `${tr(name)}-bilgisayar-servisi`,
  description: `${name} bilgisayar servisi arayanlar için Nitro Bilgisayar, Elvankent Etimesgut’ta 19 yıldır aynı adreste hizmet verir.`,
}));

const problemList: [string, string, string][] = [
  ["Bilgisayar Açılmıyor", "bilgisayar-acilmiyor", "Açılmayan bilgisayarlarda güç, disk, RAM ve anakart kaynaklı sorunların teknik kontrolü."],
  ["Laptop Açılmıyor", "laptop-acilmiyor", "Laptop açılmıyorsa batarya, adaptör, anakart, güç devresi ve disk kaynaklı arızalar incelenir."],
  ["Laptop Şarj Olmuyor", "laptop-sarj-olmuyor", "Adaptör, batarya, şarj soketi ve anakart güç hattı kaynaklı şarj sorunları kontrol edilir."],
  ["Laptop Çok Isınıyor", "laptop-cok-isiniyor", "Fan temizliği, termal macun yenileme ve hava kanalı bakımı ile ısınma sorunları giderilir."],
  ["Bilgisayar Çok Yavaş", "bilgisayar-cok-yavas", "Yavaş çalışan bilgisayarlarda SSD yükseltme, RAM kontrolü, virüs temizliği ve sistem bakımı yapılır."],
  ["Windows Açılmıyor", "windows-acilmiyor", "Windows açılış hatalarında disk, sistem dosyaları, güncelleme ve boot sorunları analiz edilir."],
  ["Mavi Ekran Hatası", "mavi-ekran-hatasi", "Mavi ekran hataları RAM, disk, sürücü, ekran kartı veya Windows kaynaklı olabilir ve detaylı incelenmelidir."],
  ["Siyah Ekran Sorunu", "siyah-ekran-sorunu", "Bilgisayar çalıştığı halde görüntü gelmiyorsa ekran, ekran kartı, RAM ve anakart bağlantıları kontrol edilir."],
  ["Laptop Ekran Gelmiyor", "laptop-ekran-gelmiyor", "Panel, flex kablo, ekran kartı ve anakart görüntü hattı sorunları teknik olarak kontrol edilir."],
  ["Fan Çok Ses Yapıyor", "fan-cok-ses-yapiyor", "Fan sesi genellikle tozlanma, rulman sorunu veya aşırı ısınma nedeniyle oluşur."],
  ["Bilgisayar Kendi Kendine Kapanıyor", "bilgisayar-kendi-kendine-kapaniyor", "Ani kapanma sorunları ısınma, güç kaynağı, batarya, anakart veya yazılım hatalarından kaynaklanabilir."],
  ["Bilgisayar Sürekli Yeniden Başlıyor", "bilgisayar-surekli-yeniden-basliyor", "Sürekli yeniden başlama sorunu RAM, disk, güç, Windows veya anakart kaynaklı olabilir."],
  ["Laptop Donuyor", "laptop-donuyor", "Donma sorunlarında disk sağlığı, RAM, ısınma, sürücüler ve Windows performansı kontrol edilir."],
  ["Bilgisayar Donuyor", "bilgisayar-donuyor", "Bilgisayarın donması genellikle disk, RAM, yazılım veya ısınma kaynaklı performans sorunlarından oluşur."],
  ["SSD Görünmüyor", "ssd-gorunmuyor", "SSD görünmüyorsa bağlantı, BIOS ayarı, disk sağlığı ve sistem uyumluluğu kontrol edilir."],
  ["Harddisk Görünmüyor", "harddisk-gorunmuyor", "Harddisk görünmeme sorununda disk sağlığı, bağlantı noktası ve veri kurtarma ihtimali değerlendirilir."],
  ["Harddisk Tıkırtı Sesi Geliyor", "harddisk-tikirti-sesi-geliyor", "Tıkırtı sesi gelen disklerde cihazı zorlamadan veri kurtarma ön incelemesi yapılmalıdır."],
  ["Veri Kaybı", "veri-kaybi", "Silinen, kaybolan veya erişilemeyen dosyalar için güvenli veri kurtarma süreci değerlendirilir."],
  ["Silinen Dosyalar Geri Gelir mi", "silinen-dosyalar-geri-gelir-mi", "Silinen dosyaların geri gelme ihtimali disk kullanımına, hasar durumuna ve müdahale süresine bağlıdır."],
  ["Harici Disk Görünmüyor", "harici-disk-gorunmuyor", "Harici disk görünmüyorsa bağlantı, disk kutusu, dosya sistemi ve disk sağlığı kontrol edilir."],
  ["USB Bellek Açılmıyor", "usb-bellek-acilmiyor", "USB bellek açılmıyorsa dosya sistemi, bağlantı noktası ve veri kurtarma ihtimali incelenir."],
  ["Laptop Batarya Şişti", "laptop-batarya-sisti", "Şişen bataryalar güvenlik riski oluşturur ve cihaz kullanılmadan teknik servis kontrolü yapılmalıdır."],
  ["Laptop Batarya Çabuk Bitiyor", "laptop-batarya-cabuk-bitiyor", "Batarya ömrü azalan laptoplarda batarya sağlığı, adaptör ve güç yönetimi kontrol edilir."],
  ["Klavye Çalışmıyor", "klavye-calismiyor", "Laptop klavyesi çalışmıyorsa sıvı teması, flex bağlantı veya klavye arızası kontrol edilir."],
  ["Touchpad Çalışmıyor", "touchpad-calismiyor", "Touchpad sorunlarında sürücü, bağlantı, donanım ve Windows ayarları kontrol edilir."],
  ["USB Port Çalışmıyor", "usb-port-calismiyor", "USB port arızalarında soket, anakart bağlantısı ve sürücü sorunları incelenir."],
  ["Wi-Fi Görmüyor", "wi-fi-gormuyor", "Wi-Fi ağlarını görmeyen cihazlarda kablosuz kart, sürücü ve Windows ağ ayarları kontrol edilir."],
  ["İnternet Bağlanmıyor", "internet-baglanmiyor", "İnternet bağlantı sorunları ağ kartı, sürücü, DNS veya modem kaynaklı olabilir."],
  ["Ses Gelmiyor", "ses-gelmiyor", "Ses gelmeme sorunlarında sürücü, hoparlör, ses kartı ve Windows ayarları kontrol edilir."],
  ["Mikrofon Çalışmıyor", "mikrofon-calismiyor", "Mikrofon sorunları sürücü, donanım, uygulama izinleri veya Windows ayarlarından kaynaklanabilir."],
  ["Kamera Açılmıyor", "kamera-acilmiyor", "Laptop kamerası açılmıyorsa sürücü, gizlilik ayarları ve kamera modülü kontrol edilir."],
  ["Ekran Kırıldı", "ekran-kirildi", "Kırık veya çatlak laptop ekranlarında uygun panel değişimi değerlendirilir."],
  ["Ekran Titriyor", "ekran-titriyor", "Ekran titremesi panel, flex kablo, ekran kartı veya sürücü kaynaklı olabilir."],
  ["Ekranda Çizgiler Var", "ekranda-cizgiler-var", "Ekranda çizgi oluşması genellikle panel, flex kablo veya ekran kartı bağlantısı ile ilgilidir."],
  ["BIOS Hatası", "bios-hatasi", "BIOS hatalarında açılış sırası, disk tanıma, anakart ve firmware sorunları kontrol edilir."],
  ["Format Sonrası İnternet Yok", "format-sonrasi-internet-yok", "Format sonrası internet çalışmıyorsa ağ sürücüsü ve bağlantı ayarları yeniden yapılandırılır."],
  ["Windows Güncelleme Hatası", "windows-guncelleme-hatasi", "Windows güncelleme hataları sistem dosyası, disk alanı, sürücü veya servis sorunlarından oluşabilir."],
  ["Disk Yüzde 100 Kullanım", "disk-yuzde-100-kullanim", "Disk kullanımının sürekli yüzde 100 olması performans düşüşüne neden olur ve disk sağlığı kontrol edilmelidir."],
  ["Bilgisayar Virüs Bulaştı", "bilgisayar-virus-bulasti", "Virüs bulaşan cihazlarda güvenli temizlik, veri kontrolü ve sistem onarımı yapılır."],
  ["Reklam Virüsü Temizleme", "reklam-virusu-temizleme", "Tarayıcıda reklam açılması veya yönlendirme olması durumunda zararlı yazılım temizliği yapılmalıdır."],
  ["Oyunlarda FPS Düşüyor", "oyunlarda-fps-dusuyor", "FPS düşüşü ısınma, ekran kartı sürücüsü, RAM, disk veya sistem yükünden kaynaklanabilir."],
  ["Oyunlarda Donma", "oyunlarda-donma", "Oyun sırasında donma sorunlarında sıcaklık, ekran kartı, RAM ve disk performansı kontrol edilir."],
  ["Gaming Laptop Isınıyor", "gaming-laptop-isiniyor", "Gaming laptoplarda ısınma performans kaybına ve kapanmaya neden olabilir; fan ve termal bakım önemlidir."],
  ["Ekran Kartı Görüntü Vermiyor", "ekran-karti-goruntu-vermiyor", "Ekran kartı görüntü vermiyorsa bağlantı, güç, sürücü ve donanım kontrolü yapılır."],
  ["Laptop Oyunlarda Kapanıyor", "laptop-oyunlarda-kapaniyor", "Oyun sırasında kapanma genellikle ısınma, güç veya ekran kartı kaynaklıdır."],
  ["RAM Arızası", "ram-arizasi", "RAM arızaları mavi ekran, donma, açılmama ve yeniden başlama sorunlarına neden olabilir."],
  ["Anakart Arızası", "anakart-arizasi", "Anakart arızalarında güç devresi, kısa devre, sıvı teması ve bileşen kontrolü yapılır."],
  ["Sıvı Teması", "sivi-temasi", "Sıvı temaslı cihazlarda hızlı müdahale edilmezse anakart ve klavye arızaları oluşabilir."],
  ["Şarj Soketi Arızası", "sarj-soketi-arizasi", "Şarj soketi arızalarında adaptör oynama, şarj kesilmesi ve güç bağlantısı sorunları görülür."],
  ["Laptop Menteşe Kırıldı", "laptop-mentese-kirildi", "Menteşe kırıkları ekran kasasına zarar vermeden teknik servis müdahalesi gerektirir."],
];

export const problems: Problem[] = problemList.map(([title, slug, description]) => ({
  title,
  slug,
  description,
  content: [
    `${title} sorunu, bilgisayar ve laptop kullanıcılarının sık karşılaştığı problemlerden biridir. Bu durum bazen basit bir yazılım ayarından, bazen de disk, RAM, anakart, güç devresi, ekran veya soğutma sistemi gibi donanımsal parçalardan kaynaklanabilir.`,
    `Sorunun kaynağı netleşmeden rastgele format atmak, parça değiştirmek veya cihazı zorlamaya devam etmek veri kaybı ve daha büyük arızalara yol açabilir. Bu yüzden önce arıza tespiti yapılması gerekir.`,
    `Nitro Bilgisayar, Ankara Etimesgut Elvankent’te 19 yıldır aynı adreste bilgisayar teknik servis hizmeti verir. Cihaz tesliminde sorun dinlenir, ön inceleme yapılır ve kullanıcıya anlaşılır şekilde bilgi verilir.`,
    `${title} problemi devam ediyorsa cihazı daha fazla zorlamadan profesyonel teknik servis desteği almak en doğru adımdır. Özellikle veri kaybı, kapanma, görüntü gelmeme veya ısınma gibi durumlarda erken müdahale önemlidir.`,
  ],
  faq: [
    {
      q: `${title} neden olur?`,
      a: `${title} sorunu donanım, yazılım, sürücü, disk, RAM, güç veya ısınma kaynaklı olabilir. Kesin neden için teknik servis kontrolü gerekir.`,
    },
    {
      q: `${title} evde çözülebilir mi?`,
      a: `Basit kablo, priz, adaptör veya yeniden başlatma kontrolleri yapılabilir. Sorun devam ediyorsa cihazı zorlamadan teknik servis desteği alınmalıdır.`,
    },
    {
      q: `Nitro Bilgisayar bu sorunda nasıl yardımcı olur?`,
      a: `Nitro Bilgisayar, arıza tespiti yaparak sorunun kaynağını belirler ve kullanıcıyı onarım süreci hakkında bilgilendirir.`,
    },
  ],
}));

export const brands = ["HP", "Lenovo", "Asus", "Dell", "MSI", "Acer", "Monster", "Casper", "Apple", "Huawei"];
