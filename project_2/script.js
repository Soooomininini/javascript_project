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
        appendButton(table);
        counting++;
    }
    else{
        var newRow = table.insertRow()
        appendRow(expense, newRow);
        appendButton(table);
        counting++;
    }
}

function appendRow(expense, newRow){
    var table = document.querySelector("table");
    for (var x=0; x<3; x++){
        var newData = document.createElement('td');
        var newText = document.createTextNode(Expense[x]);
        newData.appendChild(newText);
        newRow.appendChild(newData);
    }
}

function appendButton(table){
    var space = document.getElementsByTagName("table").getElementsByTagName('tr')[3];
    var img = document.createElement("img");
    space.appendChild(img);
    space.addEventListener("click", function(){
        table.deleteRow();
    });
    
}

inputData();