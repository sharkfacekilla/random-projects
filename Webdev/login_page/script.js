const regBtn = document.getElementById(`register`);
const logBtn = document.getElementById(`login`);
const container = document.getElementById(`container`);

regBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

logBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});