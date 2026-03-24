const display = document.getElementById("display");
const result = document.getElementById("result");

let openParenthesis = false;
let addedOperation = false;

function addOnDisplay(toAdd){

    hideResultShowDisplay();
    //Parenthesis open and close
    if (toAdd == '('){
        if (openParenthesis == false){
            display.value += toAdd;
            openParenthesis = true;
            addedOperation = false;
        }
        else{
            display.value += ')';
            openParenthesis = false;
        }
    }
    //Only one operation per time
    else{
        if
        (
            toAdd == '%' ||
            toAdd == '+' ||
            toAdd == '-' ||
            toAdd == '*' ||
            toAdd == '/'
        )
        {
            if (addedOperation == false){
                display.value += toAdd;
            }
            addedOperation = true;
        }
        else{
            display.value += toAdd;
            addedOperation = false;
        }
    }
    calculate()
}

function eraseFromDisplay(){
    if (display.value.length == "("){
        openParenthesis = false;
    }
    display.value = display.value.substring(0, display.value.length-1);
    calculate();
}

function cleanDisplay(){
    display.value = "";
    result.textContent = "= 0";
    openParenthesis = false;
    addedOperation = false;
}

function hideResultShowDisplay(){
    display.classList.replace("display-hide", "display-show");
    result.classList.replace("result-show", "result-hide");
}

function getResult(){
    display.classList.replace("display-show", "display-hide");
    result.classList.replace("result-hide", "result-show");
    calculate();
}

function calculate(){
    if (display.value != ''){
        result.textContent = "= " + eval(display.value);
    }
    else{
        result.textContent = "= 0";
    }
}