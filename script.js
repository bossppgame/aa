document.getElementById("yesBtn").addEventListener("click", function() {
  document.querySelector(".gift-box").style.display = "none";
  document.querySelector(".rose-page").style.display = "block";
});

document.getElementById("noBtn").addEventListener("click", function() {
  document.querySelector("h1").innerHTML += " (แฟนไม่รักเค้าแล้วหรอ)";
});
