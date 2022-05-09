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
    let currentIndex = array.length, temporaryValue, randomIndex;
    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

