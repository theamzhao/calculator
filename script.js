// HTML
const numbers = document.querySelectorAll('.numbers button');
console.log(numbers);
const functions = document.querySelectorAll('.functions button');
const display = document.querySelector('.display');
display.textContent = '0';
console.log(display.textContent);
const calcArray = [0];

// FUNCTIONS
numbers.forEach((button) => button.addEventListener('click', () => {
    //console.log(button.textContent);
    if (display.textContent == '0'){
        display.textContent = button.textContent;
        calcArray[0] = parseInt(button.textContent);
        console.log(calcArray);
    } else {
        display.textContent += button.textContent;
        calcArray.push(parseInt(button.textContent));
        console.log(calcArray);
    }
})); 

functions.forEach((button) => button.addEventListener('click', () => {
    console.log(button.textContent);
    if (typeof calcArray[calcArray.length-1] == 'number'){ // if this is the only one
        button.style.backgroundColor = 'orange';
        calcArray.push(button.textContent);
        console.log(calcArray);
    } else {
        calcArray.pop();
        calcArray.push(button.textContent);
        //functions.style.backgroundColor = '#f4f4f4';
        button.style.backgroundColor = 'blue';
        console.log(calcArray);
    } 
})); 

// Make most recently selected function orange
// un-orange other function buttons

// if a number is selected
//    array length == 1 && array[0] = 0, clear 0 and push number
//    if last number is a function, then push
//    if last number is a number, push
//
// push numbers to array
//
// when a function is selected &&
//    last value in array is function, then replace with selected function
//    last value in array is number, push to array 
// if equal is pressed, then 
//    concatenate all numbers between functions 
//    apply function to 

