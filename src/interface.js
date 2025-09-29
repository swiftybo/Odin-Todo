const todo_content = document.getElementById("todo_content");
const edit_form = document.querySelector(".edit_form");
const add_form = document.querySelector(".add_form");

export class UI {
    constructor() {}

    renderTodo(todo) {
        const html = `<div class="todo" data-todoid=${todo.id}>
        <h3 class="todo_title">${todo.title}</h3>
        <div><strong>Description: </strong><span>${todo.description}</span></div>
        <br>
        <div><strong>Due Date: </strong><span>${todo.dueDate}</span></div>
        <br>
        <div><strong>Priority: </strong><span>${todo.priority}</span></div>
        <br>
        <button class="todo_btn edit_btn" data-btnid=${todo.id}>Edit</button>
        <button class="todo_btn done_btn">Mark Complete</button>
        </div>`;

        todo_content.insertAdjacentHTML("beforeend", html);
    }

    openEditForm(todo, todoid) {
        edit_form.id = todoid;

        const html = `<h2 class="form_title">Edit "${todo.title}" Todo</h2><br>
        <div><strong>Description: </strong><textarea rows="4" cols="40" class="description__area" placeholder="Previous description: ${todo.description}">${todo.description}</textarea></div>
        <br>
        <div><strong>Due Date: </strong><input class="date__input" placeholder="Previous date: ${todo.dueDate}" value="${todo.dueDate}"></input></div>
        <br>
        <div><strong>Priority: </strong><input class="priority__input" placeholder="Previous priority: ${todo.priority} "value="${todo.priority}"></input></div>
        <br>
        <button class="todo_btn close_btn">Close</button>
        <button class="todo_btn confirm_btn">Confirm</button>`;

        edit_form.insertAdjacentHTML("afterbegin", html);
        edit_form.style.display = "block";
    }

    closeEditForm() {
        edit_form.style.display = "none";
        edit_form.innerHTML = "";
    }

    removeTodo(id) {
        const selectedTodoHTML = document.querySelector(
            `[data-todoid="${id}"]`
        );
        selectedTodoHTML.remove();
    }

    openAddForm() {
        add_form.style.display = "block";
    }

    exitAddForm() {
        add_form.reset();
        add_form.style.display = "none";
    }
}
