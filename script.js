const button = document.getElementById("toggleBtn");
const text = document.getElementById("texten");

button.addEventListener("click", () => {
    text.classList.toggle("hidden");

    if (text.classList.contains("hidden")) {
        button.textContent = "Visa text";
    } else {
        button.textContent = "Dölj text";
    }
});
// kolräknaren
let count = 0;

const countDisplay = document.querySelector("#count");
const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");

plusBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

minusBtn.addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});
