var button = document.querySelector("button");
var counting = 0;
var tbody = document.querySelector("tbody");
button.addEventListener("click", submitData);

function submitData(){
    if (counting==0){
        
        tbody.deleteRow(0);
        setTable();
        counting++;
    }
    else{
        setTable();
        counting++;
    }

}

function setTable(){
    //pointing vars ( name, date, amount, button)
    var name = document.querySelectorAll("input")[0].value;
    var date = document.querySelectorAll("input")[1].value;
    var amount = document.querySelectorAll("input")[2].value;
    var set = [name, date, amount];
    //adding a row (name, date, amount, newButton)
    var newRow = document.createElement("tr");
    for (var x=0; x<3; x++){
        //creating outer dishes (tr, td,) and insides (set[x])  
        var newData = document.createElement("td");
        var newText = document.createTextNode(set[x]);

        //attaching
        newData.appendChild(newText);
        newRow.appendChild(newData);
        tbody.appendChild(newRow);
    }
    
    //attaching a button
    var newButton = document.createElement("button");
    newRow.appendChild(newButton);
    //newButton addeventListener
    newButton.addEventListener("click", function(){
        var thisRow = newButton.parentElement;
        thisRow.remove();
        counting--;
    });

}


