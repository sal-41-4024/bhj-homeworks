const btns = Array.from(document.querySelectorAll('[class^="font-size"]'));
const book = document.getElementById("book");

function onClick(e) {
    e.preventDefault();
    btns.forEach((btn) => {
        if(btn === e.target) {
            btn.classList.add("font-size_active")
        } else {
            btn.classList.remove("font-size_active")
        }
    });
    changeFont(e, book);
}

function changeFont(e, book) {
    book.classList.remove("book_fs-small", "book_fs-big");
    const size = e.target.dataset.size;
    book.classList.add(`book_fs-${size}`);
}

btns.forEach((btn) => {
    btn.addEventListener("click", onClick);
});
