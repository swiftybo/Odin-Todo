export const project_list = [];

class project {
    constructor(title) {
        this.title = title;
        this.addToProjectList();
    }

    addToProjectList() {
        project_list.push(this);
    }
}

new project("General");
new project("Work");
new project("Life");

console.log(project_list);
