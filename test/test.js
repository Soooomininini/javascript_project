function inputData(){
    var expense={};
    
    var button = document.querySelector("button");
    button.addEventListener("click", clickEvent);
    var inputValue = document.querySelector("input").value;
    function clickEvent(){
        var inputValue = document.querySelector("input").value;
        alert(inputValue);
    }

}


var inputValue = document.querySelector("input").value;
inputData();