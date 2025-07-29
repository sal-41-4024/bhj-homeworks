class Rotator {
    constructor (obj) {
        this.rotator_obj = obj
        this.cases = Array.from(obj.querySelectorAll(".rotator__case"));
        this.length = this.cases.length
        this.count = 0;
    }

    changeCase() {
        this.cases[this.count].classList.remove("rotator__case_active");
        this.#increment();
        this.cases[this.count].classList.add("rotator__case_active");
        const color = this.cases[this.count].getAttribute("data-color");
        this.rotator_obj.style.color = color
    }

    #increment() {
        if (this.count === this.length - 1) {
            this.count = 0;
        } else {
            this.count++;
        }
    }
}

const rotator_tags = Array.from(document.getElementsByClassName("rotator"));

let rotators = []

rotator_tags.forEach((rotator) => {
    rotators.push(new Rotator(rotator));
});

setInterval(() => {
    rotators.forEach((rotator) => {
        rotator.changeCase();
    });
}, 1000);