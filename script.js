const saat = new Date().getHours();
let mesaj;
if (saat < 6) {
    mesaj = "🌙 İyi geceler!";
}
else if ( saat < 12) {
    mesaj = "☀️ Günaydın! ";
}
else if (saat < 18) {
    mesaj = "☁️ İyi günler! "; 
}
else {
    mesaj = "✨ İyi akşamlar! ";
}

document.getElementById("karşılama").innerText = mesaj + "Seyit DEMİR'in kartvizitine hoş geldiniz!";