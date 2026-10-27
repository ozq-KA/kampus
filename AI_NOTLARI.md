# Yapay Zekâ (AI) Notları

## 1. Kullanılan Promptlar ve Amaçları
* **Prompt 1:** "HTML ve JavaScript öğrenmeye yeni başladım. etkinlikler.html ve style.css dosyalarını incele. Mevcut tasarımı koruyarak etkinlik başlıklarında arama yapabileceğim bir özellik için kısa bir plan öner. Henüz dosyaları değiştirme. Hangi dosyalarda değişiklik gerektiğini ve özelliği nasıl test edeceğimi açıkla."[cite: 3]
  * *Amaç:* Proje yapısını bozmadan arama özelliği için yol haritası çıkartmak.
* **Prompt 2:** "JavaScript kullanarak etkinlik başlıklarını büyük/küçük harf duyarsız filtreleyen, eşleşme sayısını gösteren ve sonuç bulunamadığında uyarı veren bir arama fonksiyonu yaz."[cite: 3]
  * *Amaç:* Kabul ölçütlerine uygun arama mantığını kurmak.
* **Prompt 3:** "Arama sonucunu sıfırlayan ve tüm etkinlikleri tekrar gösteren bir 'Temizle' düğmesi işlevselliği ekle."[cite: 3]
  * *Amaç:* Kullanıcı deneyimini artırmak ve yönergeyi tamamlamak.

## 2. AI Önerisinin Değerlendirilmesi
Yapay zekânın önerdiği büyük/küçük harf duyarsızlığı (`toLowerCase()`) ve boşluk temizleme (`trim()`) mantığı kabul edilmiş, arayüzdeki sayaç yapısı projeye entegre edilmiştir[cite: 3].

## 3. Kod Açıklamaları
* **Event Listener:** `searchInput.addEventListener("input", ...)` yapısı, kullanıcı arama çubuğuna her harf yazdığında anlık olarak filtreleme fonksiyonunu tetikler.
* **Filtreleme Koşulu:** `titleText.includes(query)` ifadesi, aranan kelimenin etkinlik başlığında geçip geçmediğini kontrol ederek eşleşmeyen kartları gizler (`display: none`)[cite: 3].