var name, date, amount;
var counting=0;
var flag=0;

var addExpenseButton = document.getElementById("add");
addExpenseButton.addEventListener("click", inputInfo);

function inputInfo(){
    //counting 0, remove the current default message box.
    if (counting==0) document.getElementsByClassName("ResultInfo").getElementsByClassName("Result").remove();
    //otherwise, add up a block.
    else{
        for (var x=0; x<3; x++){
            var title = document.getElementsByClassName("ResultInfo").getElementsByClassName("title")[x];
            var titleName = title.innerHTML;

            var result = document.createElement("div");
            result.setAttribute("class", "result" + titleName);
            title.appendChild(result);
            counting++;
        }
    }
    var button = document.getElementsByClassName("title")[3];
    button.setAttribute("button", "remover");
    var eraseBut = document.getElementsByClassName("title")[3];
    eraseBut.addEventListener("click", remover(e));
}

function remover(e){
    var remove = e.target;
    remove.parentnode;
}


