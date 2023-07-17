
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

    //"if...else" construct puts "active" in "imageClasses" if i === 0 (when the carousel is created)
    if (i === 0) {
        imageClasses = "active";
    } else {
        imageClasses = null;
    }

    /* Creates img container, appends in carousel and adds classes */
    const carouselImgContainerElement = document.createElement("div");

    carouselContainerElement.append(carouselImgContainerElement);

    carouselImgContainerElement.classList.add("carousel_img_container", "position-absolute", "top-0", "start-0", imageClasses);

    /* Creates img element, appends in carousel and adds src attribute and classes */
    const carouselImgElement = document.createElement("img");

    carouselImgContainerElement.append(carouselImgElement);

    carouselImgElement.setAttribute("src", element.image);

    carouselImgElement.classList.add("w-100", "h-100");

    const carouselTextContainerElement = document.createElement("div");

    carouselImgContainerElement.append(carouselTextContainerElement);

    carouselTextContainerElement.classList.add("carousel_text_container", "ps-2", "text-white");

    const carouselImgTitleElement = document.createElement("h4");

    carouselTextContainerElement.append(carouselImgTitleElement);

    carouselImgTitleElement.innerHTML += element.title;

    const carouselImgTextElement = document.createElement("p");

    carouselTextContainerElement.append(carouselImgTextElement);

    carouselImgTextElement.innerHTML += element.text;

    

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