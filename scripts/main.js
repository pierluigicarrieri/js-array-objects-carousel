const carouselContainer = document.getElementById("carousel_container");

let currentImgIndex = 0;

const imagesList = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

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

for (let i = 0; i < imagesList.length; i++) {

    const currentImage = imagesList[i];

    let imageClasses = "";

    if (i === 0) {

        imageClasses = "active";

    }

    carouselContainer.innerHTML += `<div class="carousel_img_container position-absolute top-0 start-0 ${imageClasses}">
    <img src="img/${currentImage}" alt="" class="w-100 h-100">
    </div>`

}

const backBtn = document.getElementById("back_btn");
const fwdBtn = document.getElementById("fwd_btn");

fwdBtn.addEventListener("click", function() {

    const imgElements = document.querySelectorAll(".carousel_img_container");

    imgElements[currentImgIndex].classList.remove("active");

    currentImgIndex++;

    if (currentImgIndex > imgElements.length -1) {

        currentImgIndex = 0;

    }

    imgElements[currentImgIndex].classList.add("active");

}

);

backBtn.addEventListener("click", function() {

    const imgElements = document.querySelectorAll(".carousel_img_container");

    imgElements[currentImgIndex].classList.remove("active");

    currentImgIndex--;

    if (currentImgIndex < 0) {

        currentImgIndex = imgElements.length - 1;
        
    }

    imgElements[currentImgIndex].classList.add("active");

}

);