const interests = Array.from(document.getElementsByClassName("interest"));

interests.forEach((interest) => {
    const checkbox = interest.querySelector(".interest__check");
    checkbox.addEventListener("change", () => {
        checkNested(interest, checkbox);
        checkOutter(interest)
    });
});

function checkNested(interest, checkbox) {
    const interestUl = interest.querySelector("ul");
    if (interestUl) {
        const interests = Array.from(interestUl.querySelectorAll("li.interest"));
        interests.forEach((option) => {
            const interestCheckbox = option.querySelector(".interest__check");
            interestCheckbox.checked = checkbox.checked;
        });
    }
}

function checkOutter(interest) {
    const ulInterests = interest.closest("ul.interests");
    if(ulInterests) {
        const interests_check = Array.from(ulInterests.querySelectorAll(".interest__check"));
        const isChecked = interests_check.every((interest_check) => {
            return interest_check.checked
        });
        const interest_check = interest.parentElement.parentElement.querySelector(".interest__check");
        interest_check.checked = isChecked;
    }
}