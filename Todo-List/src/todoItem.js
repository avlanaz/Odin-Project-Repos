/* To do
- workable todoitem
- enable editing via input div elements
- workable todo checklist
*/

// TodoItem Class //
export default class TodoItem {

    constructor (...formParams) {
        this.title = formParams[0];
        this.desc = formParams[1];
        this.dueDate = formParams[2];
        this.priority = formParams[3];
        this.notes = formParams[4];
    }

    // Edit the Item
    editItem(...params) {
        this.title = formParams[0];
        this.desc = formParams[1];
        this.dueDate = formParams[2];
        this.priority = formParams[3];
        this.notes = formParams[4];
        return;
    }

    // Delete the Item
    deleteItem(itemElement) {
        // DO WITH element.remove instead!!!
        // dont forget to destroy class
        itemElement.remove();
    }
}

class TodoItemWithChecklist extends TodoItem {
    constructor (...formParams) {
        super(formParams);
        this.checklist = [];
    }
}
// END //

// (object checklist) desc isDone