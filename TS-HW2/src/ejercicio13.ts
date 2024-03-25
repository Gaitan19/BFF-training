interface Employee {
  work(task: Task): void;
}

class Task {
  constructor(public description: string) {}
}

class Developer implements Employee {
  constructor(public name: string) {}

  work(task: Task): void {
    console.log(
      `Desarrollador ${this.name} está trabajando en: ${task.description}`
    );
  }
}

class Designer implements Employee {
  constructor(public name: string) {}

  work(task: Task): void {
    console.log(
      `Diseñador ${this.name} está trabajando en: ${task.description}`
    );
  }
}

function assignTask(employee: Employee, task: Task): void {
  employee.work(task);
}

const developer = new Developer("Juan");
const designer = new Designer("Ana");

const task = new Task("Implementar una nueva función");

assignTask(developer, task);
assignTask(designer, task);
