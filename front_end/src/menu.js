const mobileMenu = document.querySelector('.mobile-menu');
const menuList = document.getElementById('menu-list');

mobileMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

menuList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuList.classList.remove('active');
  });
});