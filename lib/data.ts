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

export const services = [
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

export const areas = [
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

export const problems = [
["Bilgisayar Açılmıyor","bilgisayar-acilmiyor","Açılmayan cihazlarda güç, disk, RAM ve anakart kaynaklı sorunların teknik kontrolü."],
["Laptop Şarj Olmuyor","laptop-sarj-olmuyor","Adaptör, batarya, şarj soketi ve anakart güç hattı kontrolü."],
["Laptop Çok Isınıyor","laptop-cok-isiniyor","Fan temizliği, termal macun yenileme ve hava kanalı bakımı."],
["Windows Açılmıyor","windows-acilmiyor","Açılış hataları, sistem dosyası sorunları ve disk kaynaklı problemler."],
["Mavi Ekran Hatası","mavi-ekran-hatasi","RAM, disk, sürücü veya Windows kaynaklı mavi ekran hatalarının analizi."],
["Bilgisayar Çok Yavaş","bilgisayar-cok-yavas","SSD yükseltme, bakım ve yazılım temizliğiyle performans iyileştirme."],
["Laptop Ekran Gelmiyor","laptop-ekran-gelmiyor","Panel, flex kablo, ekran kartı ve anakart görüntü hattı kontrolü."],
["Fan Çok Ses Yapıyor","fan-cok-ses-yapiyor","Tozlanma, rulman sesi ve ısınma kaynaklı fan sorunlarının çözümü."],

["SSD Görünmüyor","ssd-gorunmuyor","SSD algılanmama sorunlarının nedenleri ve çözüm yöntemleri."],
["Hard Disk Görünmüyor","harddisk-gorunmuyor","Disk algılanmama ve veri erişim problemleri."],
["Hard Disk Tık Tık Ses Çıkarıyor","harddisk-tik-tik-ses","Mekanik disk arızaları ve veri kaybı riskleri."],
["Laptop Donuyor","laptop-donuyor","Anlık donma ve performans problemlerinin analizi."],
["Laptop Kapanıp Açılıyor","laptop-kapanip-aciliyor","Güç ve anakart kaynaklı yeniden başlama sorunları."],
["Laptop Yavaş Açılıyor","laptop-yavas-aciliyor","Açılış performansını düşüren donanım ve yazılım sorunları."],
["Bilgisayar Sürekli Yeniden Başlıyor","bilgisayar-yeniden-basliyor","Sistem kararsızlığı ve donanım arızalarının tespiti."],
["Şarj Soketi Bozuk","sarj-soketi-bozuk","Laptop şarj giriş arızalarının onarımı."],
["Batarya Şişti","batarya-sisti","Şişmiş batarya kaynaklı güvenlik ve kullanım sorunları."],
["Klavye Çalışmıyor","klavye-calismiyor","Tuş ve klavye devresi arızalarının kontrolü."],
["Touchpad Çalışmıyor","touchpad-calismiyor","Dokunmatik yüzey sorunlarının giderilmesi."],
["USB Port Çalışmıyor","usb-port-calismiyor","USB girişlerinde yaşanan bağlantı problemleri."],
["HDMI Görüntü Vermiyor","hdmi-goruntu-vermiyor","Harici ekran bağlantı sorunlarının çözümü."],
["Ekran Titriyor","ekran-titriyor","Panel, kablo veya ekran kartı kaynaklı titreşim problemleri."],
["Ekranda Çizgiler Var","ekranda-cizgiler-var","Laptop ekranında oluşan çizgi ve görüntü bozuklukları."],
["Ses Gelmiyor","ses-gelmiyor","Hoparlör ve ses kartı kaynaklı arızaların tespiti."],
["Mikrofon Çalışmıyor","mikrofon-calismiyor","Mikrofon ve ses giriş problemlerinin giderilmesi."],
["WiFi Bağlanmıyor","wifi-baglanmiyor","Kablosuz ağ bağlantı sorunlarının çözümü."],
["Bluetooth Çalışmıyor","bluetooth-calismiyor","Bluetooth bağlantı ve sürücü problemleri."],
["İnternet Çok Yavaş","internet-cok-yavas","Ağ performansını düşüren etkenlerin incelenmesi."],
["Windows Güncellenmiyor","windows-guncellenmiyor","Windows güncelleme hatalarının giderilmesi."],
["Windows Lisans Hatası","windows-lisans-hatasi","Lisans ve aktivasyon problemlerinin çözümü."],
["BIOS Açılmıyor","bios-acilmiyor","BIOS erişim ve açılış sorunlarının kontrolü."],
["Anakart Arızası","anakart-arizasi","Anakart kaynaklı donanım sorunlarının tespiti."],
["RAM Arızası","ram-arizasi","Bellek kaynaklı performans ve açılış problemleri."],
["Ekran Kartı Arızası","ekran-karti-arizasi","GPU kaynaklı görüntü ve performans sorunları."],
["İşlemci Isınıyor","islemci-isiniyor","CPU sıcaklık problemlerinin çözümü."],
["Termal Macun Kurumuş","termal-macun-kurumus","Termal iletkenliğin düşmesi sonucu oluşan ısınma sorunları."],
["Laptop Su Döktüm","laptopa-su-dokuldu","Sıvı teması sonrası yapılması gereken işlemler."],
["Laptop Açılıyor Sonra Kapanıyor","laptop-aciliyor-sonra-kapaniyor","Açılış sonrası kapanma sorunlarının analizi."],
["Veriler Silindi","veriler-silindi","Silinen dosya kurtarma süreçleri."],
["Harici Disk Açılmıyor","harici-disk-acilmiyor","Harici disk erişim sorunlarının çözümü."],
["Flash Bellek Görünmüyor","flash-bellek-gorunmuyor","USB bellek algılanmama problemleri."],
["Dosyalar Açılmıyor","dosyalar-acilmiyor","Bozuk dosya ve veri erişim problemleri."],
["Virüs Bulaştı","virus-bulasti","Zararlı yazılım temizleme işlemleri."],
["Reklamlar Çıkıyor","reklamlar-cikiyor","Tarayıcı ve sistem reklam virüslerinin temizlenmesi."],
["Bilgisayar Çok Gürültülü","bilgisayar-cok-gurultulu","Fan ve donanım kaynaklı ses problemleri."],
["MacBook Açılmıyor","macbook-acilmiyor","Apple cihaz açılış sorunlarının giderilmesi."],
["MacBook Çok Isınıyor","macbook-cok-isiniyor","MacBook soğutma ve bakım işlemleri."],
["MacBook Şarj Olmuyor","macbook-sarj-olmuyor","MacBook güç ve şarj sorunlarının çözümü."],
["Oyunlarda FPS Düşüyor","oyunlarda-fps-dusuyor","Performans düşüşü ve optimizasyon çözümleri."],
["Bilgisayar Kendi Kendine Kapanıyor","bilgisayar-kendi-kendine-kapaniyor","Isınma ve güç kaynaklı kapanma sorunları."]
].map(([title,slug,description])=>({title,slug,description}));

export const brands = ["HP", "Lenovo", "Asus", "Dell", "MSI", "Acer", "Monster", "Casper", "Apple", "Huawei"];
