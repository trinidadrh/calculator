let problemDisplay = document.querySelector("#itemFn");
let numButton = document.querySelectorAll(".number");
let opButton = document.querySelectorAll(".operator");
let numZero = document.querySelector("#item17");
let numOne = document.querySelector("#item13");
let numTwo = document.querySelector("#item14");
let numThree = document.querySelector("#item15");
let numFour = document.querySelector("#item9");
let numFive = document.querySelector("#item10");
let numSix = document.querySelector("#item11");
let numSeven = document.querySelector("#item5");
let numEight = document.querySelector("#item6");
let numNine = document.querySelector("#item7");
let opAdd = document.querySelector("#item16");
let opSub = document.querySelector("#item12");
let opMult = document.querySelector("#item8");
let opDiv = document.querySelector("#item4");
let display = {};
let CalcNumber1 = [];
let CalcNumber2 = [];
let firstNumber;
let secondNumber;
let operatorSymbol;

// IF number button clicked, create and display first number
function showCreateFirstNum() {
    for (let i = 0; i < numButton.length; i++) {
        numButton[i].addEventListener("click", function() {
            if (operatorSymbol !== undefined) {
                showCreateSecondNum();
            } else if (numButton[i] === numZero) {
                CalcNumber1.push("0"); 
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            } else if (numButton[i] === numOne) {
                CalcNumber1.push("1");
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            } else if (numButton[i] === numTwo) {
                CalcNumber1.push("2"); 
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            } else if (numButton[i] === numThree) {
                CalcNumber1.push("3");
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            } else if (numButton[i] === numFour) {
                CalcNumber1.push("4"); 
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            } else if (numButton[i] === numFive) {
                CalcNumber1.push("5"); 
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            } else if (numButton[i] === numSix) {
                CalcNumber1.push("6"); 
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            } else if (numButton[i] === numSeven) {
                CalcNumber1.push("7"); 
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            } else if (numButton[i] === numEight) {
                CalcNumber1.push("8"); 
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            } else {
                CalcNumber1.push("9"); 
                firstNumber = CalcNumber1.join("");
                problemDisplay.textContent = firstNumber;
                return firstNumber;
            }
        })
    }
};

// IF operator button clicked, create and display operator
function showOperator() {
    for (let i = 0; i < opButton.length; i++) {
        opButton[i].addEventListener("click", function() {
            if (firstNumber === undefined) {
                return;
            } else if (opButton[i] === opAdd) {
                problemDisplay.innerHTML = firstNumber + " + ";
                let operatorSymbol = "+";
            } else if (opButton[i] === opSub) {
                problemDisplay.innerHTML = firstNumber + " - ";
                let operatorSymbol = "+";
            } else if (opButton[i] === opMult) {
                problemDisplay.innerHTML = firstNumber + " x ";
                let operatorSymbol = "x";
            } else {
                problemDisplay.innerHTML = firstNumber + " ÷ ";
                let operatorSymbol = "÷";
            }
        })
        
    }
}

// IF number button clicked, create and display second number
function showCreateSecondNum() {
    for (let i = 0; i < numButton.length; i++) {
        numButton[i].addEventListener("click", function() {
            if (firstNumber === undefined || operatorSymbol === undefined) {
                return;
            } else if (numButton[i] === numZero) {
                CalcNumber2.push("0"); 
                secondNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            } else if (numButton[i] === numOne) {
                CalcNumber2.push("1");
                firstNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            } else if (numButton[i] === numTwo) {
                CalcNumber2.push("2"); 
                firstNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            } else if (numButton[i] === numThree) {
                CalcNumber2.push("3");
                firstNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            } else if (numButton[i] === numFour) {
                CalcNumber2.push("4"); 
                firstNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            } else if (numButton[i] === numFive) {
                CalcNumber2.push("5"); 
                firstNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            } else if (numButton[i] === numSix) {
                CalcNumber2.push("6"); 
                firstNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            } else if (numButton[i] === numSeven) {
                CalcNumber2.push("7"); 
                firstNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            } else if (numButton[i] === numEight) {
                CalcNumber2.push("8"); 
                firstNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            } else {
                CalcNumber2.push("9"); 
                firstNumber = CalcNumber2.join("");
                problemDisplay.innerHTML = firstNumber + " " + operatorSymbol + " " + secondNumber;
                return secondNumber;
            }
        })
    }
};

function chooseNumber() {
    if (operatorSymbol !== undefined) {
        showCreateSecondNum;
    } else if (operatorSymbol === undefined) {
        showCreateFirstNum;
    } else {
        return;
    }
} 

showCreateFirstNum();
showOperator();
showCreateSecondNum();


function add(a,b) {
    result = a + b;
    return result;
} 

function subtract(a,b) {
    result = a - b;
    return result;
} 

function multiply(a,b) {
    result = a * b;
    return result;
} 
    
function divide(a,b) {
    result = a / b;
    return result;
}

// function operate(num1,num2) {
//     if addButton {
//         add(num1,num2);
//     } else if subtractButton {
//         subtract(num1,num2);
//     } else if multiplyButton {
//         multiply(num1,num2);
//     } else divideButton {
//         divide(num1,num2);
//     }
// }