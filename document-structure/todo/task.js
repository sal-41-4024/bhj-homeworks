const input = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");
const task_list = document.getElementById("tasks__list");
const tasks_form = document.getElementById("tasks__form");

function addTask(e) {
    const task = document.createElement("div");
    task.className = "task";

    const task_title = document.createElement("div");
    task_title.className = "task__title";
    task_title.innerText = input.value;

    const task_remove = document.createElement("a");
    task_remove.className = "task__remove";
    task_remove.innerHTML = "&times;";

    task.appendChild(task_title);
    task.appendChild(task_remove);
    task_list.appendChild(task);

    task_remove.addEventListener("click", (e) => {
        e.target.closest(".task").remove()
    });

    tasks_form.reset();
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value) {
        addTask(e);
    }
});

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === "Enter" && input.value) {
        addTask(e);
    }
});
