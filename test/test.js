function inputData(){
    var expense={};
    var inputValue = document.querySelector("input").value;
    var button = document.querySelector("button");
    button.addEventListener("click", clickEvent);
    function clickEvent(){
        alert(inputValue);
    }

}



inputData();