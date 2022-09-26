let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-El");

let sumEl = document.getElementById("sum-El");

let cardsEl = document.getElementById("cards-el");



function startGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    if(sum <= 20) {
        message = "Do you want to draw a new Card?"
    }else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackjack = true;
    }else {
        message = "You're out of the Game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("new card on the deck");
}