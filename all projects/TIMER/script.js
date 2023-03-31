"use strict";

const start = document.querySelector('.start'),
stop = document.querySelector('.stop'),
clear = document.querySelector('.clear');
let min = document.querySelector('.min'),
sec = document.querySelector('.sec');
let secInner = sec.innerHTML;




// if (sec.innerHTML = 10) {
//     console.log("its time");
// }

let time;
start.addEventListener("click", (e) =>{
    
 time = setInterval(() => {
        sec.innerHTML ++;
        if (sec.innerHTML % 60 == 0) {
            min.innerHTML ++
        }
       if (sec.innerHTML == 60) {
          sec.innerHTML = (Number(sec.innerHTML - 60));

       }


 clear.addEventListener("click",(e) => {
            e.preventDefault();
            min.innerHTML = (Number( min.innerHTML -  min.innerHTML))
            sec.innerHTML = (Number(sec.innerHTML - sec.innerHTML)) 
            start.style.pointerEvents = "all";
        })
 start.style.pointerEvents = "none";
 

 stop.addEventListener("click",(e) => {
           clearInterval(time)
 })
    }, 1000);
    console.log("clicked");
});



