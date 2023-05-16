// HTML
const numbers = document.querySelectorAll('.numbers button');
console.log(numbers);
const functions = document.querySelectorAll('.functions button');
const display = document.querySelector('.display');
display.textContent = '0';
console.log(display.textContent);
const calcArray = [];

// FUNCTIONS
numbers.forEach((button) => button.addEventListener('click', () => {
    console.log(button.textContent);
    if (display.textContent == '0'){
        display.textContent = button.textContent;
    } else {
        display.textContent += button.textContent;
    }
})); 

functions.forEach((button) => button.addEventListener('click', () => {
    console.log(button.textContent);
    button.style.backgroundColor = 'orange';
})); 