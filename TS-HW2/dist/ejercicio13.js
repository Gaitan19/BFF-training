"use strict";
class Task {
    constructor(description) {
        this.description = description;
    }
}
class Developer {
    constructor(name) {
        this.name = name;
    }
    work(task) {
        console.log(`Desarrollador ${this.name} está trabajando en: ${task.description}`);
    }
}
class Designer {
    constructor(name) {
        this.name = name;
    }
    work(task) {
        console.log(`Diseñador ${this.name} está trabajando en: ${task.description}`);
    }
}
function assignTask(employee, task) {
    employee.work(task);
}
const developer = new Developer("Juan");
const designer = new Designer("Ana");
const task = new Task("Implementar una nueva función");
assignTask(developer, task);
assignTask(designer, task);
