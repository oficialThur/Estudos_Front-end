const mobileMenu = document.querySelector('.mobile-menu');
const menuList = document.getElementById('menu-list');

mobileMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link
menuList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuList.classList.remove('active');
  });
});