function createTab(name) {
    let tab = document.createElement("button");

    tab.classList.add("tab");
    tab.id = (`${name}-button`);
    tab.textContent = name;
    return tab;
}

function createHeader() {
    let header = document.createElement("header");
    header.classList.add("header");

    header.appendChild(createTab("home"));
    header.appendChild(createTab("menu"));
    header.appendChild(createTab("contact"));
    return header;
}

function createContentContainer() {
    let contentContainer = document.createElement("div");

    contentContainer.id = "content-card";
    contentContainer.classList.add("main");
    return contentContainer;
}

export default function initWebPage() {
    const contentDiv = document.getElementById('content');

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createContentContainer());

    let initHTML = `
    <div class="header">
        <button class="tab" id="home-button">Home</button>
        <button class="tab" id="menu-button">Menu</button>
        <button class="tab" id="contact-button">Contact</button>
    </div>

    <div class="main" id="page-container">
        <div class="content-card">
            <h1>About</h1>
            <p>CracMeBar is a stylish Irish Bar open for business aint it.</p>
        </div>
        <div class="content-card">
            <h1>Hours</h1>
            <ul>
                <li>Mon-Sat: CLOSED</li>
                <li>Sun: 'Til the wee hours of night</li>
                <li>Sun: 'Til the wee hours of night</li>
            </ul>
        </div>
        <div class="content-card">
            <h1>Location</h1>
            <p>420 Spire St, Spiresquare, Dublin</p>
        </div>
    </div>
    `;

    // contentDiv.innerHTML = initHTML;

    // Export init as page
    // export finished page into index.html

    /*
    HTML Plan:
    -header, has tabs
    -page -> change this as needed
    */
}