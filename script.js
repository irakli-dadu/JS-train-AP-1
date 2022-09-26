let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-El");

let sumEl = document.getElementById("sum-El");

let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");

let player = {
    name: "Per",
    chips: 200
}

playerEl.textContent = player.name + ": $" + player.chips


function startGame () {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;


    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber
    }
}



function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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
    if (isAlive === true && hasBlackjack === false) {

        let card = getRandomCard();
        sum += card;
    
        cards.push(card);
        renderGame()
    }
}