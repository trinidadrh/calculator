let problemDisplay = document.querySelector("#itemFn");
let answerDisplay = document.querySelector("#itemDs");
let decimalButton = document.querySelector("#item18");
let equalButton = document.querySelector("#item19");
let clearButton = document.querySelector("#item1");
let clearEntryButton = document.querySelector("#item2");
let negativeButton = document.querySelector("#item3");
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
let result = ""; 
let number = "";
let firstNumber = "";
let secondNumber = "";
let operatorSymbol = "";

// Assigns and displays first or second operand strings
function assignNumber(a) {
    if (operatorSymbol === "") {
        firstNumber = a;
        problemDisplay.textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
        return firstNumber;
    } else {
        secondNumber = a.replace(firstNumber,"");
        problemDisplay.textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
        return secondNumber;
    }
}

// IF number button clicked, creates or updates operand strings
function showCreateNum() {
    for (let i = 0; i < numButton.length; i++) {
        numButton[i].addEventListener("click", function() {
            if (numButton[i] === numZero) {
                number += "0"; 
                assignNumber(number);
            } else if (numButton[i] === numOne) {
                number += "1"; 
                assignNumber(number);
            } else if (numButton[i] === numTwo) {
                number += "2"; 
                assignNumber(number);
            } else if (numButton[i] === numThree) {
                number += "3"; 
                assignNumber(number);
            } else if (numButton[i] === numFour) {
                number += "4"; 
                assignNumber(number);
            } else if (numButton[i] === numFive) {
                number += "5"; 
                assignNumber(number);
            } else if (numButton[i] === numSix) {
                number += "6"; 
                assignNumber(number);
            } else if (numButton[i] === numSeven) {
                number += "7"; 
                assignNumber(number);
            } else if (numButton[i] === numEight) {
                number += "8"; 
                assignNumber(number);
            } else if (numButton[i] === numNine) {
                number += "9"; 
                assignNumber(number);
            } else if (numButton[i] === decimalButton) {
                if (number.includes(".")) {
                    return;
                } else {
                    number += "."; 
                    assignNumber(number);
                }
            } else {
                return;
            }
        })
    }
}

// IF operator button clicked, creates and displays operator string
function showOp() {
    for (let i = 0; i < opButton.length; i++) {
        opButton[i].addEventListener("click", function() {
            if (result !== "") {
                firstNumber = result;
                operatorSymbol = "";
                secondNumber = "";
                number = ""
                problemDisplay.innerHTML = textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
            }
            if (opButton[i] === opAdd) {
                operatorSymbol += "+";
                problemDisplay.innerHTML = textContent = firstNumber + " " + operatorSymbol;
                return operatorSymbol;
            } else if (opButton[i] === opSub) {
                operatorSymbol += "-";
                problemDisplay.innerHTML = textContent = firstNumber + " " + operatorSymbol;
                return operatorSymbol;
            } else if (opButton[i] === opMult) {
                operatorSymbol += "x";
                problemDisplay.innerHTML = textContent = firstNumber + " " + operatorSymbol;
                return operatorSymbol;
            } else {
                operatorSymbol += "÷";
                problemDisplay.innerHTML = textContent = firstNumber + " " + operatorSymbol;
                return operatorSymbol;
            }
        })
        
    }
}

// Completes one opertion: add, subtract, multiple, divide
function operate() {
    equalButton.addEventListener("click", function() {
        let firstOperand = parseFloat(firstNumber);
        let secondOperand = parseFloat(secondNumber);
        if (operatorSymbol === "" || secondNumber === "") {
            return;
        } else if (secondOperand === 0 && operatorSymbol === "÷") {
            secondNumber = "";
            problemDisplay.textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
        } else if (operatorSymbol === "+") {
            result = (firstOperand + secondOperand).toFixed(2);
            answerDisplay.textContent = result;
        } else if (operatorSymbol === "-") {
            result = (firstOperand - secondOperand).toFixed(2);
            answerDisplay.textContent = result;
        } else if (operatorSymbol === "x") {
            result = (firstOperand * secondOperand).toFixed(2);
            answerDisplay.textContent = result;
        } else {
            result = (firstOperand / secondOperand).toFixed(2);
            answerDisplay.textContent = result;
        }
    })
}

// Clears the current entry or the entire problem
function clear() {
    clearButton.addEventListener("click", function() {
        location.reload();
    })
    clearEntryButton.addEventListener("click", function() {
        if (firstNumber && operatorSymbol && secondNumber) {
            secondNumber = "";
            problemDisplay.textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
        } else if (firstNumber && operatorSymbol) {
            secondNumber = "";
            operatorSymbol = "";
            problemDisplay.textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
        } else {
            location.reload();
        }
    })
}

// Adds or removes negative to/from a particular number
// function addRemoveNegative() {
//     negativeButton.addEventListener("click", function() {
//         if (firstNumber && operatorSymbol) {
//             if (secondNumber.charAt(0) === "-") {
//                 secondNumber = secondNumber.substring(1);
//                 secondNumber = secondNumber.replace(firstNumber,"");
//                 problemDisplay.textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
//                 return secondNumber; 
//             } else {
//                 secondNumber = "-" + secondNumber;
//                 secondNumber = secondNumber.replace(firstNumber,"");
//                 problemDisplay.textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
//                 return secondNumber;
//             }
//         } else if (firstNumber && (operatorSymbol === "")) {
//             if (firstNumber.charAt(0) === "-") {
//                 firstNumber = firstNumber.substring(1);
//                 problemDisplay.textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
//                 return firstNumber; 
//             } else {
//                 firstNumber = "-" + firstNumber;
//                 problemDisplay.textContent = firstNumber + " " + operatorSymbol + " " + secondNumber;
//                 return firstNumber;
//             }
//         } else {
//             return;
//         }
//     })
// }

showOp();
showCreateNum();
// addRemoveNegative();
clear();
operate();