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

    var darkModeGray = document.querySelectorAll(".To-do-list-group-gray")/* .classList.add("dark-mode-group-gray"); */ /*se repite */
    darkModeGray.forEach((item) =>
    {
        item.classList.add("dark-mode-group-gray");
    });

    var darkModeWhi = document.querySelectorAll(".To-do-list-group-white");
    darkModeWhi.forEach((item) =>
    {
        item.classList.add("dark-mode-group-white");
    });

    var darkModeText = document.querySelectorAll(".To-do-list-text");
    darkModeText.forEach((item) =>
    {
        item.classList.add("dark-mode-text");
    });

    var darkModeBtn = document.querySelectorAll(".btn-success");
    darkModeBtn.forEach((item) =>
    {
        item.classList.add("dark-mode-btn");
    });

    var darkModeCheck = document.querySelectorAll(".To-do-list-check");
    darkModeCheck.forEach((item) =>
    {
        item.classList.add("dark-mode-checkBox");
    });


    mode = 0;
  }
  else {
    document.querySelector(".To-do-list").classList.remove("dark-mode");
    document.querySelector(".To-do-list").classList.remove("dark-mode");
    document.querySelector(".To-do-list-container").classList.remove("dark-mode-container");
    document.querySelector(".To-do-list-container-text").classList.remove("dark-mode-container-text");
    document.querySelector(".switch-mode-icon").classList.remove("fa-moon");

    var darkModeGray = document.querySelectorAll(".To-do-list-group-gray")/* .classList.add("dark-mode-group-gray"); */ /*se repite */
    darkModeGray.forEach((item) =>
    {
        item.classList.remove("dark-mode-group-gray");
    });

    var darkModeWhi = document.querySelectorAll(".To-do-list-group-white");
    darkModeWhi.forEach((item) =>
    {
        item.classList.remove("dark-mode-group-white");
    });

    var darkModeText = document.querySelectorAll(".To-do-list-text");
    darkModeText.forEach((item) =>
    {
        item.classList.remove("dark-mode-text");
    });

    var darkModeBtn = document.querySelectorAll(".btn-success");
    darkModeBtn.forEach((item) =>
    {
        item.classList.remove("dark-mode-btn");
    });

    var darkModeCheck = document.querySelectorAll(".To-do-list-check");
    darkModeCheck.forEach((item) =>
    {
        item.classList.remove("dark-mode-checkBox");
    });

    document.querySelector(".switch-mode-icon").classList.add("fa-sun");

    mode = 1;
  }
});

