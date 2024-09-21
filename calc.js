let resultElement = document.getElementById("result");
var cal = document.getElementById("calcu");
let indirectEval = eval;

function dis(val) { 
    resultElement.value += val;
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') {
        resultElement.value += event.key; 
    }
} 

cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        solve(); 
    } 
} 

function solve() { 
    try {
        resultElement.value = indirectEval(resultElement.value);
    } catch (e) {
        resultElement.value = "Error";
    }
} 

function clr() { 
    resultElement.value = "" 
}