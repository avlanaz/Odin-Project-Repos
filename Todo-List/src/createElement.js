export default function createElement(elemName, ...params) {
    if (elemName === "TodoDiv") {
        // ...params = [todoProject]
        return createTodoDiv(params[0]);
    }
    if (elemName === "TodoItem") {
        // ...params = [todoItem]
        return createTodoPrompt();
    }
    if (elemName === "TodoPrompt") {
        // ...params = [todoItem]
        return createTodoPrompt();
    }
    return;
}

function createHeader() {
    let header = document.createElement("header");
    return header;
}
function createSidebar() {
    let sidebarDiv = document.createElement("div");
    return sidebarDiv;
}
function createTitleCard() {
    let titleCardDiv = document.createElement("div");
    return titleCardDiv;
}
function createTodoPage() {
    let todoPageDiv = document.createElement("div");
    return todoPageDiv;
}




function createTodoItem(todoItem) {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("todo-card");

    let innerHtml = ``;
    for (const attrKey in todoItem) {
        innerHtml = innerHtml + `${todoItem[attrKey]} <br/>`;
    }
    itemDiv.innerHTML = innerHtml;

    return itemDiv;

}

function createTodoDiv(todoProject) {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    todoProject.getItems().forEach(item => {
        todoDiv.appendChild(createTodoItem(item));
    });

    return todoDiv;
}

function createTodoPrompt() {
    let todoPrompt = document.createElement("form");
    let inputs = [];

    inputs.push(createInput("title"));
    inputs.push(createInput("desc"));
    inputs.push(createInput("dueDate"));
    inputs.push(createInput("priority"));
    inputs.push(createInput("notes"));

    inputs.forEach(input => {
         todoPrompt.appendChild(input);
         
    });

    return todoPrompt;
}

function createInput(inputName) {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add(inputName);
    input.setAttribute("name", inputName)

    return input;
}