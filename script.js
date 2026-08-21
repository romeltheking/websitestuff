const Button = document.getElementById("freeRobux");

Button.addEventListener('mouseover', () => {
  const randomTop = Math.random() * (window.innerHeight - Button.offsetHeight);
  const randomLeft = Math.random() * (window.innerWidth - Button.offsetWidth);

  Button.style.top = `${randomTop}px`;
  Button.style.left = `${randomLeft}px`;
});