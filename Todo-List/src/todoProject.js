
// TodoProject Class //
export default class TodoProject {

    constructor (title, desc, todoItems) {
        this.title = title;
        this.desc = desc;
        this.todoItems = todoItems;
    }

    getTodoItems() {
        return this.todoItems;
    }

    addTodoItems(item) {
        this.todoItems.push(item);
    }

    
    removeTodoItems(item) {
        this.todoItems.remove(item);
    }
}
