(function () {
    const module = {
        main: function () {
            this.listNum = 0;
            this.blucle = true;
            this.cacheDom();
            this.switchMode.checked = this.mode === "dark";
            this.ChannelMergerNodeMode();
            this.bindingEvents();


        },
        cacheDom: function () {
            this.elements = document.getElementById("contElements");
            this.input = document.getElementById("inputText");
            this.list = document.getElementById("list");
            this.switchMode = document.querySelector(".switch-mode");
            this.mode = localStorage.getItem("mode");
            this.submit = document.getElementById("submit");

        },
        filterList: function (x) {
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
        },
        createListElement: function (text, completed = false) {
            let listElement = document.createElement('li');
            listElement.setAttribute('class', `list-group-item To-do-list-group-item`);
            listElement.setAttribute('id', `list${this.listNum}`);
            let listItemContent = `
              <div class="form-check">
                <input class="form-check-input To-do-list-check toggleCheckBox ${this.mode === 'dark' ? 'dark-mode-checkBox' : ''}" type="checkbox" id="${this.listNum}" ${completed ? 'checked' : ''}> 
                <label class="form-check-label labelTask${this.listNum} To-do-list-text ${completed ? 'completed' : ''} ${this.mode === 'dark' ? 'dark-mode-text' : ''}" id="text${this.listNum}">${text}</label>
              </div>
              <div class="To-do-list-group-buttons">
                <button type="button" class="btn btn-success To-do-list-button editButt ${this.mode === 'dark' ? 'dark-mode-btn' : ''}" id="${this.listNum}">
                  <span class="fa-solid fa-pen-to-square To-do-list-button-icon"></span>
                </button>
                <button type="button" class="btn btn-danger To-do-list-button deleteButt" id="${this.listNum}">
                  <span class="fa-sharp fa-solid fa-trash To-do-list-button-icon"></span>
                </button>
              </div>
            `;

            listElement.innerHTML = listItemContent;


            return listElement;
        },
        changeBackground: function () {
            let cont = 1;
            let numTask = document.querySelectorAll('.To-do-list-group-item')
            numTask.forEach((item) => {
                let listItemClass = cont % 2 == 0 ? 'To-do-list-group-white' : 'To-do-list-group-gray';
                item.classList.remove('To-do-list-group-white');
                item.classList.remove('To-do-list-group-gray');
                item.classList.add(listItemClass);

                if (this.mode === 'dark') {
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
        },
        contTask: function () {
            let taskElements = list.querySelectorAll('li');
            let numTask = taskElements.length;
            this.elements.value = "";
            this.elements.textContent = `Todos (${numTask})`;
        },
        saveTasksToLocalStorage: function () {
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
        },
        toggleTask: function (id) {
            let label = document.getElementById(`text${id}`)
            label.classList.toggle('completed');
            this.saveTasksToLocalStorage();
        },
        addList: function () {
            let inputText = this.filterList(this.input.value);
            if (inputText) {
                let listElement = this.createListElement(inputText);
                list.appendChild(listElement);
                this.input.value = "";
                this.listNum++;
                this.contTask();
                this.saveTasksToLocalStorage();
            }
            this.changeBackground();
        },
        editList: function (listId) {
            let currentText = document.getElementById(`text${listId}`);
            let currentTextInput = document.createElement('input');
            currentTextInput.value = currentText.textContent;
            currentTextInput.classList.add('To-do-list-input');
            currentTextInput.classList.add('To-do-list-input-edit');
            if (this.mode === 'dark') {
                currentTextInput.classList.add("dark-mode-text");
            } else {
                currentTextInput.classList.remove("dark-mode-text");
            }

            currentText.replaceWith(currentTextInput);
            currentTextInput.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    let newText = this.filterList(currentTextInput.value);
                    if (newText && newText.length > 1) {
                        currentTextInput.replaceWith(currentText);
                        currentText.textContent = newText;
                        if (this.mode === 'dark') {
                            currentText.classList.add("dark-mode-text");
                        } else {
                            currentText.classList.remove("dark-mode-text");
                        }
                        this.saveTasksToLocalStorage();
                    }
                }
            });
        },
        deleteList: function (listId) {
            let c = document.getElementById(`list${listId}`);
            c.parentNode.removeChild(c);
            this.changeBackground();
            this.contTask();
            this.saveTasksToLocalStorage();
        },
        saveMode: function () {
            localStorage.setItem("mode", this.mode);
        },
        enableDarkMode: function () {
            const darkModeEditText = document.querySelectorAll(".To-do-list-input-edit");
            const darkModeGray = document.querySelectorAll(".To-do-list-group-gray");
            const darkModeWhi = document.querySelectorAll(".To-do-list-group-white");
            const darkModeText = document.querySelectorAll(".To-do-list-text");
            const darkModeBtn = document.querySelectorAll(".btn-success");
            const darkModeCheck = document.querySelectorAll(".To-do-list-check");

            document.querySelector(".switch-mode-icon").classList.remove("fa-sun");
            document.querySelector(".switch-mode-icon").classList.add("fa-moon");
            document.querySelector(".To-do-list").classList.add("dark-mode");
            document.querySelector(".To-do-list-container").classList.add("dark-mode-container");
            document.querySelector(".To-do-list-container-text").classList.add("dark-mode-container-text");

            darkModeEditText.forEach((item) => {
                item.classList.add("dark-mode-text");
            });

            darkModeGray.forEach((item) => {
                item.classList.add("dark-mode-group-gray");
            });

            darkModeWhi.forEach((item) => {
                item.classList.add("dark-mode-group-white");
            });

            darkModeText.forEach((item) => {
                item.classList.add("dark-mode-text");
            });

            darkModeBtn.forEach((item) => {
                item.classList.add("dark-mode-btn");
            });

            darkModeCheck.forEach((item) => {
                item.classList.add("dark-mode-checkBox");
            });
        },
        enableLightMode: function () {
            const darkModeGray = document.querySelectorAll(".dark-mode-group-gray");
            const darkModeWhi = document.querySelectorAll(".dark-mode-group-white");
            const darkModeText = document.querySelectorAll(".To-do-list-text");
            const darkModeBtn = document.querySelectorAll(".btn-success");
            const darkModeCheck = document.querySelectorAll(".To-do-list-check");
            const darkModeEditText = document.querySelectorAll(".To-do-list-input-edit");

            document.querySelector(".switch-mode-icon").classList.remove("fa-moon");
            document.querySelector(".switch-mode-icon").classList.add("fa-sun");
            document.querySelector(".To-do-list").classList.remove("dark-mode");
            document.querySelector(".To-do-list-container").classList.remove("dark-mode-container");
            document.querySelector(".To-do-list-container-text").classList.remove("dark-mode-container-text");

            darkModeGray.forEach((item) => {
                item.classList.remove("dark-mode-group-gray");
            });

            darkModeWhi.forEach((item) => {
                item.classList.remove("dark-mode-group-white");
            });

            darkModeText.forEach((item) => {
                item.classList.remove("dark-mode-text");
            });

            darkModeBtn.forEach((item) => {
                item.classList.remove("dark-mode-btn");
            });

            darkModeCheck.forEach((item) => {
                item.classList.remove("dark-mode-checkBox");
            });

            darkModeEditText.forEach((item) => {
                item.classList.remove("dark-mode-text");
            });
        },
        ChannelMergerNodeMode: function () {
            if (this.mode == "light") {
                this.enableLightMode();
            } else {
                this.enableDarkMode();
            }
        },
        bindingEvents: function () {
            window.addEventListener('load', () => {
                const savedTasks = JSON.parse(localStorage.getItem('tasks'));
                if (savedTasks) {
                    savedTasks.forEach(task => {
                        let listElement = this.createListElement(task.text, task.completed);
                        list.appendChild(listElement);
                        this.listNum++;
                        this.contTask();
                    });
                    this.changeBackground();
                }
            });

            this.input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    if (this.input.value && this.input.value.length > 1 && this.input.classList.contains('To-do-list-input')) {
                        this.addList();
                    }
                }
            });

            this.switchMode.addEventListener("change", () => {
                if (this.switchMode.checked) {
                    this.mode = "dark";
                } else {
                    this.mode = "light";
                }
                this.ChannelMergerNodeMode();
                this.saveMode();
            });

            this.submit.addEventListener('click', () => {
                this.addList();
            });

            window.addEventListener('load', () => {
                let edits = document.querySelectorAll(".editButt");
                let deletes = document.querySelectorAll(".deleteButt");
                let markTasks = document.querySelectorAll(".toggleCheckBox");

                edits.forEach((item) => {
                    item.addEventListener('click', () => {
                        this.editList(item.id);
                    });
                });

                deletes.forEach((item) => {
                    item.addEventListener('click', () => {
                        this.deleteList(item.id);
                    });
                });

                markTasks.forEach((item) => {
                    item.addEventListener('click', () => {
                        this.toggleTask(item.id);
                    });
                });


            });
        }
    }

    module.main();
}
)();