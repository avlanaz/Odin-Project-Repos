import './style.css';
import homePage from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'
import initWebPage from './init.js'
console.log("To run again: use 'npm run build'");

var homeButton;
var menuButton;
var contactButton;
var pageContainer;

// Helper to arrange page functions
const getPage = {
    "home": homePage,
    "menu": menuPage,
    "contact": contactPage
};

initWebPage();
loadPage("home");

function loadPage(idPage) {
    // Get page according to the "idPage"
    const page = getPage[idPage];

    // Then make contentContainer to display that page
    const pageContainer = document.getElementById("content-card");
    pageContainer.innerHTML = page;
}

function initPage() {
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