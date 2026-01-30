let time = 0;
let timeId = null;
const timeElement = document.getElementById("time");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        
        if(card.classList.contains("flipped")) {
            return;
        }

        card.classList.add("flipped");
    });
});

function startTimer() {
    timeId = setInterval(() => {
        time++;
        timeElement.textContent = time;
    }, 1000);
}

startTimer();
