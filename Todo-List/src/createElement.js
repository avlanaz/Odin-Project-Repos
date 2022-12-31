import TodoItem from "./todoItem";

export default function createElement(elemName, ...params) {
    if (elemName === "TodoDiv") {
        // ...params = [todoProject]
        return createTodoDiv(params[0]);
    }
    if (elemName === "TodoItem") {
        // ...params = [todoItem]
        return createTodoItem(...params);
    }
    if (elemName === "TodoPrompt") {
        // ...params n/a
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
    console.log("Calling createTodoPrompt")
    let todoPrompt = document.createElement("div");
    todoPrompt.classList.add("prompt");
    let inputs = [];

    inputs.push(createInput("title"));
    inputs.push(createInput("desc"));
    inputs.push(createInput("dueDate"));
    inputs.push(createInput("priority"));
    inputs.push(createInput("notes"));

    inputs.forEach(input => {
         todoPrompt.appendChild(input);
         
    });

    let enterButton = document.createElement("button");
    enterButton.addEventListener("click", onPromptEnterButton);
    todoPrompt.appendChild(enterButton);

    return todoPrompt;
}

function onPromptEnterButton() {
    // Get data from prompt then destroy it
    let promptDiv = document.querySelector(".prompt");
    let inputElems = promptDiv.querySelectorAll("input");
    let todoParams = []

    inputElems.forEach(input => {
        todoParams.push(input.value);
    });
    promptDiv.parentNode.removeChild(promptDiv);
    
    // Create a TodoItem based on input
    let itemDiv = createElement("TodoItem", new TodoItem(...todoParams));
    document.querySelector(".todo-cards-container").appendChild(itemDiv);
}

function createInput(inputName) {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add(inputName);
    input.setAttribute("name", inputName)

    return input;
}