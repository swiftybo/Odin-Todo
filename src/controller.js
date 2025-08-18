import { edit, todo_list } from "./logic.js";
import { UI } from "./interface.js";

const todo_content = document.getElementById("todo_content");

const todoDisplay = new UI();

todo_list.forEach((todo) => {
    todoDisplay.renderTodo(todo);
});

// editBtn.addEventListener("click", function () {
//     // console.log(this.dataset.btnid);

//     // // This code is wrong by selecting the DOM element which has the same data-todoid as the button. The correct way is to edit the source object in the todo_list.
//     // const selectedTodo = document.querySelector(
//     //     `[data-todoid="${this.dataset.btnid}"]`
//     // );
//     // console.log(selectedTodo);

//     const selectedTodo = todo_list.filter(
//         (todo) => todo.id === this.dataset.btnid
//     );
//     console.log(selectedTodo);
//     todoDisplay.openEditForm(selectedTodo[0]);
// });

// Event delegation to the Edit Buttons on every Todo
todo_content.addEventListener("click", function (e) {
    if (e.target.matches(".edit_btn")) {
        const selectedTodo = todo_list.filter(
            (todo) => todo.id === e.target.dataset.btnid
        );
        console.log(selectedTodo);
        todoDisplay.openEditForm(selectedTodo[0]);
    }
});
