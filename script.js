function etkinlikleriFiltrele() {
    const arama = document.getElementById("arama");
    const kartlar = document.querySelectorAll(".kart");
    const sonuc = document.getElementById("sonuc");

    const arananKelime = arama.value.trim().toLocaleLowerCase("tr-TR");
    let gorunen = 0;

    kartlar.forEach(kart => {
        const baslik = kart.querySelector("h3").textContent.toLocaleLowerCase("tr-TR");

        if (baslik.includes(arananKelime)) {
            kart.style.display = "";
            gorunen++;
        } else {
            kart.style.display = "none";
        }
    });

    sonuc.textContent = gorunen === 0
        ? "Aramanıza uygun etkinlik bulunamadı."
        : `Gösterilen etkinlik sayısı: ${gorunen}`;
}

document.getElementById("arama").addEventListener("input", etkinlikleriFiltrele);

document.getElementById("temizle").addEventListener("click", function () {
    document.getElementById("arama").value = "";
    etkinlikleriFiltrele();
});