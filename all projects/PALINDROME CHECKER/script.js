"use strict"

let txtInput = document.querySelector('.input');
const btn = document.querySelector('.btn');
let palindrome = document.querySelector('.palindrome'),
tF = document.querySelector('.tF'),
validator = document.querySelector('.validator');

btn.addEventListener('click' , (e) => {
    e.preventDefault();
    let filterInput = txtInput.value.replace(/[^A-Z0-9]/ig, "");
    let filterInput2 = filterInput.toLowerCase();
    let reverseInput = filterInput2.split("").reverse().join("");
     console.log(filterInput2 , reverseInput);
     if (filterInput2 !== reverseInput) {
        console.log('not a palindrome');
        palindrome.innerHTML = filterInput;
        tF.innerHTML = "No";
        validator.innerHTML = "is NOT a palindrome"
     }
     else{
        palindrome.innerHTML = filterInput;
        tF.innerHTML = "Yes";
        validator.innerHTML = "is a palindrome"
     }
})

// txtInput.addEventListener('keyup', (e) => {
//     e.preventDefault();
   

//     console.log(filterInput);

// })