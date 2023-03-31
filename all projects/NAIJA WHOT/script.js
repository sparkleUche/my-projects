"use strict";


// let randomnumTwo = Math.floor((Math.random() * 10) + 1);
// let randomnumThree = Math.floor((Math.random() * 10) + 1);
// let randomnumFour = Math.floor((Math.random() * 10) + 1);
// let randomnumFive = Math.floor((Math.random() * 10) + 1);
// let randomnumSix = Math.floor((Math.random() * 10) + 1);
// let randomnumSeven = Math.floor((Math.random() * 10) + 1);
// let randomnumEight = Math.floor((Math.random() * 10) + 1);
const cards = Array.from(document.querySelectorAll('.card'));
let count = cards.length;
let val;
const compCards = Array.from(document.querySelectorAll('.compCard')),
updateDeck = document.querySelector('.updateDeck'),
compNo = document.querySelector('.comp');
let randomnum= Math.floor((Math.random() * compCards.length));


