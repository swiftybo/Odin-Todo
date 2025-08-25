// IMPORTS | EXPORTS
import { todo, todo_list } from "./logic.js";
import { UI } from "./interface.js";

// DOM Elements
const todo_content = document.getElementById("todo_content");
const edit_form = document.querySelector(".edit_form");

const todoDisplay = new UI();
const first_todo = new todo(
    "Practice Violin",
    "Practice violin songs for Sophie's wedding.",
    "22/08/2025",
    "High"
);

// // LESSONLEARNT todo ID is now based on todo name and due date instead of only time of creation so that multiple todos can be rendered at start.
const second_todo = new todo(
    "Finish Odin Project",
    "Complete all modules and projects on the Odin Project Intermediate Js Course.",
    "26/09/2025",
    "High"
);

todo_list.forEach((todo) => {
    todoDisplay.renderTodo(todo);
});

console.log(todo_list);

// // LESSONLEARNT This code is wrong by only adding event listeners to existing HTML DOM elements and not dynamically created DOM element. This has been fixed by using event delegation through the addGlobalEventListener function.
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
// // LESSONLEARNT Now replaced with addGlobalEventListener function.
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

addGlobalEventListener("click", ".edit_btn", todo_content, function (e) {
    const selectedTodo = todo_list.filter(
        (todo) => todo.id === e.target.dataset.btnid
    );
    // console.log(selectedTodo);
    todoDisplay.openEditForm(selectedTodo[0], selectedTodo[0].id);
});

addGlobalEventListener("click", ".close_btn", edit_form, (e) => {
    if (
        confirm(
            "You will lose all the changes in your form. Press 'OK' to continue or 'Cancel' to continue editing."
        )
    )
        todoDisplay.closeEditForm();
});

addGlobalEventListener("click", ".confirm_btn", edit_form, function (e) {
    const descriptionInput = document.querySelector(".description__area");
    const dateInput = document.querySelector(".date__input");
    const priorityInput = document.querySelector(".priority__input");

    // Blocker if there is any empty input field, which prompts the user to check all fields are populated.
    if (
        descriptionInput.value === "" ||
        dateInput.value === "" ||
        priorityInput.value === ""
    ) {
        alert("Please make sure every field is populated before submitting.");
        return;
    }

    // LESSONLEARNT Remeber that array.filter method returns an ARRAY of objects that pass the test! Here array destructuring is used.
    const [selectedTodo] = todo_list.filter((todo) => {
        return todo.id === edit_form.id;
    });

    // Edits object fields for the relevant todo
    selectedTodo.editTodo(
        descriptionInput.value,
        dateInput.value,
        priorityInput.value
    );

    // Removes HTML for existing relevant todo
    todoDisplay.removeTodo(selectedTodo.id);

    // Renders new HTML for todo with edited information
    todoDisplay.renderTodo(selectedTodo);

    // Closes the edit form
    todoDisplay.closeEditForm();
});
