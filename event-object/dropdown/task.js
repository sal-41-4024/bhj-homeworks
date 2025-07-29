const btns = Array.from(document.getElementsByClassName("dropdown"));

function toggleList(e) {
    e.currentTarget.querySelector(".dropdown__list")
        .classList.toggle("dropdown__list_active");
}

function chooseItem(e) {
    e.preventDefault();
    const caption = e.target.textContent
    const dropdown = e.target.closest(".dropdown")
    dropdown.querySelector(".dropdown__value").textContent = caption
}

btns.forEach((btn) => {
    btn.addEventListener("click", toggleList)
    const dropdown_items = Array.from(btn.querySelectorAll(".dropdown__item"));
    dropdown_items.forEach((item) => {
        item.addEventListener("click", chooseItem);
    });
});