const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
const сircles = document.getElementById("сircles");

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    сircles.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}


function addActiveCircle() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveCircle() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}


function showSlide() {
    slides[currentSlideIndex].classList.add("selected");
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove("selected");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveCircle();
    currentSlideIndex = slideIndex;
    addActiveCircle();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);