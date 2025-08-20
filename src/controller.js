// IMPORTS | EXPORTS
import { edit, todo_list } from "./logic.js";
import { UI } from "./interface.js";

// DOM Elements
const todo_content = document.getElementById("todo_content");
const edit_form = document.querySelector(".edit_form");

const todoDisplay = new UI();

todo_list.forEach((todo) => {
    todoDisplay.renderTodo(todo);
});

// // LESSONLEARNT This code is wrong by only adding event listeners to existing HTML DOM elements and not dynamically created DOM element.
// editBtn.addEventListener("click", function () {
//     // console.log(this.dataset.btnid);

//     // // LESSONLEARNT This code is wrong by selecting the DOM element which has the same data-todoid as the button. The correct way is to edit the source object in the todo_list.
//     // const selectedTodo = document.querySelector(
//     //     `[data-todoid="${this.dataset.btnid}"]`
//     // );

//     const selectedTodo = todo_list.filter(
//         (todo) => todo.id === this.dataset.btnid
//     );
//     todoDisplay.openEditForm(selectedTodo[0]);
// });

// // Event delegation to the Edit Buttons on every Todo
// // LESSONLEARNT Now replaced with global event listener function.
// todo_content.addEventListener("click", function (e) {
//     if (e.target.matches(".edit_btn")) {
//         const selectedTodo = todo_list.filter(
//             (todo) => todo.id === e.target.dataset.btnid
//         );
//         todoDisplay.openEditForm(selectedTodo[0]);
//     }
// });

function addGlobalEventListener(type, selector, DOMelement, callback) {
    DOMelement.addEventListener(type, function (e) {
        if (e.target.matches(selector)) {
            callback(e);
        }
    });
}

addGlobalEventListener("click", ".edit_btn", todo_content, (e) => {
    const selectedTodo = todo_list.filter(
        (todo) => todo.id === e.target.dataset.btnid
    );
    // console.log(selectedTodo);
    todoDisplay.openEditForm(selectedTodo[0]);
});

addGlobalEventListener("click", ".close_btn", edit_form, (e) => {
    if (
        confirm(
            "You will lose all the changes in your form. Press 'OK' to continue or 'Cancel' to continue editing."
        )
    )
        todoDisplay.closeEditForm();
});
