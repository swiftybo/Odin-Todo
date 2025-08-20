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
        // console.log(todo_list);
    }

    generateID() {
        const now = new Date();
        this.id = `${now.getHours()}${now.getMinutes()}${now.getDate()}`;
        // console.log(this.id);
    }

    editTodo(newDescription, newDate, newPriority) {
        this.description = newDescription;
        this.dueDate = newDate;
        this.priority = newPriority;
    }
}

const firstTodo = new todo(
    "Practice Violin",
    "Practice violin songs for Sophie's wedding",
    "22/07/2025",
    "High"
);

// // Gabriella's code:
// console.log("i can code desu");
