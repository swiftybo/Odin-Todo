export const todo_list = [];

export class todo {
    constructor(title, description, dueDate, priority, project = "General") {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.project = project;
        this.status = "Incomplete";
        this.formatDate(dueDate);
        this.addToList();
        this.generateID();
    }

    formatDate(dueDate) {
        const formattedDate = dueDate.split("-").reverse().join("-");
        this.formattedDueDate = formattedDate;
    }

    addToList() {
        todo_list.push(this);
    }

    generateID() {
        const now = new Date();
        this.id = `${
            this.title[0]
        }${now.getHours()}${this.formattedDueDate.slice(0, 2)}${now.getDate()}`;
    }

    editTodo(
        newDescription = this.description,
        newDate = this.formattedDueDate,
        newPriority = this.priority
    ) {
        this.description = newDescription;
        this.dueDate = newDate;
        this.priority = newPriority;
    }

    markTodoComplete() {
        this.status = "Complete";
    }
}

export function createTodo(title, description, dueDate, priority) {
    return new todo(title, description, dueDate, priority);
}

// // Gabriella's code:
// console.log("i can code desu");
