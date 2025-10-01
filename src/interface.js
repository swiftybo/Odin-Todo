import { project_list } from "./projectsLogic";

const todo_content = document.getElementById("todo_content");
const edit_form = document.querySelector(".edit_form");
const add_form = document.querySelector(".add_form");

const sidebar = document.getElementById("sidebar");
const pageContent = document.querySelector(".container");

export class UI {
    constructor() {}

    renderTodo(todo) {
        const incompleteTodoHtml = `<div class="todo ${todo.status}" data-todoid="${todo.id}">
        <h3 class="todo_title">${todo.title}</h3>
        <div><strong>Description: </strong><span>${todo.description}</span></div>
        <br>
        <div><strong>Due Date: </strong><span>${todo.formattedDueDate}</span></div>
        <br>
        <div><strong>Priority: </strong><span>${todo.priority}</span></div>
        <br>
        <button class="todo_btn edit_btn" data-btnid=${todo.id}>Edit</button>
        <button class="todo_btn done_btn" data-btnid=${todo.id}>Mark Complete</button>
        </div>`;

        const completeTodoHtml = `<div class="todo ${todo.status}" data-todoid="${todo.id}">
        <h3 class="todo_title">${todo.title}</h3>
        <h4 class="completedTodoHeader">[COMPLETED]</h4>
        <div><strong>Description: </strong><span>${todo.description}</span></div>
        <br>
        <div><strong>Due Date: </strong><span>${todo.formattedDueDate}</span></div>
        <br>
        <div><strong>Priority: </strong><span>${todo.priority}</span></div>
        <br>
        <button class="todo_btn edit_btn" data-btnid=${todo.id}>Edit</button>
        <button class="todo_btn undone_btn" data-btnid=${todo.id}>Mark Incomplete</button>
        </div>`;

        if (todo.status === "Incomplete")
            todo_content.insertAdjacentHTML("beforeend", incompleteTodoHtml);
        else {
            todo_content.insertAdjacentHTML("beforeend", completeTodoHtml);
        }
    }

    openEditForm(todo, todoid) {
        edit_form.id = todoid;
        const reformattedDate = todo.formattedDueDate
            .split("-")
            .reverse()
            .join("-");

        const html = `<h2 class="form_title">Edit "${todo.title}" Todo</h2><br>
        <label for="amended_description"><strong>Description: </strong></label>
        <textarea id="amended_description" rows="4" cols="40" required placeholder="Previous description: ${todo.description}">${todo.description} required</textarea></div>
        <br> <br>
        <label for="amended_date"><strong>Due Date: </strong></label>
        <input type="date" id="amended_date" placeholder="Previous date: ${reformattedDate}" value="${reformattedDate}" required/>
        <br> <br>
        <label for="amended_priority"><strong>Priority: </strong></label
            ><select name="priority" id="amended_priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        <br> <br>
        <button type="button" class="todo_btn close_btn">Close</button>
        <button type="button" class="todo_btn confirm_btn">Confirm</button>`;

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

    openSidebar() {
        sidebar.style.width = "15.5rem";
        pageContent.style.marginLeft = "15.5rem";
    }

    closeSidebar() {
        sidebar.style.width = "0rem";
        pageContent.style.marginLeft = "0rem";
    }

    renderProjects() {
        project_list.map((project) => {
            const html = `<button class="navigation_btn">${project.title}</button>`;

            sidebar.insertAdjacentHTML("beforeend", html);
        });
    }
}
