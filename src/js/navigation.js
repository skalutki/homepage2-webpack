import '../scss/main.scss';

const hideNav = document.querySelector('.navigation');
const menu = document.querySelector('.menu--js');
console.log(menu);

/*const myClick = () => {
    console.log('kliknales w przycisk')
    hideNav.classList.toggle('navigation--js');
    hideNav.classList.toggle('navigation');
}*/
menu.addEventListener('click', () => {    
    console.log('kliknales w przycisk')
    hideNav.classList.toggle('navigation--js');
    hideNav.classList.toggle('navigation');
});

const darkModeLight = document.querySelector('.dark-mode__light--js');
const darkModeDark = document.querySelector('.dark-mode__dark--js');

console.log(darkModeDark);
console.log(darkModeLight);

