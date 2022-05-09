// Array of Deck of Card Images

const deckCards = ["imgs/jackClubs.png", "imgs/jackClubs.png", "imgs/jackDiamonds.png", "imgs/jackDiamonds.png",
    "imgs/jackHearts.png", "imgs/jackHearts.png", "imgs/kingDiamonds.png", "imgs/kingDiamonds.png", "imgs/kingHearts.png",
    "imgs/kingHearts.png", "imgs/kingSpades.png", "imgs/kingSpades.png", "imgs/queenClubs.png", "imgs/queenClubs.png",
    "imgs/queenSpades.png", "imgs/queenSpades.png"
];

// Global Arrays

// Access the <ul> with class of .deck

const deck = document.querySelector(".deck");

// Create an empty array to store the opened cards

let opened = [];

// Create an empty array to store the matched cards

let matched = [];

// Access the modal

const modal = document.getElementById("modal");

// Access the reset button

const reset = document.querySelector(".reset-btn");

// Access the play again button 

const playAgain = document.querySelector(".play-again-btn");

// Select the class moves-counter and change its HTML

const movesCount = document.querySelector(".moves-counter");

// Create variable for moves counter, start the count at zero

let moves = 0;

const star = document.getElementById("rating").querySelectorAll(".star");

let starCount = 3;

const timeCounter = document.querySelector(".timer");

let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function startGame() {
    // Invoke shuffle function and store in variable 

    const shuffledDeck = shuffle(deckCards);

    // Iterate over deck of cards array

    for (let i = 0; i < shuffledDeck.length; i++) {

        // Create the <li> tags

        const liTag = document.createElement("LI");

        // Give <li> class of card

        liTag.classList.add("card");

        // Create the <img> tags

        const addImage = document.createElement("IMG");

        // Append <img> to <li>

        liTag.appendChild(addImage);

        // Set the img src path with the shuffled deck

        addImage.setAttribute("src", "img/" + shuffledDeck[i]);

        // Add an alt tag to the image

        addImage.setAttribute("alt", "image of crown");

        // Update the new <li> to the deck <ul>

        deck.appendChild(liTag);
    }
}

startGame();

function removeCard() {
    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    }
}

function timer() {
    time = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes +
            " Mins " + seconds + " Secs";
    }, 1000);
}

function stopTime() {
    clearInterval(time);
}

function resetEverything() {
    stopTime();
    timeStart = false;
    seconds = 0;
    minutes = 0;
    timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: 00:00";

    // Reset star count and then add the class back to show stars again

    star[1].firstElementChild.classList.add("fa-star");

    star[2].firstElementChild.classList.add("fa-star");

    starCount = 3;

    // Reset moves count and reset its inner HTML

    moves = 0;

    movesCount.innerHTML = 0;

    // Clear both arrays that hold the opened and matched cards

    matched = [];

    opened = [];

    // Clear the deck

    removeCard();

    // Create a new deck

    startGame();
}

