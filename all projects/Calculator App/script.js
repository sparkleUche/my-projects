"use strict";

const numbers = document.querySelectorAll('.noBtn button'),
operators = document.querySelectorAll('.operations button'),
moreOperations = document.querySelectorAll('.moreOperations button'),
display = document.querySelector('.display');

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        display.innerHTML += number.innerHTML;
        // display.innerHTML += operators.innerHTML;
        
    })
})

// operators.forEach(operator => {
//     operator.addEventListener("click", (e) => {
//         // display.innerHTML += number.innerHTML;
//         display.innerHTML += operator.innerHTML;
    
        
//     })
// })
operators[3].addEventListener('click', (e) => {
    display.innerHTML = " ";
    
})
operators[2].addEventListener('click', (e) => {
    display.innerHTML = eval(display.innerHTML);
    setTimeout(() => {
        display.innerHTML = " ";
    }, 1000);
    
})
operators[1].addEventListener('click', (e) => {
    display.innerHTML += operators[1].innerHTML;
    
})
operators[0].addEventListener('click', (e) => {
    display.innerHTML += operators[0].innerHTML;
    
})

moreOperations[0].addEventListener('click', (e) => {
    display.innerHTML += moreOperations[0].innerHTML;
    
})

moreOperations[1].addEventListener('click', (e) => {
    display.innerHTML += moreOperations[1].innerHTML;
    
})


moreOperations[2].addEventListener('click', (e) => {
    display.innerHTML += moreOperations[2].innerHTML;
    
})