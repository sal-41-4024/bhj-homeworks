const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", onScroll);

function onScroll(e) {
    reveals.forEach((reveal) => {
        const {top, bottom} = reveal.getBoundingClientRect();
        if (top >=0 && bottom <= window.innerHeight) {
            reveal.classList.add("reveal_active");
        } else {
            reveal.classList.remove("reveal_active");
        }
    });
}
