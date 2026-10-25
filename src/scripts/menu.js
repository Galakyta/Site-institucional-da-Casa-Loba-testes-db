// NAV FLUTUANTE: fica sólida ao rolar a página
const nav = document.getElementById("navFlutuante");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
});