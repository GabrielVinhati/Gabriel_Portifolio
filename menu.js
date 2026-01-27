// MENU MOBILE (corrigido: não fecha ao clicar em qualquer lugar dentro do menu)
const gmenu = document.getElementById("g-menu");
const menu = document.getElementById("menu-mobile");
const overlay = document.getElementById("overlay-menu");
const fecharBtn = document.getElementById("g-fechar-btn");
const closeLinks = document.querySelectorAll(".js-close-menu");

function openMenu() {
  menu.classList.add("abrir-menu");
  gmenu.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  menu.classList.remove("abrir-menu");
  gmenu.setAttribute("aria-expanded", "false");
}

gmenu?.addEventListener("click", (e) => {
  e.preventDefault();
  openMenu();
});

fecharBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  closeMenu();
});

overlay?.addEventListener("click", closeMenu);

closeLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// ESC fecha menu
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
