import "../scss/main.scss";

const hideNav = document.querySelector(".navigation");
const menu = document.querySelector(".menu--js");
console.log(menu);

menu.addEventListener("click", () => {
  console.log("kliknales w przycisk");
  hideNav.classList.toggle("navigation--js");
  hideNav.classList.toggle("navigation");
});

const darkModeDark = document.querySelector(".dark-mode__dark--js");

// Sprawdzam czy w Local storage znajduje sie jakas wartosc jesli tak przypisuje ja do result

const entry = localStorage.getItem("entry");
const body = document.body;

let result = "";

if (entry) {
  result = entry;
  body.setAttribute("entry", result);
}

console.log(result);

//dodajemy akcje do przycisku darkModeDark
darkModeDark.addEventListener("click", () => {
  /*body.setAttribute('data-theme', 'light')
  removeActive();
  darkModeDark.classList.add('active-theme');
  localStorage.setItem('theme', 'light')
*/

  result = !result;

  localStorage.setItem("entry", result);


  if (!result) {

    darkModeDark.innerHTML = "🌚";
    console.log("light mode on");

    // zmiana koloru na jasny
    document.documentElement.style.setProperty(
      "--gr",
      "linear-gradient(0deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%,rgba(252, 176, 69, 1) 100%)"
    );
    document.documentElement.style.setProperty("--Nav", "#fefefe");
    document.documentElement.style.setProperty("--Nav-Link", "#db8056");
    document.documentElement.style.setProperty("--Font", "#000000");
    document.documentElement.style.setProperty("--Heading", "#7a3b69");
    document.documentElement.style.setProperty("--Title", "#41cbee");
    document.documentElement.style.setProperty("--Footer", "#dab785");
  } else {

    darkModeDark.innerHTML = "🌞";
    console.log("dark mode on");

    // zmiana koloru na ciemny
    document.documentElement.style.setProperty("--gr", "#424242");
    document.documentElement.style.setProperty("--Nav", "#616161");
    document.documentElement.style.setProperty("--Nav-Link", "#e0e0e0");
    document.documentElement.style.setProperty("--Font", "#fafafa");
    document.documentElement.style.setProperty("--Heading", "#9e9e9e");
    document.documentElement.style.setProperty("--Title", "#bdbdbd");
    document.documentElement.style.setProperty("--Footer", "#212121");
  }
});


// Nie wiem jak zrobic by wartosc z lockal storage odczytac i ustawic jej wartosc 
