import TodoItem from "./todoItem";
import TodoProject from "./todoProject"

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
        // ...params = [project, projIndex]
        return createTodoPrompt(...params);
    }
    if (elemName === "Project") {
        // ...params = [project]
        return createProject(...params);
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

function createProject(project) {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    let innerHtml = project.title;
    projectDiv.innerHTML += innerHtml;
    

    return projectDiv;
}

function createTodoItem(todoItem) {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("todo-card");

    let innerHtml = ``;
    for (const attrKey in todoItem) {
        innerHtml = innerHtml + `<div class="todo-entry">${todoItem[attrKey]}</div>`;
    }
    itemDiv.innerHTML = innerHtml;

    return itemDiv;

}

function createTodoDiv(todoProject) {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    todoProject.getTodoItems().forEach(item => {
        todoDiv.appendChild(createTodoItem(item));
    });

    return todoDiv;
}

function createTodoPrompt(project, projIndex) {
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
    enterButton.addEventListener("click", () => onPromptEnterButton(project, projIndex));
    todoPrompt.appendChild(enterButton);

    return todoPrompt;
}

function onPromptEnterButton(project, projIndex) {
    // Get data from prompt then destroy it
    let promptDiv = document.querySelector(".prompt");
    let inputElems = promptDiv.querySelectorAll("input");
    let todoParams = [];

    inputElems.forEach(input => {
        todoParams.push(input.value);
    });
    promptDiv.parentNode.removeChild(promptDiv);
    
    // Create a TodoItem based on input
    const newItem = new TodoItem(...todoParams);
    const itemDiv = createElement("TodoItem", newItem);
    document.querySelector(".todo-cards-container").appendChild(itemDiv);

    // Add todoItem to current project's local storage
    project.todoItems.push(newItem);
    updateProject(project, projIndex)

    // Re-enable add todo button
    document.querySelector(".add-todo").disabled = false;
}

function updateProject(project, projIndex) {
    let projects = localStorage.getObj("todo-projects");
    projects[projIndex] = project;
    localStorage.setObj("todo-projects", projects);
}

function createInput(inputName) {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add(inputName);
    input.setAttribute("name", inputName)

    return input;
}