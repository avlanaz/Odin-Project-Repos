/* To do
- interact with todoitem
*/
// TodoProject Class //
export default function TodoProject(title, desc, itemsArray) {
    this.title = title;
    this.desc = desc;
    this.items = itemsArray;
}

TodoProject.prototype.getItems = function() {
    return this.items;
}
// (checklist)
// END //