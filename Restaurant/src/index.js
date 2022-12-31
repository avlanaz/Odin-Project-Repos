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
const pages = {
    "home": homePage,
    "menu": menuPage,
    "contact": contactPage
};

initWebPage();
setupTabButtons();
loadPage("home");

function loadPage(idPage) {
    console.log("loadingpage")
    // Get page according to the "idPage"
    const page = pages[idPage];

    // Then make contentContainer to display that page
    const pageContainer = document.getElementById("content-card");
    pageContainer.innerHTML = page;
}

function setupTabButtons() {
    for (const page in pages) {
        const pageButton = document.getElementById(`${page}-button`);
        pageButton.addEventListener("click", () => {
            loadPage(page);
        });
    };
}