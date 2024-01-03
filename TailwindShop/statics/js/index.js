//  ------------------- Variables

const btnHambergerMenu = document.querySelector(".hamberger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");
const btnDropdownCloser = document.querySelector(".dropdown-closer");
const navigationSection = document.querySelector(".navigation");
const dropdownContainer = document.querySelector(".dropdown-container");
const slidebarItems = document.querySelectorAll(".slidebar-item");
const slidebarCounter = 0;

//  ---------------------- Event Listeners

btnHambergerMenu.addEventListener("click", () => {
    navigationSection.classList.toggle("left-full");
    navigationSection.classList.toggle("left-0");
});

btnDropdownCloser.addEventListener("click", () => {
    navigationSection.classList.toggle("left-full");
    navigationSection.classList.toggle("left-0");
});

dropdownContainer.addEventListener("click", (e) => {
    const target = e.target;
    let arrow = document.querySelector(".arrow-icon");

    dropdownMenu.classList.toggle("h-[256px]");
    dropdownMenu.classList.toggle("py-2");
    arrow.classList.toggle("rotate-180");
});



// -------------------------- Timing
// slidebar-1
const items = document.querySelectorAll(".slidebar-1 .item");
let activeItem = 0;
setInterval(() => {
    let beforeActiveItem = activeItem;
    items[activeItem].classList.add("left");
    ++activeItem;
    if (activeItem >= items.length) activeItem = 0;
    items[activeItem].classList.add("active");
    setTimeout(() => {
        items[beforeActiveItem].classList.remove("active");
        items[beforeActiveItem].classList.remove("left");
    }, 2000);
}, 5000);


// slidebar-2

const slidebar2Items = document.querySelectorAll(".slidebar-2__items");
let slidebar2ActiveIndex = 0;
setInterval(() => {
    let beforeActiveItem = slidebar2ActiveIndex;
    slidebar2Items[slidebar2ActiveIndex].classList.add("left");
    ++slidebar2ActiveIndex;
    if (slidebar2ActiveIndex >= slidebar2Items.length) slidebar2ActiveIndex = 0;
    slidebar2Items[slidebar2ActiveIndex].classList.add("active");
    setTimeout(() => {
        slidebar2Items[beforeActiveItem].classList.remove("active");
        slidebar2Items[beforeActiveItem].classList.remove("left");
    }, 2000);
}, 5000);