const input = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");
const taskForm = document.getElementById("tasks__form");

function addTask(e) {
    const task = 
        `<div class="task">
            <div class="task__title">${input.value}</div>
            <a href ="#" class="task__remove">&times;</a>
         </div>`;
    taskList.insertAdjacentHTML("afterbegin", task);

    const taskRemove = taskList.querySelector(".task__remove");
    taskRemove.addEventListener("click", (e) => {
        e.target.closest(".task").remove()
    });
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        addTask(e);
    }
    input.value = '';
});
