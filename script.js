// BODY
const numbers = document.querySelectorAll('.numbers button');
const functions = document.querySelectorAll('.functions button');
const display = document.querySelector('.display');
const clear = document.querySelector('#clear');
const neg = document.querySelector('#neg');
const perc = document.querySelector('#perc');
const calcArray = [0];
const funcArray = ['/','*','-','+','=','Clear'];
display.textContent = '0';
var evalFlag = 0;

numbers.forEach((button) => button.addEventListener('click', addNumbers));
functions.forEach((button) => button.addEventListener('click', addFunctions));
clear.addEventListener('click',clearAll);
neg.addEventListener('click',negate);
perc.addEventListener('click',percentage);

// FUNCTIONS
function addNumbers() {
    let endIndex = calcArray.length-1;
    if (display.textContent == '0'){ 
        display.textContent = this.textContent;
        calcArray[0] = this.textContent;
    } else if (this.textContent == 'C' || this.textContent == '+/-' || this.textContent == '%'){
        // add one more case if a function is clicked and current value is 0 to keep 0
    } else if (evalFlag == 1){
        display.textContent = this.textContent;
        calcArray[0] = this.textContent;
        evalFlag = 0;
    } else if (funcArray.includes(calcArray[endIndex])){
        functions.forEach((button) => {
            button.style.backgroundColor = '#ffa500';
            button.style.color = '#ffffff';
        });
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
    evaluation = parseFloat(eval(evaluation).toFixed(8)); 
    display.textContent = evaluation;
    calcArray.forEach(() => calcArray.shift());
    calcArray[0] = evaluation.toString();
}

function clearAll() {
    calcArray.forEach(() => calcArray.shift());
    display.textContent = '0';
}

function negate() {
    let endIndex = calcArray.length-1;
    if (parseInt(calcArray[endIndex]) > 0) {
        calcArray[endIndex] = '(-' + calcArray[endIndex] + ')';
        display.textContent = '-' + display.textContent;
    } else if (parseInt(calcArray[endIndex]) < 0) {
        calcArray[endIndex] = calcArray[endIndex].replace('(-','');
        calcArray[endIndex] = calcArray[endIndex].replace(')','');
        display.textContent = display.textContent.replace('-','');
    }
}

function percentage() {
    let endIndex = calcArray.length-1;
    let divValue = (display.textContent/100).toString();
    calcArray[endIndex] = divValue;
    display.textContent = divValue;
}
