const btn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");
const content = document.getElementById("content");

btn.addEventListener("click", () => {
  music.play();
  content.scrollIntoView({ behavior: "smooth" });
});
