const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('header');
const burgerClos = document.querySelector('.burger-close');


burgerMenu.addEventListener("click", () => {
    header.classList.add('ouvrir')
})

burgerClos.addEventListener("click", () => {
    header.classList.remove('ouvrir')
})