
//Creates variable for the carousel container
const carouselContainerElement = document.getElementById("carousel_container");

//Creaes global variable to decide which image is visualized
let currentImgIndex = 0;

//Creates array of objects with carousel content
const images = [
    {
        image: "img/01.webp",
        title: "Marvel\'s Spiderman Miles Morales",
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    }, {
        image: "img/02.webp",
        title: "Ratchet & Clank: Rift Apart",
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    }, {
        image: "img/03.webp",
        title: "Fortnite",
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: "img/04.webp",
        title: "Stray",
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    }, {
        image: "img/05.webp",
        title: "Marvel's Avengers",
        text: "Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

//"forEach" cycle cycles "images[]" and creates the carousel's content
images.forEach((element, i) => {

    //Creates a variable that's an empty string by default
    let imageClasses = "";

    //"if...else" construct 
    if (i === 0) {
        imageClasses = "active";
    } else {
        imageClasses = null;
    }

    const carouselImgContainer = document.createElement("div");

    carouselContainer.append(carouselImgContainer);

    carouselImgContainer.classList.add("carousel_img_container", "position-absolute", "top-0", "start-0", imageClasses);

    const carouselImg = document.createElement("img");

    carouselImgContainer.append(carouselImg);

    carouselImg.setAttribute("src", element.image);

    carouselImg.classList.add("w-100", "h-100");

    const carouselTextContainer = document.createElement("div");

    carouselImgContainer.append(carouselTextContainer);

    carouselTextContainer.classList.add("carousel_text_container", "ps-2", "text-white");

    const carouselImgTitle = document.createElement("h4");

    carouselTextContainer.append(carouselImgTitle);

    carouselImgTitle.innerHTML += element.title;

    const carouselImgText = document.createElement("p");

    carouselTextContainer.append(carouselImgText);

    carouselImgText.innerHTML += element.text;

    

    // carouselContainer.innerHTML += `<div class="carousel_img_container position-absolute top-0 start-0 ${imageClasses}">
    // <img src="${element.image}" alt="" class="w-100 h-100">
    // <div class="carousel_text_container ps-2 text-white">
    // <h4>${element.title}</h4>
    // <p>${element.text}</p>
    // </div>
    // </div>`

})

const backBtn = document.getElementById("back_btn");
const fwdBtn = document.getElementById("fwd_btn");

fwdBtn.addEventListener("click", goToNxtImg);

backBtn.addEventListener("click", goToPreviousImg);

function goToNxtImg() {

    const imgElements = document.querySelectorAll(".carousel_img_container");

    imgElements[currentImgIndex].classList.remove("active");

    currentImgIndex++;

    if (currentImgIndex > imgElements.length -1) {

        currentImgIndex = 0;

    }

    imgElements[currentImgIndex].classList.add("active");

}

function goToPreviousImg() {

    const imgElements = document.querySelectorAll(".carousel_img_container");

    imgElements[currentImgIndex].classList.remove("active");

    currentImgIndex--;

    if (currentImgIndex < 0) {

        currentImgIndex = imgElements.length - 1;
        
    }

    imgElements[currentImgIndex].classList.add("active");

}