import { editTodo, todo_list } from "./logic.js";
import { UI } from "./interface.js";

let editBtn;

const todoDisplay = new UI();

todo_list.forEach((todo) => {
    todoDisplay.renderTodo(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.id
    );
    editBtn = document.querySelector(".edit_btn");
});

editBtn.addEventListener("click", function () {
    // console.log(this.dataset.btnid);
    const selectedTodo = document.querySelector(
        `[data-todoid="${this.dataset.btnid}"]`
    );
    console.log(selectedTodo);
});
