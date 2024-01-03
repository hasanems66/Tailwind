//  ------------------- Variables

const btnHambergerMenu = document.querySelector(".hamberger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");
const btnDropdownCloser = document.querySelector(".dropdown-closer");
const navigationSection = document.querySelector(".navigation");
const dropdownContainer = document.querySelector(".dropdown-container");
const btnsAddProduct = document.querySelectorAll('.btn-add-product');
const btnsSubtractPriduct = document.querySelectorAll('.btn-subtract-product');

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

btnsAddProduct.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const targetElement = e.target.nextElementSibling;
        let count = parseInt(targetElement.innerText) + 1;
        targetElement.innerText = count;
    })
});

btnsSubtractPriduct.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const targetElement = e.target.previousElementSibling;
        let count = parseInt(targetElement.innerText) -1;
        if (count <= 1) count = 1;
        targetElement.innerText = count;
    })
})
