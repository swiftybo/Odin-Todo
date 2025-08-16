export const todo_list = [];

class todo {
    constructor(title, description, dueDate, priority, project = "General") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.addToList();
        this.generateID();
    }

    addToList() {
        todo_list.push(this);
        console.log(todo_list);
    }

    generateID() {
        const now = new Date();
        this.id = `${now.getHours()}${now.getMinutes()}${now.getDate()}`;
        console.log(this.id);
    }
}

const firstTodo = new todo(
    "Practice Violin",
    "Practice violin songs for Sophie's wedding",
    "22/07/2025",
    "High"
);

// export function edit() {
//     window.prompt("New todo: something else");
// }

// // Gabriella's code:
// console.log("i can code desu");
