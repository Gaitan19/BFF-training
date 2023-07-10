const switchMode = document.querySelector(".switch-mode");
let mode = 1;

switchMode.addEventListener("change", () => {
  if (mode == 1) 
  {
   
    document.querySelector(".switch-mode-icon").classList.remove("fa-sun");

    document.querySelector(".To-do-list").classList.add("dark-mode");
    document.querySelector(".To-do-list-container").classList.add("dark-mode-container");
    document.querySelector(".To-do-list-container-text").classList.add("dark-mode-container-text");
    document.querySelector(".switch-mode-icon").classList.add("fa-moon");

    document.querySelector(".To-do-list-group-gray").classList.add("dark-mode-group-gray"); /*se repite */
    document.querySelector(".To-do-list-group-white").classList.add("dark-mode-group-white");/*se repite */
    document.querySelector(".To-do-list-text").classList.add("dark-mode-text");/*se repite */
    document.querySelector(".btn-success").classList.add("dark-mode-btn");/*se repite */
    document.querySelector(".To-do-list-check").classList.add("dark-mode-checkBox");/*se repite */

    mode = 0;
  }
  else {
    document.querySelector(".To-do-list").classList.remove("dark-mode");
    document.querySelector(".To-do-list").classList.remove("dark-mode");
    document.querySelector(".To-do-list-container").classList.remove("dark-mode-container");
    document.querySelector(".To-do-list-container-text").classList.remove("dark-mode-container-text");
    document.querySelector(".switch-mode-icon").classList.remove("fa-moon");
    
    document.querySelector(".To-do-list-group-gray").classList.remove("dark-mode-group-gray");/*se repite */
    document.querySelector(".To-do-list-group-white").classList.remove("dark-mode-group-white");/*se repite */
    document.querySelector(".To-do-list-text").classList.remove("dark-mode-text");/*se repite */
    document.querySelector(".btn-success").classList.remove("dark-mode-btn");/*se repite */
    document.querySelector(".To-do-list-check").classList.remove("dark-mode-checkBox");

    document.querySelector(".switch-mode-icon").classList.add("fa-sun");

    mode = 1;
  }
});

