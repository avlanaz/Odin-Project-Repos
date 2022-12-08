import './style.css';
import createElement from './createElement.js'
/* To Do
O Create class "todo"
- implement UI to:
view all projects
view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
expand a single todo to see/edit its details
delete a todo
*/



function renderTodo() {

}


// TodoItem Class //
function TodoItem(...formParams) {
    this.title = formParams[0];
    this.desc = formParams[1];
    this.dueDate = formParams[2];
    this.priority = formParams[3];
    this.notes = formParams[4];
}
// (checklist)
// END //

// (object checklist) desc isDone



// TodoProject Class //
function TodoProject(title, desc, itemsArray) {
    this.title = title;
    this.desc = desc;
    this.items = itemsArray;
}

TodoProject.prototype.getItems = function() {
    return this.items;
}
// (checklist)
// END //

let todoTest = new TodoItem("a", "b", "c", "d", "e");
let projectTest = new TodoProject("title", "desc", [todoTest]);

let todoDiv = createElement("TodoDiv", projectTest);
const content = document.getElementById("content");
content.appendChild(todoDiv);