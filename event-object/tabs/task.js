const tabs = Array.from(document.querySelectorAll(".tab"));
const tab_contents = Array.from(document.querySelectorAll(".tab__content"));

function onClick(e) {
    const tab_index = tabs.indexOf(e.target);
    activateTab(tab_index);
    activateContent(tab_index);
}

tabs.forEach((tab) => {
    tab.addEventListener("click", onClick);
});

function activateTab(tab_index) {
    tabs.forEach((tab, index) => {
        if (index === tab_index) {
            tab.classList.add("tab_active");
            console.log(tab);
        }
        else {
            tab.classList.remove("tab_active");
        }
    });
}

function activateContent(tab_index) {
    tab_contents.forEach((content, index) => {
        if (index === tab_index) {
            content.classList.add("tab__content_active");
        }
        else {
            content.classList.remove("tab__content_active");
        }
    });
}
