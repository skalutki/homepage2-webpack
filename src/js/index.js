import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const name = 'Karol';
const age = 32;

console.log(`Hej witam Cię na mojej stronie! Nazywam się ${name} i mam ${age} lat.`)


const article = document.querySelector('.article__description--JS');
console.log(article);

article.innerHTML = ('<p>Nowa treść artykulu</p>');


function introduce(name, age) {
    return console.log(`nazywam sie ${name} i mam ${age} lata`);
}
const myResult = introduce(`Karol`, 21);


function introduce2(name, age) {
    return console.log(`nazywam sie ${name} i mam ${age} lata`);
}
introduce2(`Karol`, 21);

const intro = (nazwa, wiek) => {
    return console.log(`nazywam sie ${nazwa} i mam ${wiek} lata`);
}
intro('Tomek', 55);


//sktucona wersja fat arrow function

const introNew = (imie, old) => console.log(`nazywam sie ${imie} i mam ${old} lata`)

introNew('Wojtek', 42);

const person = {
    height: 168,
    alive: true,
    gender: 'woman',
    age: 35,
    introNew1: (name, jare) => {
        console.log(`nazywam sie ${name} i mam ${jare} lata`)
    }
}

person.introNew1('Andrzej', 11);

console.log(person);



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






