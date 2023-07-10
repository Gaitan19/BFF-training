let elements = document.getElementById("contElements");
let input = document.getElementById("inputText");
let list = document.getElementById("list");
let listNum = 0;
let backColor = 2;

let predefinedLoaded = false; // Variable para verificar si las tareas predefinidas ya han sido cargadas

const predefinedTasks = [
  "Walk the dog",
  "Authenticate with passport-js",
  "Validate register input",
  "Create reddit website",
  "Store sessions on mongodb"
];

// Cargar las tareas guardadas del almacenamiento local al iniciar la página
window.addEventListener('load', () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (savedTasks) {
    savedTasks.forEach(task => {
      let listElement = createListElement(task);
      list.appendChild(listElement);
      listNum++;
      contTask();
      if (backColor === 2) {
        backColor = 3;
      } else {
        backColor = 2;
      }
    });
  }
  // Mostrar las tareas predefinidas solo si no han sido cargadas previamente y no hay tareas guardadas en el almacenamiento local
  if (!predefinedLoaded && (!savedTasks || savedTasks.length === 0)) {
    predefinedTasks.forEach(task => {
      let listElement = createListElement(task);
      list.appendChild(listElement);
      listNum++;
      contTask();
      if (backColor === 2) {
        backColor = 3;
      } else {
        backColor = 2;
      }
    });
    predefinedLoaded = true; // Actualizar el estado de las tareas predefinidas a cargadas
  }
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (input.value && input.value.length > 1) {
      if (input.classList.contains('editing')) {
        const editingTaskId = parseInt(input.getAttribute('data-task-id'));
        updateList(editingTaskId);
      } else {
        addList();
      }
    } else {
      alert("Please enter a task");
    }
  }
});

addList = () => {
  let inputText = filterList(input.value);
  if (inputText) {
    let listElement = createListElement(inputText);
    list.appendChild(listElement);
    input.value = "";
    listNum++;
    contTask();
    if (backColor === 2) {
      backColor = 3;
    } else {
      backColor = 2;
    }
    saveTasksToLocalStorage();
  }
};

createListElement = (text) => {
  let listItemClass = backColor % 2 === 0 ? 'To-do-list-group-gray' : 'To-do-list-group-white';

  let listElement = document.createElement('li');
  listElement.setAttribute('class', `list-group-item To-do-list-group-item ${listItemClass}`);
  listElement.setAttribute('id', `list${listNum}`);

  let listItemContent = `
    <div class="form-check">
      <input class="form-check-input To-do-list-check" type="checkbox" id="flexCheckDefault${listNum}">
      <label class="form-check-label To-do-list-text" id="text${listNum}">
        ${text}
      </label>
    </div>
    <div class="To-do-list-group-buttons">
      <button type="button" class="btn btn-success To-do-list-button" onclick="editList(${listNum})">
        <span class="fa-solid fa-pen-to-square To-do-list-button-icon"></span>
      </button>
      <button type="button" class="btn btn-danger To-do-list-button" onclick="deleteList(${listNum})">
        <span class="fa-sharp fa-solid fa-trash To-do-list-button-icon"></span>
      </button>
    </div>
  `;
  listElement.innerHTML = listItemContent;

  return listElement;
};

filterList = (x) => {
  if (x) {
    if (x.length > 1) {
      return x;
    } else {
      alert("Please enter a task");
    }
  } else {
    return false;
  }
};

editList = (listId) => {
  let currentText = document.getElementById(`text${listId}`);
  input.value = currentText.textContent.trim();
  input.classList.add('editing');
  input.setAttribute('data-task-id', listId);
  let submitButton = document.querySelector('.To-do-list-submit');
  submitButton.innerHTML = `
    <span class="To-do-list-submit-format">Edit</span>
    <span class="fa-sharp fa-solid fa-edit To-do-list-submit-format"></span>
  `;
  submitButton.setAttribute('onclick', `updateList(${listId})`);
};

updateList = (listId) => {
  let newText = input.value;
  if (newText && newText.length > 1) {
    let currentText = document.getElementById(`text${listId}`);
    currentText.textContent = newText;
    input.value = "";
    input.classList.remove('editing');
    input.removeAttribute('data-task-id');
    let submitButton = document.querySelector('.To-do-list-submit');
    submitButton.innerHTML = `
      <span class="To-do-list-submit-format">Submit</span>
      <span class="fa-sharp fa-solid fa-paper-plane To-do-list-submit-format"></span>
    `;
    submitButton.setAttribute('onclick', 'addList()');
    saveTasksToLocalStorage();
  } else {
    alert("Please enter a task");
  }
};

deleteList = (listId) => {
  let current = document.getElementById(`text${listId}`).innerHTML;
  let c = document.getElementById(`list${listId}`);
  c.parentNode.removeChild(c);
  contTask();
  saveTasksToLocalStorage();
};

contTask = () => {
  let taskElements = list.querySelectorAll('li');
  let numTask = taskElements.length;

  elements.value = " ";
  elements.textContent = `Todos (${numTask})`;
};

saveTasksToLocalStorage = () => {
  const taskElements = list.querySelectorAll('.To-do-list-text');
  const tasks = Array.from(taskElements).map(taskElement => taskElement.textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};