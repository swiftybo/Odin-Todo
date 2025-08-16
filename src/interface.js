const todo_content = document.getElementById("todo_content");

export class UI {
    constructor() {}

    renderTodo(title, description, dueDate, priority, id) {
        const html = `<div class="todo" id="first_todo" data-todoid=${id}>
        <h3 class="todo_title">${title}</h3>
        <div><strong>Description: </strong><span>${description}</span></div>
        <br>
        <div><strong>Due Date: </strong><span>${dueDate}</span></div>
        <br>
        <div><strong>Priority: </strong><span>${priority}</span></div>
        <br>
        <button class="todo_btn edit_btn" data-btnid=${id}>Edit</button>
        <button class="todo_btn done_btn">Mark Complete</button>
        </div>`;

        todo_content.insertAdjacentHTML("beforeend", html);
    }

    editTodo() {
        const html = `<div class="todo">
        <h3 class="todo_title">${title}</h3>
        <div><strong>Description: </strong><span><input placeholder=""></input>></span></div>
        <br>
        <div><strong>Due Date: </strong><span>${dueDate}</span></div>
        <br>
        <div><strong>Priority: </strong><span>${priority}</span></div>
        <br>
        <button class="todo_btn edit_btn">Edit</button>
        <button class="todo_btn done_btn">Mark Complete</button>
        </div>`;
    }
}
