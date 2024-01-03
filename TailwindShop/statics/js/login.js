// ----------------------- Variables

const submitButton = document.getElementById('submit-button');
const numberSection = document.getElementById('number-section');
const codeNumberSection = document.getElementById('code-number-section');
const returnButton = document.getElementById('return-button');



// ------------------------- Event Listeners
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    numberSection.classList.add('hidden')
    codeNumberSection.classList.remove('hidden');
});

returnButton.addEventListener('click', () => {
    codeNumberSection.classList.add('hidden');
    numberSection.classList.remove('hidden');
})