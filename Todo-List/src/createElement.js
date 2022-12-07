export default function createPageElement(eleName, ...params) {
    
}

function createHeaderElement() {
    let header = document.createElement("header");
    return header;
}
function createSidebarElement() {
    let sidebarDiv = document.createElement("div");
    return sidebarDiv;
}
function createTitleCardElement() {
    let titleCardDiv = document.createElement("div");
    return titleCardDiv;
}
function createTodoPageElement() {
    let todoPageDiv = document.createElement("div");
    return todoPageDiv;
}




function createTodoItemElement(todoItem) {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("todo-card");

    let innerHtml = ``;
    for (const attrKey in todoItem) {
        innerHtml = innerHtml + `${todoItem[attrKey]} <br/>`;
    }
    itemDiv.innerHTML = innerHtml;

    return itemDiv;

}

function createTodoDivElement(todoProject) {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    todoProject.getItems().forEach(item => {
        todoDiv.appendChild(createTodoItemElement(item));
    });

    return todoDiv;
}