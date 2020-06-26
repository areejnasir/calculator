function getbtn(num){
    var result2 = document.getElementById("result2");
    result2.value += num;
}
function getResult(){
    var result2 = document.getElementById("result2");
    result2.value = eval(result2.value);
}
function clearInput(){
    var result2 = document.getElementById("result2");
    result2.value = "";
}