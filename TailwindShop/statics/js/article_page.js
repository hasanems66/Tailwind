//  ------------------- Variables

const btnHambergerMenu = document.querySelector(".hamberger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");
const btnDropdownCloser = document.querySelector(".dropdown-closer");
const navigationSection = document.querySelector(".navigation");
const dropdownContainer = document.querySelector(".dropdown-container");
const btnsAnswer = document.querySelectorAll('.btn-answer');



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


btnsAnswer.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const form = e.target.parentElement.parentElement.nextElementSibling;
        form.classList.toggle('hidden')
    })
});