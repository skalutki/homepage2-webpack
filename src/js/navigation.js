import '../scss/main.scss';

const hideNav = document.querySelector('.navigation');
const menu = document.querySelector('.menu--js');
console.log(menu);

menu.addEventListener('click', () => {    
    console.log('kliknales w przycisk')
    hideNav.classList.toggle('navigation--js');
    hideNav.classList.toggle('navigation');
});



const darkModeLight = document.querySelector('.dark-mode__light--js');
const darkModeDark = document.querySelector('.dark-mode__dark--js');

console.log(darkModeDark);
console.log(darkModeLight);

darkModeDark.addEventListener('click', () => {     

    console.log('dark mode on')
     // ukrycie przycisku przeciwnego
    darkModeDark.classList.toggle('hidden--js');
    darkModeLight.classList.toggle('hidden--js');   
    // zmiana koloru na ciemny      
    document.documentElement.style.setProperty('--light-mode-gr', '#424242');
    document.documentElement.style.setProperty('--light-mode-Nav', '#616161'); 
    document.documentElement.style.setProperty('--light-mode-Nav-Link', '#e0e0e0');
    document.documentElement.style.setProperty('--light-mode-Font', '#fafafa');
    document.documentElement.style.setProperty('--light-mode-Heading', '#9e9e9e');
    document.documentElement.style.setProperty('--light-mode-Title', '#bdbdbd');
    document.documentElement.style.setProperty('--light-mode-Footer', '#212121'); ;
});


darkModeLight.addEventListener('click', () => {  

    console.log('light mode on')
    // ukrycie przycisku przeciwnego
    darkModeLight.classList.toggle('hidden--js');
    darkModeDark.classList.toggle('hidden--js');
    // zmiana koloru na jasny   
    document.documentElement.style.setProperty('--light-mode-gr', 'linear-gradient(0deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%,rgba(252, 176, 69, 1) 100%)');
    document.documentElement.style.setProperty('--light-mode-Nav', '#fefefe'); 
    document.documentElement.style.setProperty('--light-mode-Nav-Link', '#db8056');
    document.documentElement.style.setProperty('--light-mode-Font', '#000000');
    document.documentElement.style.setProperty('--light-mode-Heading', '#7a3b69');
    document.documentElement.style.setProperty('--light-mode-Title', '#41cbee');
    document.documentElement.style.setProperty('--light-mode-Footer', '#dab785'); 
   
});
