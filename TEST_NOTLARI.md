# Test Notları

Aşağıdaki testler `etkinlikler.html`, `index.html` ve `hakkimizda.html` sayfaları tarayıcıda çalıştırılarak doğrulanmıştır.

| Test No | Test Senaryosu | Kullanılan Girdi | Beklenen Sonuç | Gerçekleşen Sonuç | Karar |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Bir başlığın ayırt edici bölümünü yazma | `Satranç` | Yalnızca "Üniversiteler Arası Satranç Turnuvası" kartı görünür; sayaç `1 etkinlik bulundu.` gösterir. | Yalnızca ilgili 1 kart göründü ve sayaç `1 etkinlik bulundu.` olarak güncellendi. | Geçti |
| 2 | Harf büyüklüğünü değiştirme ve kenarlara boşluk ekleme | `   yApAy zEkÂ   ` | Büyük/küçük harf ve boşluklar dikkate alınmadan "Yapay Zekâ ve Veri Bilimi Semineri" kartı eşleşir. | İlgili 1 kart eşleşti ve sayaç `1 etkinlik bulundu.` olarak göründü. | Geçti |
| 3 | Hiçbir başlıkta olmayan bir ifade yazma | `Biyoloji` | Sayaç `0 etkinlik bulundu.` olur ve boş sonuç mesajı görünür. | Tüm kartlar gizlendi, sayaç `0 etkinlik bulundu.` oldu ve uyarı mesajı açıldı. | Geçti |
| 4 | Temizle düğmesine basma ve ardından yalnızca boşluk yazma | Önce `Temizle` tıklama, sonra `"     "` yazma | Her iki durumda da 5 kartın tamamı görünür ve sayaç `Toplam 5 etkinlik gösteriliyor.` olur. | Her iki durumda da 5 kart listelendi ve sayaç başlangıç durumuna döndü. | Geçti |
| 5 | Her sayfadaki menü bağlantılarını açma | `Ana Sayfa`, `Etkinlikler`, `Hakkında` bağlantıları | Tüm sayfalardaki ortak menü bağlantıları doğru HTML sayfalarına yönlendirir. | Üç sayfa arasındaki tüm geçişler hatasız çalıştı. | Geçti |
| 6 | Mobil genişlik ve klavye ile gezinme | Ekran genişliği `390 px` ve `Tab` tuşu | Yatay taşma olmaz; arama kutusuna ve Temizle düğmesine klavye ile odaklanılır. | 390 px genişlikte yatay kaydırma çubuğu oluşmadı; `Tab` ile input ve düğmeye erişildi. | Geçti |