// BODY
const numbers = document.querySelectorAll('.numbers button');
const functions = document.querySelectorAll('.functions button');
const display = document.querySelector('.display');
display.textContent = '0';
const calcArray = [0];
const funcArray = ['/','*','-','+','=','Clear'];

numbers.forEach((button) => button.addEventListener('click', addNumbers));
functions.forEach((button) => button.addEventListener('click', addFunctions));

// FUNCTIONS
function addNumbers() {
    //console.log(button.textContent);
    let endIndex = calcArray.length-1;
    if (display.textContent == '0'){
        display.textContent = this.textContent;
        calcArray[0] = this.textContent;
        console.log(calcArray);
    } else if (funcArray.includes(calcArray[endIndex])){
        functions.forEach((button) => button.style.backgroundColor = '#f4f4f4');
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
    }
    else if (funcArray.includes(calcArray[endIndex])){ 
        calcArray.pop();
        calcArray.push(this.textContent);
        //console.log(this);
        //console.log(functions)
        functions.forEach((button) => button.style.backgroundColor = '#f4f4f4');
        this.style.backgroundColor = 'orange';
        console.log(calcArray);
    } else {
        this.style.backgroundColor = 'orange';
        calcArray.push(this.textContent);
        console.log(calcArray);
    } 
}

function evaluateArray() {
    //evaluate the function (number function number)
    let evaluation = '';
    calcArray.forEach((input) => {        
        if (funcArray.includes(input)){
            evaluation += input;
        } else {
            evaluation += input;
        }
    });
    evaluation = eval(evaluation);
    display.textContent = evaluation;
    calcArray.forEach(() => calcArray.shift());
    calcArray[0] = evaluation;
    //output result into display
    //save as the only value in the array 
}
