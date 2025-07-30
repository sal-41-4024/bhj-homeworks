class ToolTip {
    constructor(hasToolTip) {
        this.currentText = null;
        this.currentTitle = null;
        this.toolTipTag = document.createElement("div");
        this.toolTipTag.className = "tooltip";
        this.toolTipTag.innerText = "";
        hasToolTip.insertAdjacentElement("afterend", this.toolTipTag);
        this.toolTipTag.style.position = "absolute";
    }

    processClick(event) {
        const hasToolTip = event.target;
        const title = hasToolTip.title;
        const text = hasToolTip.innerText;
        
        if (title === this.currentTitle && text === this.currentText) {
            this.toolTipTag.classList.toggle("tooltip_active");
        } else {
            this.toolTipTag.classList.add("tooltip_active");
            this.currentTitle = title;
            this.currentText = text;
            this.toolTipTag.innerText = title;
            this.toolTipTag.style.left = event.pageX + "px";
            this.toolTipTag.style.top = event.pageY + "px";
        }
    }
}

const hasToolTips = Array.from(document.getElementsByClassName("has-tooltip"));
const toolTip = new ToolTip(hasToolTips[0]);

hasToolTips.forEach((hasToolTip) => {
    hasToolTip.addEventListener("click", (e) => {
        e.preventDefault();
        toolTip.processClick(e)
    });
});
