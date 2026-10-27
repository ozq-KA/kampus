// HTML elemanlarını seçiyoruz
const searchInput = document.getElementById('event-search');
const clearButton = document.getElementById('clear-search');
const resultCount = document.getElementById('result-count');
const emptyMessage = document.getElementById('empty-message');
const cards = document.querySelectorAll('.card');

function filterEvents() {
    // Baş ve sondaki boşlukları temizle, Türkçe küçük harfe dönüştür[cite: 18].
    const query = searchInput.value.trim().toLocaleLowerCase('tr-TR');
    let visibleCount = 0;

    cards.forEach((card) => {
        const title = card.querySelector('h2').textContent.toLocaleLowerCase('tr-TR');
        const matches = title.includes(query);
        
        // Eşleşmiyorsa card'ı gizle (hidden özniteliği)[cite: 18]
        card.hidden = !matches;
        
        if (matches) {
            visibleCount += 1;
        }
    });

    // Sayaç metnini güncelle[cite: 18]
    resultCount.textContent = `${visibleCount} etkinlik gösteriliyor.`;
    
    // Eğer sonuç 0 ise boş mesajını göster[cite: 18]
    emptyMessage.hidden = visibleCount !== 0;
}

// Input içine yazı yazıldıkça filtrelemeyi çalıştır
searchInput.addEventListener('input', filterEvents);

// Temizle butonuna basıldığında aramayı sıfırla
clearButton.addEventListener('click', () => {
    searchInput.value = '';
    filterEvents();
    searchInput.focus();
});