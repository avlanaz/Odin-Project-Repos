const menu = [
    {
        name: "Kebab Skewers",
        type: "main",
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
    },
    {
        name: "Corba Soup",
        type: "main",
        url: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Lokum Sweets",
        type: "dessert",
        url: "https://images.pexels.com/photos/9064206/pexels-photo-9064206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Baklava Pastry",
        type: "dessert",
        url: "https://images.pexels.com/photos/10038697/pexels-photo-10038697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Kahve Coffee",
        type: "drink",
        url: "https://images.pexels.com/photos/11429022/pexels-photo-11429022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Cay Tea",
        type: "drink",
        url: "https://images.pexels.com/photos/1762841/pexels-photo-1762841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];

const menuTypes = ["main", "dessert", "drink"];

function createItemCard(item) {
    let itemCard = document.createElement("div");
    itemCard.classList.add("card", "item-card");

    let itemName = document.createElement("h2");
    itemName.textContent = item.name;
    let itemImg = document.createElement("img");
    itemImg.src = item.url;

    itemCard.appendChild(itemImg);
    itemCard.appendChild(itemName);

    return itemCard;
}

function createMenuPage() {
    let menuPage = document.createElement("div");
    let titleText = document.createElement("h1");
    titleText.textContent = "Menu";
    menuPage.appendChild(titleText);

    let submenuList = {};

    menuTypes.forEach(type => {
        console.log(type)
        let typeCard = document.createElement("div");
        typeCard.classList.add("card-container", "submenu");
        submenuList[type] = typeCard;
        menuPage.appendChild(typeCard);
    });
    
    menu.forEach(item => {
        let itemCard = createItemCard(item);
        submenuList[item.type].appendChild(itemCard);
    });

    return menuPage;
}

const menuPage =  createMenuPage().innerHTML;

var menuPageInit = (`
        <h1>Menu</h1>
    
    <div class="card-container submenu">
        <h2>Mains</h2>
        <div class="card">Kebab</div>
        <div class="card">Corba Soup</div>
    </div>
    
    <div class="card-container submenu">
        <h2>Deserts</h2>
        <div class="card">Baklava</div>
        <div class="card">Kolum</div>
    </div>
    
    <div class="card-container submenu">
        <h2>Drinks</h2>
        <div class="card">Ayran</div>
        <div class="card">Cay Tea</div>
    </div>`
)

export default menuPage;