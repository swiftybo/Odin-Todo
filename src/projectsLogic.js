export const project_list = [];

export class project {
    constructor(title) {
        this.title = title;
        this.addToProjectList();
    }

    addToProjectList() {
        project_list.push(this);
    }
}

new project("All Todos");
new project("Work");
new project("Life");

console.log(project_list);
