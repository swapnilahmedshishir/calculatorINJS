function deleteBtn(){
    document.getElementById("result_value").value = "";
}

function digit(clickValue){
    document.getElementById("result_value").value += clickValue; 

}

function resultBtn(){
    var digit = document.getElementById("result_value").value ; 
        var result = eval(digit);
        document.getElementById("result_value").value = result;
}
