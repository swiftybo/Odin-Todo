export const todo_list = [];

export class todo {
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
        this.id = `${this.title[0]}${now.getHours()}${this.dueDate.slice(
            0,
            2
        )}${now.getDate()}`;
        // console.log(this.id);
    }

    editTodo(
        newDescription = this.description,
        newDate = this.dueDate,
        newPriority = this.priority
    ) {
        this.description = newDescription;
        this.dueDate = newDate;
        this.priority = newPriority;
    }
}

export function createTodo(title, description, dueDate, priority) {
    return new todo(title, description, dueDate, priority);
}

// // Gabriella's code:
// console.log("i can code desu");
