let elements = document.getElementById("contElements");
let input = document.getElementById("inputText");
let list = document.getElementById("list");
let listNum = 0;

addList = () => {
  let inputText = filterList(input.value);
  if (inputText) {
    let listElement = createListElement(inputText);
    list.appendChild(listElement);
    input.value = "";
    listNum++;
    contTask();
  }
};

createListElement = (text) => {
  let listItemClass = listNum % 2 === 0 ? 'To-do-list-group-gray' : 'To-do-list-group-white';

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

// Resto del código sin cambios

filterList=(x)=>{
    if (x) {
         if (x.length > 1) {
             return x;
         }
         else{
             alert("please enter a task")
         }
    }
    else{
         return false;
    }
}

editList=(listId)=>{
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("Wanna Change list?",currentText.innerHTML);
    if (filterList(newText)) {
        currentText.innerHTML = newText; 
    }
}

deleteList=(listId)=>{
    let current = document.getElementById(`text${listId}`).innerHTML;
       let deleteComfirm = confirm(`Are you sure to delete ${current}`);
    if (deleteComfirm) {
         let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
        contTask();
        listNum--;
    }
    else{
        console.log("deleted");
    }
};

contTask=()=>{
    let taskElements = list.querySelectorAll('li');
    let numTask = taskElements.length;

    elements.value = " "
    elements.textContent = `Todos (${numTask})`;

}