const btn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");
const content = document.getElementById("content");

btn.addEventListener("click", () => {
  music.play();
  content.scrollIntoView({ behavior: "smooth" });
});

const targetDate = new Date("2026-03-30T08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);
