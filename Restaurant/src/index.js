import './style.css';
console.log("To run again: use 'npm run build'");

// Home code

var homePage = (`
    <div class="main">
        <div class="content-card">
            <h1>About</h1>
            <p>CracMeBar is a stylish Irish Bar open for business aint it.</p>
        </div>
        <div class="content-card">
            <h1>Hours</h1>
            <ul>
                <li>Mon-Sat: CLOSED</li>
                <li>Sun: 'Til the wee hours of night</li>
            </ul>
        </div>
        <div class="content-card">
            <h1>Location</h1>
            <p>420 Spire St, Spiresquare, Dublin</p>
        </div>
    </div>`
)


var contactPage = (`
<h1>Contact Us</h1>

<div class="card-container">
    <div class="card">
        <p>Baba Sahip <br/> 0301-000-000 </p>
    </div>
    <div class="card">
        <p>Sef Efendi <br/> 0301-000-000 </p>
    </div>
    <div class="card">
        <p>Teyze Garson <br/> 0301-000-000 </p>
    </div>
</div>
`)

var menuPage = (`
        <h1>Menu</h1>
    
    <div class="card-container submenu">
        <h2>Mains</h2>
        <div class="card">Kebab</div>
        <div class="card">Domates Corbayi</div>
        <div class="card">Riz</div>
    </div>
    
    <div class="card-container submenu">
        <h2>Deserts</h2>
        <div class="card">Baklava</div>
        <div class="card">Kolum</div>
        <div class="card">Asure</div>
    </div>
    
    <div class="card-container submenu">
        <h2>Drinks</h2>
        <div class="card">Ayran</div>
        <div class="card">Cay</div>
        <div class="card">Kahve</div>
    </div>`
)

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

module.exports = function(source) {
    return `export default function() {
        document.appendChild(myImport)
    }`
}



