const aramaKutusu = document.getElementById("arama-kutusu");
const temizleBtn = document.getElementById("temizle-btn");
const sonucSayaci = document.getElementById("sonuc-sayaci");
const bosSonucMesaji = document.getElementById("bos-sonuc-mesaji");
const kartlar = Array.from(document.querySelectorAll("#kart-listesi .kart"));

function normalizasyon(metin) {
  return metin.toLocaleLowerCase("tr").trim();
}

function listeyiFiltrele() {
  const aranan = normalizasyon(aramaKutusu.value);
  let gorunenSayisi = 0;

  kartlar.forEach((kart) => {
    const baslikElemani = kart.querySelector("h2");
    const baslikMetni = baslikElemani ? normalizasyon(baslikElemani.textContent) : "";
    const eslesiyor = aranan === "" || baslikMetni.includes(aranan);

    kart.hidden = !eslesiyor;
    if (eslesiyor) {
      gorunenSayisi += 1;
    }
  });

  if (aranan === "") {
    sonucSayaci.textContent = `Toplam ${kartlar.length} etkinlik gösteriliyor.`;
  } else {
    sonucSayaci.textContent = `${gorunenSayisi} etkinlik bulundu.`;
  }

  bosSonucMesaji.hidden = gorunenSayisi > 0;
}

if (aramaKutusu && temizleBtn && sonucSayaci && bosSonucMesaji && kartlar.length > 0) {
  aramaKutusu.addEventListener("input", listeyiFiltrele);

  temizleBtn.addEventListener("click", () => {
    aramaKutusu.value = "";
    listeyiFiltrele();
    aramaKutusu.focus();
  });

  listeyiFiltrele();
}