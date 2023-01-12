
// TodoProject Class //
export default class TodoProject {

    constructor (title, desc, itemsArray) {
        this.title = title;
        this.desc = desc;
        this.todoItems = itemsArray;
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
