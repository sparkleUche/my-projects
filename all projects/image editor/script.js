"use strict";

const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll(".filter .button"),
selectedFilter = document.querySelectorAll(".filter .active"),
filterName = document.querySelector(".filter-info .name"),
filterValue = document.querySelector(".filter-info .value"),
filterSlider = document.querySelector(".slider input"),
rotateOptions = document.querySelectorAll(".rotate button"),
previewImg = document.querySelector(".preview-img img"),
resetFilterBtn = document.querySelector(".reset-filter"),
chooseImgBtn = document.querySelector(".choose-img"),
saveImgBtn = document.querySelector(".save-img");
alert("hi")
let brightness = "100",  saturation = "100",  inversion = "0", grayscale = "0";
let rotate = 0, flipHorizontal = 1, flipVertical = 1;

const loadImage = () =>{
    let file = fileInput.files[0];
    if (!file) return;
    previewImg.src = URL.createObjectURL(file)
    previewImg.addEventListener("load",() =>{
        resetFilterBtn.click();
        document.querySelector(".container").classList.remove("disable")
    });
}

const applyfilter = () =>{
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;

}

filterOptions.forEach(option =>{
    option.addEventListener("click", () =>{
        document.querySelector(".active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText;

        if (option.id === "brightness") {
            filterSlider.max = "200";
            filterSlider.value = brightness;
            filterValue.innerHTML = `${brightness}%`
        }
        else if (option.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value = saturation;
            filterValue.innerText = `${saturation}%`
        }
        else if (option.id === "inversion") {
            filterSlider.max = "100";
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}%`
        }
        else  {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`
        }
    })
})

// const updateFilter = () =>{
   
//     // else {
        
//     // }
// }

rotateOptions.forEach(options => {
    options.addEventListener("click", () =>{
        if (options.id === "left") {
            rotate -= 90
        }
        else if (options.id === "right") {
            rotate += 90
        }
        else if (options.id === "horizontal") {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        }
        else{
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        applyfilter();
    })
})
const resetFilter = () => {
    brightness = "100"; saturation = "100"; inversion = "8"; grayscale = "0";
    rotate = 0; flipHorizontal = 1; flipVertical = 1;
    filterOptions[0].click;
    applyfilter();
}
filterSlider.addEventListener("input", (e) =>{
    e.preventDefault;

    filterValue.innerText = `${filterSlider.value}%`;
    if (selectedFilter.id === "brightness") {
        brightness = filterSlider.value
    } 
    // else {
    //     saturation = filterSlider.value
    // } 
    // if (selectedFilter.id === "grayscale") {
    //     grayscale = filterSlider.value
    // } 
    // else {
    //     inversion = filterSlider.value;
    // } 
    applyfilter();
});
resetFilterBtn.addEventListener("click", resetFilter)
// saveImgBtn.addEventListener("click", saveImage);
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => {
    fileInput.click();

    
})
