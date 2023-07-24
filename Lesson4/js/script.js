// Обработчик для отображения/скрытия мобильного меню
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
});
