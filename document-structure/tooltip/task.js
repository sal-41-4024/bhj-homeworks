const tool_flips = Array.from(document.getElementsByClassName("has-tooltip"));

tool_flips.forEach((tool_flip) => {
    tool_flip.addEventListener("click", (e) => {
        e.preventDefault();
        let tip = e.target.parentElement.querySelector(".tooltip");
        console.log("tip:", tip)
        if (!tip) {
            console.log("!tip", tip)
            tip = document.createElement("div");
            tip.className = "tooltip"
            tip.innerText = e.target.title
            e.target.insertAdjacentElement("afterend", tip)
        }
        tip.classList.toggle("tooltip_active");
        tip.innerText = e.target.getAttribute("title");
        tip.style.position = "absolute";
        tip.style.left = e.pageX + "px";
        tip.style.top = e.pageY + "px";
    });
});
