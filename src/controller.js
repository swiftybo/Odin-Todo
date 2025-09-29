// IMPORTS | EXPORTS
import { todo, todo_list, createTodo } from "./logic.js";
import { UI } from "./interface.js";

// DOM Elements
// Sections & Forms
const todo_content = document.getElementById("todo_content");
const edit_form = document.querySelector(".edit_form");
const add_form = document.querySelector(".add_form");

// Buttons - Add Form
// This is the button to display the 'add todo' form.
const todoadd_btn = document.querySelector(".todoadd_btn");
const exit_form = document.querySelector(".exitform_btn");
const add_btn = document.querySelector(".add_btn");
const add__title = document.getElementById("new_title");
const add__description = document.getElementById("new_description");
const add__date = document.getElementById("new_date");
const add__priority = document.getElementById("new_priority");

const todoDisplay = new UI();
new todo(
    "Practice Violin",
    "Practice violin songs for Sophie's wedding.",
    "2025-08-21",
    "High"
);

// // LESSONLEARNT todo ID is now based on todo name and due date instead of only time of creation so that multiple todos can be rendered at start.
new todo(
    "Finish Odin Project",
    "Complete all modules and projects on the Odin Project Intermediate Js Course.",
    "2025-09-26",
    "High"
);

function renderTodos() {
    todo_content.innerHTML = "";
    todo_list.forEach((todo) => {
        todoDisplay.renderTodo(todo);
    });
}

renderTodos();
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

// Event listener for edit button on each todo
addGlobalEventListener("click", ".edit_btn", todo_content, function (e) {
    const selectedTodo = todo_list.filter(
        (todo) => todo.id === e.target.dataset.btnid
    );
    // console.log(selectedTodo);
    todoDisplay.openEditForm(selectedTodo[0], selectedTodo[0].id);
});

// Event listener to mark a todo as "Complete"
addGlobalEventListener("click", ".done_btn", todo_content, function (e) {
    const [selectedTodo] = todo_list.filter(
        (todo) => todo.id === e.target.dataset.btnid
    );
    selectedTodo.toggleTodoStatus();
    console.log(selectedTodo);

    renderTodos();
});

// Event listener to mark a todo as "Incomplete"
addGlobalEventListener("click", ".undone_btn", todo_content, function (e) {
    const [selectedTodo] = todo_list.filter(
        (todo) => todo.id === e.target.dataset.btnid
    );
    selectedTodo.toggleTodoStatus();
    console.log(selectedTodo);

    renderTodos();
});

// Event listener to close 'edit form'
addGlobalEventListener("click", ".close_btn", edit_form, (e) => {
    if (
        confirm(
            "You will lose all the changes in your form. Press 'OK' to continue or 'Cancel' to continue editing."
        )
    )
        todoDisplay.closeEditForm();
});

// Event listener to submit 'edit form'
addGlobalEventListener("click", ".confirm_btn", edit_form, function (e) {
    const descriptionInput = document.getElementById("amended_description");
    const dateInput = document.getElementById("amended_date");
    const priorityInput = document.getElementById("amended_priority");

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

    // Format the date
    const formattedDate = selectedTodo.formatDate(dateInput.value);

    // Edits object fields for the relevant todo
    selectedTodo.editTodo(
        descriptionInput.value,
        formattedDate,
        priorityInput.value
    );

    // Removes HTML for existing relevant todo
    todoDisplay.removeTodo(selectedTodo.id);

    // Renders new HTML for todo with edited information
    todoDisplay.renderTodo(selectedTodo);

    // Closes the edit form
    todoDisplay.closeEditForm();
});

// Event listener for "Add To-do to Current Project' button
todoadd_btn.addEventListener("click", function () {
    todoDisplay.openAddForm();
});

// Event listener to close 'Add To-do' Form
exit_form.addEventListener("click", function () {
    todoDisplay.exitAddForm();
});

// Event listener to process form fields and generate new todo
add_btn.addEventListener("click", function () {
    const newTitle = add__title.value;
    const newDescription = add__description.value;
    const newDate = add__date.value;
    const newPriority = add__priority.value;

    // Ensure all fields in the form are valid before performing any actions
    if (add_form.checkValidity()) {
        createTodo(newTitle, newDescription, newDate, newPriority);
        todoDisplay.exitAddForm();
        renderTodos();
    }
});
