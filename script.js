import ScrollReveal from "https://cdn.jsdelivr.net/npm/scrollreveal/+esm"; //https://unpkg.com/scrollreveal

const button = document.getElementById('freeRobux');

button.addEventListener("mouseover", () => {
  const randomTop = Math.random() * (window.innerHeight - button.offsetHeight);
  const randomLeft = Math.random() * (window.innerWidth - button.offsetWidth);

  button.style.top = `${randomTop}px`;
  button.style.left = `${randomLeft}px`;
});

ScrollReveal().reveal('.container', {
  delay: 200,
  duration: 500,
  distance: "20px",
  origin: "bottom",
  opacity: 0,
});