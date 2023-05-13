let input = '' ;
let result = '' ;

function addInput(value){
    input += value;
    document.getElementById('result').value = input;
}

function clearButton(){
    input = '';
    result = '';
    document.getElementById('result').value = '';
}

function getResult(){
    result = eval(input);
    document.getElementById('result').value = result;
    input = '';
}

function cal(operator){
    input += operator;
    document.getElementById('result').value = input;
}
