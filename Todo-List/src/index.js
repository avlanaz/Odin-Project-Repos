import './style.css';
import createElement from './createElement.js'
import TodoItem from './todoItem.js'
import TodoProject from './todoProject.js'

function main() {
    // Initial stuff
    setupOnClicks();
    renderProjects();

    let todoTest = new TodoItem("a", "b", "c", "d", "e");
    let projectTest = new TodoProject("title", "desc", [todoTest]);

    let todoDiv = createElement("TodoDiv", projectTest);
    const content = document.getElementById("content");
    content.appendChild(todoDiv);
}

function addNewProject() {
    // Make default project
    let newProject = new TodoProject("New Project", "No description yet", []);

    // Add it to localStorage
    let projects = localStorage.getObj("todo-projects");
    if (projects === null) {
        // reset array of projects
        projects = [];
        localStorage.setObj("todo-projects", projects);
    }
    projects.push(newProject);
    localStorage.setObj("todo-projects", projects);

    // refresh sidebar
    renderProjects();
}


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
    // Disable Add Button
    document.querySelector(".add-todo").disabled = true;

    let prompt = createElement("TodoPrompt");
    document.querySelector(".todo-cards-container").appendChild(prompt);
    
}

function renderProjects() {
    // localStorage.removeItem("todo-projects");
    const container = document.querySelector(".projects-container");
    container.innerHTML = "";       //Clear the div

    let projectsArray = localStorage.getObj("todo-projects");
    if (projectsArray === null) {
        // Initialise storage for projects
        projectsArray = [];
        localStorage.setObj("todo-projects", projectsArray);
    }

    projectsArray.forEach(project => {
        container.appendChild(createElement("Project", project));
    });
}

function renderProjectAsCurrent(project) {

}

function setupOnClicks() {
    const addTodo = document.querySelector(".add-todo");
    const addProject = document.querySelector(".add-project");

    addTodo.addEventListener("click", promptAddTodo);
    addProject.addEventListener("click", addNewProject);
}





// localStorage extension to include objects

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

main();