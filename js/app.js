const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('header');
const burgerClose = document.querySelector('.burger-close');


burgerMenu.addEventListener("click", () => {
    header.classList.add('ouvrir')
});

burgerClose.addEventListener("click", () => {
    header.classList.remove('ouvrir')
});