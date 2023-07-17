
//Creates variable for the carousel container.
const carouselContainerElement = document.getElementById("carousel_container");

//Creates variables for carousel buttons
const backBtnElement = document.getElementById("back_btn");
const fwdBtnElement = document.getElementById("fwd_btn");

//Creates global variable to decide which image is visualized (used later in "addEventListener").
let currentImgIndex = 0;

//Creates array of objects with content to be put in carousel.
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

//"forEach" cycle cycles "images[]" and creates the carousel's content.
images.forEach((element, i) => {

    //Creates a variable that's an empty string by default.
    let imageClasses = "";

    //"if...else" construct puts "active" in "imageClasses" if i === 0 (when the carousel is created).
    if (i === 0) {
        imageClasses = "active";
    } else {
        imageClasses = null;
    }

    // Creates img container, appends in "carouselContainerElement" and adds classes.
    const carouselImgContainerElement = document.createElement("div");

    carouselContainerElement.append(carouselImgContainerElement);

    carouselImgContainerElement.classList.add("carousel_img_container", "position-absolute", "top-0", "start-0", imageClasses);

    // Creates img element, appends in "carouselImgContainerElement", adds src attribute and classes.
    const carouselImgElement = document.createElement("img");

    carouselImgContainerElement.append(carouselImgElement);

    carouselImgElement.setAttribute("src", element.image);

    carouselImgElement.classList.add("w-100", "h-100");

    // Creates text container, appends in "carouselImgContainerElement", adds classes.
    const carouselTextContainerElement = document.createElement("div");

    carouselImgContainerElement.append(carouselTextContainerElement);

    carouselTextContainerElement.classList.add("carousel_text_container", "ps-2", "text-white");

    // Creates title element, appends in "carouselTextContainerElement", adds classes.
    const carouselImgTitleElement = document.createElement("h4");

    carouselTextContainerElement.append(carouselImgTitleElement);

    carouselImgTitleElement.innerHTML += element.title;

    // Creates paragraph element, appends in "carouselTextContainerElement", adds classes.
    const carouselImgTextElement = document.createElement("p");

    carouselTextContainerElement.append(carouselImgTextElement);

    carouselImgTextElement.innerHTML += element.text;

    //Code commented below does the same thing as above using "innerHtml" property.

    // carouselContainer.innerHTML += `<div class="carousel_img_container position-absolute top-0 start-0 ${imageClasses}">
    // <img src="${element.image}" alt="" class="w-100 h-100">
    // <div class="carousel_text_container ps-2 text-white">
    // <h4>${element.title}</h4>
    // <p>${element.text}</p>
    // </div>
    // </div>`

})

//"addEventListener" for "fwdBtnElement", function defined later.
fwdBtnElement.addEventListener("click", goToNxtImg);

//"addEventListener" for "backBtnElement", function defined later.
backBtnElement.addEventListener("click", goToPreviousImg);

//Function for "fwdBtnElement" "addEventListener".
function goToNxtImg() {

    //Creates a variable (an array) for ALL the "carouselImgContainerElement".
    const imgElements = document.querySelectorAll(".carousel_img_container");

    //Removes ".active" from img visualized before "click".
    imgElements[currentImgIndex].classList.remove("active");

    //Increases "currentImgIndex", used later to add ".active" to next img.
    currentImgIndex++;

    //"if" construct sets "currentImgIndex" to 0 when clicks go over imgs number, goes back to first img.
    if (currentImgIndex > imgElements.length -1) {

        currentImgIndex = 0;

    }

    //Adds ".active" to new visualized img.
    imgElements[currentImgIndex].classList.add("active");

}

//Function for "backBtnElement" "addEventListener".
function goToPreviousImg() {

    //Creates a variable (an array) for ALL the "carouselImgContainerElement".
    const imgElements = document.querySelectorAll(".carousel_img_container");

    //Removes ".active" from img visualized before "click".
    imgElements[currentImgIndex].classList.remove("active");

    //Decreases "currentImgIndex", used later to add ".active" to previous img.
    currentImgIndex--;

    /*"if" construct sets "currentImgIndex" to ".length" of "imgElements" when "click" goes under 
    imgs number, goes forward to last img. */
    if (currentImgIndex < 0) {

        currentImgIndex = imgElements.length - 1;
        
    }

    //Adds ".active" to new visualized img.
    imgElements[currentImgIndex].classList.add("active");

}