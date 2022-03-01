var counting=0;

function inputData(){
    var name = document.getElementsByClassName("inputInfo")[0].nodeValue;
    var date = document.getElementsByClassName("inputInfo")[1].nodeValue;
    var amount = document.getElementsByClassName("inputInfo")[2].nodeValue;
    var button = document.querySelector("button");

    var expense = { name, date, amount};
    button.addEventListener("click", writeData(expense));
    counting++;
}

function writeData(expense){
    var table = document.querySelector("table");
    if (counting==0) {
        table.remove("tr");
        var newRow = table.insertRow();
        appendRow(expense, newRow);
        appendButton();
    }
    else{
        var newRow = table.insertRow()
        appendRow(expense, newRow);
        appendButton();
    }
}

function appendRow(expense, newRow){
    var table = document.querySelector("table");
    for (var x=0; x<3; x++){
        var blank = newRow.appendChild('td');
        
    }
}