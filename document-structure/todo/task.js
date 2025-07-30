const input = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");
const taskForm = document.getElementById("tasks__form");

function addTask(e) {
    const task = document.createElement("div");
    task.className = "task";

    const taskTitle = document.createElement("div");
    taskTitle.className = "task__title";
    taskTitle.innerText = input.value;

    const taskRemove = document.createElement("a");
    taskRemove.className = "task__remove";
    taskRemove.innerHTML = "&times;";

    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    taskList.appendChild(task);

    taskRemove.addEventListener("click", (e) => {
        e.target.closest(".task").remove()
    });
}

btn.addEventListener("click", (e) => {
    if (input.value.trim()) {
        addTask(e);
    }
});
