document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearBtn");
    const resultCount = document.getElementById("resultCount");
    const noResultMessage = document.getElementById("noResultMessage");
    
    const eventCards = document.querySelectorAll(".event-card");

    function filterEvents() {
    
        const query = searchInput.value.toLowerCase().trim();
        let matchCount = 0;

        eventCards.forEach(card => {
            const titleElement = card.querySelector("h3");
            const titleText = titleElement ? titleElement.textContent.toLowerCase() : "";

            if (titleText.includes(query)) {
                card.style.display = "block";
                matchCount++;
            } else {
                card.style.display = "none";
            }
        });

       
        resultCount.textContent = `Bulunan etkinlik sayısı: ${matchCount}`;

        // Eşleşme yoksa uyarı mesajı göster
        if (matchCount === 0) {
            noResultMessage.style.display = "block";
        } else {
            noResultMessage.style.display = "none";
        }
    }

   
    searchInput.addEventListener("input", filterEvents);

  
    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        filterEvents();
    });

    filterEvents();
});