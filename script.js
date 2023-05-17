// BODY
const numbers = document.querySelectorAll('.numbers button');
const functions = document.querySelectorAll('.functions button');
const display = document.querySelector('.display');
const clear = document.querySelector('#clear');
display.textContent = '0';
const calcArray = [0];
const funcArray = ['/','*','-','+','=','Clear'];
var evalFlag = 0;

numbers.forEach((button) => button.addEventListener('click', addNumbers));
functions.forEach((button) => button.addEventListener('click', addFunctions));
clear.addEventListener('click',clearAll);

// FUNCTIONS
function addNumbers() {
    let endIndex = calcArray.length-1;
    if (display.textContent == '0'){ 
        display.textContent = this.textContent;
        calcArray[0] = this.textContent;
    } else if (this.textContent == 'C'){
        // add one more case if a function is clicked and current value is 0 to keep 0
    } else if (evalFlag == 1){
        display.textContent = this.textContent;
        calcArray[0] = this.textContent;
        evalFlag = 0;
    } else if (funcArray.includes(calcArray[endIndex])){
        functions.forEach((button) => button.style.backgroundColor = '#ffa500');
        display.textContent = this.textContent;
        calcArray.push(this.textContent);
        console.log(calcArray);
    } else {
        display.textContent += this.textContent;
        calcArray[endIndex] += this.textContent;
        console.log(calcArray);
    }
}

function addFunctions() {
    let endIndex = calcArray.length-1;
    console.log(this.textContent);

    if (this.textContent == "="){
        evaluateArray();
        evalFlag = 1;
    } else if (funcArray.includes(calcArray[endIndex])){ 
        calcArray.pop();
        calcArray.push(this.textContent);
        functions.forEach((button) => button.style.backgroundColor = '#ffa500');
        this.style.backgroundColor = '#ffffff';
        this.style.color = '#ffa500';
        console.log(calcArray);
        evalFlag = 0;
    } else {
        this.style.backgroundColor = '#ffffff';
        this.style.color = '#ffa500';
        calcArray.push(this.textContent);
        console.log(calcArray);
        evalFlag = 0;
    } 
}

function evaluateArray() {

    let evaluation = '';
    calcArray.forEach((input) => {        
        if (funcArray.includes(input)){
            evaluation += input;
        } else {
            evaluation += input;
        }
    });
    evaluation = eval(evaluation); // if this catches a decimal value, the float will start to make weird numbers
    display.textContent = evaluation;
    calcArray.forEach(() => calcArray.shift());
    calcArray[0] = evaluation.toString();
}

function clearAll() {
    calcArray.forEach(() => calcArray.shift());
    display.textContent = '0';
}
