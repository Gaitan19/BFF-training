let elements = document.getElementById("contElements");
let input = document.getElementById("inputText");
let list = document.getElementById("list");
let listNum = 0;

window.addEventListener('load', () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (savedTasks) {
    savedTasks.forEach(task => {
      let listElement = createListElement(task.text, task.completed);
      list.appendChild(listElement);
      listNum++;
      contTask();
    });
    changeBackground();
  }
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (input.value && input.value.length > 1 && input.classList.contains('To-do-list-input')) {
      addList();
    }
  }
});

const addList = () => {
  let inputText = filterList(input.value);
  if (inputText) {
    let listElement = createListElement(inputText);
    list.appendChild(listElement);
    input.value = "";
    listNum++;
    contTask();
    saveTasksToLocalStorage();
  }
  changeBackground();
};

const createListElement = (text, completed = false) => {
  let listElement = document.createElement('li');
  listElement.setAttribute('class', `list-group-item To-do-list-group-item`);
  listElement.setAttribute('id', `list${listNum}`);

  let listItemContent = `
    <div class="form-check">
      <input class="form-check-input To-do-list-check ${mode === 'dark' ? 'dark-mode-checkBox' : ''}" type="checkbox" id="flexCheckDefault${listNum}" ${completed ? 'checked' : ''} onchange="toggleTask(this)">
      <label class="form-check-label To-do-list-text ${completed ? 'completed' : ''} ${mode === 'dark' ? 'dark-mode-text' : ''}" id="text${listNum}">${text}</label>
    </div>
    <div class="To-do-list-group-buttons">
      <button type="button" class="btn btn-success To-do-list-button ${mode === 'dark' ? 'dark-mode-btn' : ''}" onclick="editList(${listNum})">
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

const filterList = (x) => {
  if (x) {
    if (x.length > 1 && x.length <= 44) {
      return x;
    } else if (x.length <= 1) {
      alert("the task must have more than one character");
    } else {
      alert("the task must have less than 45 characters");
    }
  } else {
    return false;
  }
};

const editList = (listId) => {
  let currentText = document.getElementById(`text${listId}`);
  let currentTextInput = document.createElement('input');
  currentTextInput.value = currentText.textContent;
  currentTextInput.classList.add('To-do-list-input');
  currentTextInput.classList.add('To-do-list-input-edit');
  if (mode === 'dark') {
    currentTextInput.classList.add("dark-mode-text");
  } else {
    currentTextInput.classList.remove("dark-mode-text");
  }

  currentText.replaceWith(currentTextInput);
  currentTextInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      let newText = filterList(currentTextInput.value);
      if (newText && newText.length > 1) {
        currentTextInput.replaceWith(currentText);
        currentText.textContent = newText;
        if (mode === 'dark') {
          currentText.classList.add("dark-mode-text");
        } else {
          currentText.classList.remove("dark-mode-text");
        }
        saveTasksToLocalStorage();
      }
    }
  });
};

const deleteList = (listId) => {
  let c = document.getElementById(`list${listId}`);
  c.parentNode.removeChild(c);
  changeBackground();
  contTask();
  saveTasksToLocalStorage();
};

const contTask = () => {
  let taskElements = list.querySelectorAll('li');
  let numTask = taskElements.length;

  elements.value = "";
  elements.textContent = `Todos (${numTask})`;
};

const changeBackground = () => {
  let cont = 1;
  let numTask = document.querySelectorAll('.To-do-list-group-item')
  numTask.forEach((item) => {
    let listItemClass = cont % 2 == 0 ? 'To-do-list-group-white' : 'To-do-list-group-gray';
    item.classList.remove('To-do-list-group-white');
    item.classList.remove('To-do-list-group-gray');
    item.classList.add(listItemClass);

    if (mode === 'dark') {
      item.classList.remove('dark-mode-group-white');
      item.classList.remove('dark-mode-group-gray');

      if (listItemClass === 'To-do-list-group-white') {
        item.classList.add('dark-mode-group-white');
      } else {
        item.classList.add('dark-mode-group-gray');
      }
    }
    cont++;
  });

};

const saveTasksToLocalStorage = () => {
  const tasks = [];
  const taskElements = list.querySelectorAll('.To-do-list-text');
  taskElements.forEach(taskElement => {
    const task = {
      text: taskElement.textContent,
      completed: taskElement.classList.contains('completed')
    };
    tasks.push(task);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const toggleTask = (checkbox) => {
  let label = checkbox.nextElementSibling;
  label.classList.toggle('completed');
  saveTasksToLocalStorage();
};
