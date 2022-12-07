/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("alert(\"This is Todo-List\")\n/* To Do\n- Create class \"todo\"\n-implement UI to:\nview all projects\nview all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)\nexpand a single todo to see/edit its details\ndelete a todo\n*/\n\nfunction createTodoItemDiv(todoItem) {\n    let itemDiv = document.createElement(\"div\");\n    itemDiv.classList.add(\"todo-card\");\n\n    let innerHtml = ``;\n    for (const attrKey in todoItem) {\n        innerHtml = innerHtml + `${todoItem[attrKey]} <br/>`;\n    }\n    itemDiv.innerHTML = innerHtml;\n\n    return itemDiv;\n\n}\n\nfunction renderTodo() {\n\n}\n\nfunction createTodoDiv(todoProject) {\n    let todoDiv = document.createElement(\"div\");\n    todoDiv.classList.add(\"todo-container\");\n\n    todoProject.getItems().forEach(item => {\n        todoDiv.appendChild(createTodoItemDiv(item));\n    });\n\n    return todoDiv;\n}\n// TodoItem Class //\nfunction TodoItem(...formParams) {\n    this.title = formParams[0];\n    this.desc = formParams[1];\n    this.dueDate = formParams[2];\n    this.priority = formParams[3];\n    this.notes = formParams[4];\n}\n// (checklist)\n// END //\n\n// (object checklist) desc isDone\n\n\n\n// TodoProject Class //\nfunction TodoProject(title, desc, itemsArray) {\n    this.title = title;\n    this.desc = desc;\n    this.items = itemsArray;\n}\n\nTodoProject.prototype.getItems = function() {\n    return this.items;\n}\n// (checklist)\n// END //\n\nlet todoTest = new TodoItem(\"a\", \"b\", \"c\", \"d\", \"e\");\nlet projectTest = new TodoProject(\"title\", \"desc\", [todoTest]);\n\nlet todoDiv = createTodoDiv(projectTest);\nconst content = document.getElementById(\"content\");\ncontent.appendChild(todoDiv);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;