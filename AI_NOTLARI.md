# Yapay Zekâ (AI) Kullanım ve Kod İnceleme Notları

## 1. Kullanılan Promptlar ve Amaçları

- **Prompt 1:** "Üniversite öğrencilerinin kampüsteki kulüp faaliyetlerini ve atölyeleri kolayca keşfetmesi için üç sayfalık bir site tasarlıyorum. Beş içerik başlığım şunlar: Modern Web Geliştirme Atölyesi, Kampüs Açık Hava Akustik Gecesi, Yapay Zekâ ve Veri Bilimi Semineri, Üniversiteler Arası Satranç Turnuvası, Doğa Yürüyüşü ve Fotoğraf Gezisi. HTML, CSS ve JavaScript kullanacağım. Ortak menüyü ve başlığa göre aramayı nasıl kurabilirim? Önce dosyaları ve kabul ölçütlerini öner; henüz kod yazma."
  - **Amaç:** Kod yazmaya başlamadan önce üç sayfalık dosya yapısını, ortak gezinme menüsünü ve arama özelliğinin kabul ölçütlerini planlamak.

- **Prompt 2:** "etkinlikler.html içindeki etkinlik kartlarını yalnızca h2 başlıklarına göre filtreleyen, büyük/küçük harf ile kenar boşluklarına duyarsız çalışan, sonuç sayacını güncelleyen ve sonuç yoksa uyarı mesajı gösteren saf JavaScript kodunu yaz."
  - **Amaç:** Kullanıcı arama kutusuna yazdıkça anlık çalışan, Türkçe karakterlere uyumlu ve tüm kabul ölçütlerini karşılayan filtreleme işlevini oluşturmak.

- **Prompt 3:** "Ortak gezinme menüsü ve kart listesi için 390 px mobil ekran genişliğinde yatay taşma yapmayan ve klavye (Tab) odağı belirgin olan sade bir style.css dosyası hazırla."
  - **Amaç:** Tüm sayfalarda tutarlı görünüm sağlamak ve küçük ekranlar ile klavye erişilebilirliği testlerini sorunsuz geçmek.

## 2. Öneri Değerlendirmesi (Kabul / Değişiklik Kararı)
Yapay zekânın önerdiği `toLocaleLowerCase("tr")` ve `trim()` kullanımı, Türkçe karakterlerde ("İ/i", "I/ı") hatalı eşleşmeleri önlediği ve baştaki/sondaki gereksiz boşlukları temizlediği için **kabul edildi**. İlk öneride kartların tamamındaki metin (`textContent`) taranıyordu; ancak ödev gereği aramanın **yalnızca başlıkları** filtrelemesi gerektiği için filtreleme sorgusu sadece `kart.querySelector("h2")` elemanının metnine bakacak şekilde **değiştirildi**.

## 3. Kod Açıklamaları

- **Event Listener (`aramaKutusu.addEventListener("input", listeyiFiltrele)`):** Kullanıcının arama kutusuna her karakter girişinde, silme işleminde veya yapıştırma eyleminde tarayıcının `input` olayını dinler ve `listeyiFiltrele` fonksiyonunu anında çalıştırarak sayfa yenilenmeden sonuçların güncellenmesini sağlar.

- **Filtreleme Koşulu (`const eslesiyor = aranan === "" || baslikMetni.includes(aranan)`):** Arama kutusu boşsa (veya yalnızca boşluk karakterlerinden oluşuyorsa) tüm kartların görünür kalmasını sağlar; kutuda bir metin varsa bu metnin ilgili kartın başlığı içinde geçip geçmediğini kontrol eder ve yalnızca koşulu sağlayan kartları ekranda bırakır.