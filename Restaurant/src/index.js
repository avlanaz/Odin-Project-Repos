import './style.css';
import homePage from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'
console.log("To run again: use 'npm run build'");

var homeButton;
var menuButton;
var contactButton;
var pageContainer;

window.onload = init;

function init() {
    // Set up the DOM functions
    homeButton = document.getElementById("home-button");
    menuButton = document.getElementById("menu-button");
    contactButton = document.getElementById("contact-button");
    
    pageContainer = document.getElementById("page-container");
    
    homeButton.addEventListener('click', () => {
        renderPage(homePage);
    })
    var homeButton;
    var menuButton;
    var contactButton;
    var pageContainer;
    
    menuButton.addEventListener('click', () => {
        renderPage(menuPage);
    })
    
    contactButton.addEventListener('click', () => {
        renderPage(contactPage);
    })

    function renderPage(page) {
        pageContainer.innerHTML = page;
    }
}



