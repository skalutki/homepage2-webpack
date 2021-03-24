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