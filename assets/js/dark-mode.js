let switchMode = document.querySelector(".switch-mode");
let mode = localStorage.getItem("mode");

switchMode.checked = mode === "dark";
ChannelMergerNodeMode();

document.addEventListener("load", ChannelMergerNodeMode);

switchMode.addEventListener("change", () => {
    if (switchMode.checked) {
        mode = "dark";
    } else {
        mode = "light";
    }
    ChannelMergerNodeMode();
    saveMode();
});

function ChannelMergerNodeMode() {
    if (mode == "light") {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
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
}

function enableLightMode() {
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
}

function saveMode() {
    localStorage.setItem("mode", mode);
}

