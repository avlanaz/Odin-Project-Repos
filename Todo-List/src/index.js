import './style.css';
import createElement from './createElement.js'
import TodoItem from './todoItem.js'
import TodoProject from './todoProject.js'

/* Tips
- use min/max-height
- use calc
*/

/* To Do
O Create class "todo"
- enable adding todo item via button +
- implement UI to:
view all projects
view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
expand a single todo to see/edit its details
delete a todo
*/

function addNewTodo(...params) {
    let todoItem = new TodoItem(...params);
    let itemDiv = createElement("TodoItem", todoItem);

    document.querySelector(".todo-cards-container").appendChild(itemDiv);
}

function promptAddTodo() {
    //DEBUG Section
    let itemParams = ["a", "b", "c", "d", "e"];
    //addNewTodo(...itemParams);

    //Intended section
    let prompt = createElement("TodoPrompt");
    document.querySelector(".todo-cards-container").appendChild(prompt);
    
}

function renderProject() {

}

function setupOnClicks() {
    const addButton = document.querySelector(".add-todo");
    addButton.addEventListener("click", promptAddTodo);
}


// Initial stuff
setupOnClicks();

let todoTest = new TodoItem("a", "b", "c", "d", "e");
let projectTest = new TodoProject("title", "desc", [todoTest]);

let todoDiv = createElement("TodoDiv", projectTest);
const content = document.getElementById("content");
content.appendChild(todoDiv);