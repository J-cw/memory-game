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