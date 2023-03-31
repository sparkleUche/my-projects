"use strict"

let input = document.querySelector("input")
const btn = document.querySelector(".btn");
const display = document.querySelector(".display");
const vowels = ["a", "e", "i", "o" , "u"];
let vowelCount = 0;
console.log(vowels);

btn.addEventListener("click", (e) => {
    e.preventDefault;

    let value = input.value
    let arrValue = value.split("");
    console.log(value);
    console.log(arrValue);
    // console.log(arrValue);

    // let filteredValue = arrValue.filter((arrVal) => {
    //     return arrVal = vowels;
    // })
    // console.log(filteredValue);

    arrValue.forEach(arr => {
        vowels.forEach(vow => {
            if (arr === vow) {
                vowelCount++;
                console.log(vowelCount);
                display.innerHTML = vowelCount;
                // setTimeout(() => {
                //     vowelCount = 0
                // }, 1000);
            }
           
        })
    })

})