import './style.css';
import createElement from './createElement.js'
import TodoItem from './todoItem.js'
import TodoProject from './todoProject.js'

var currProjectIndex = null;
var currProject = null;

function main() {
    // Initial stuff
    setupOnClicks();
    renderProjects();

    let todoTest = new TodoItem("a", "b", "c", "d", "e");
    let projectTest = new TodoProject("title", "desc", [todoTest]);

    currProjectIndex = 0;
    currProject = 0;

    renderProjectAsCurrent(projectTest);
    
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

    let prompt = createElement("TodoPrompt", currProject, currProjectIndex);
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

    projectsArray.forEach((project, index) => {
        const projectDiv = createElement("Project", project);
        container.appendChild(projectDiv);

        // Render the project data when its div is clicked
        projectDiv.addEventListener("click", () => {
            renderProjectAsCurrent(project, index);
        });
    });
}

function renderProjectAsCurrent(project, index) {
    const titleDiv = document.querySelector(".todo-title .title");
    const descDiv = document.querySelector(".todo-title .desc");

    titleDiv.innerHTML = project.title;
    descDiv.innerHTML = project.desc;

    currProject = project;
    currProjectIndex = index;
    renderTodoItems(project.todoItems);
}

function renderTodoItems(items) {
    // Clear container, then add current project's items
    const container = document.querySelector(".todo-cards-container");
    container.innerHTML = ``;

    items.forEach(item => {
        const itemCardDiv = createElement("TodoItem", item);
        container.appendChild(itemCardDiv);
    });
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