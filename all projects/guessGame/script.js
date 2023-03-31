"use strict";

let inputNumber = document.querySelector('.inputNumber');
const guessBtn = document.querySelector('.guessBtn'),
tryAgain = document.querySelector('.tryAgain'),
modalPopup = document.querySelector('.modalPopup'),
mText = document.querySelector('.mText');
let randomNum = Math.floor((Math.random() * 40) + 1 );

guessBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let x = inputNumber.value
    if (Number(x - randomNum) > 0) {
        alert("too big");
    }
    else if (Number(x - randomNum) < 0) {
        alert("too small");
    }
    if ( x  == randomNum) {
        modalPopup.classList.add('visible');
        // setTimeout(() => {
        //     modalPopup.classList.remove('visible');
        // }, 2000);
        alert("perfect")
    }
    
    else{
        modalPopup.classList.add('visible');
        mText.innerHTML = `"TRY AGAIN" `;
        tryAgain.classList.add('visible');
        tryAgain.addEventListener('click', (e) =>{modalPopup.classList.add('visible');})
        setTimeout(() => {
            modalPopup.classList.remove('visible');
            mText.innerHTML = `"YOU WON" `;
        }, 2000);
}
    console.log(x)
})
console.log(randomNum);

