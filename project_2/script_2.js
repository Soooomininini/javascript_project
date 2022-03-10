var button = document.querySelector("button");
var counting = 0;
button.addEventListener("click", submitData(counting));

function submitData(counting){
    if (counting==0){
        var table = document.querySelector("table");
        table.deleteRow(0);
        setTable();
        counting++;
    }
    else{
        setTable();
        counting++;
    }

    function setTable(){
        //pointing vars ( name, date, amount, button)
        var name = document.querySelectorAll("label")[0].value;
        var date = document.querySelectorAll("label")[1].value;
        var amount = document.querySelectorAll("label")[2].value;
        var newButton = document.createElement("button");

        //creating outer dish for the pointed vars (tr, td, textNode)
        var newRow = document.createElement("tr");
        var newData = document.createElement("td");
        var newText1 = document.createTextNode(name);
        var newText2= document.createTextNode(date);
        var newText3 = document.createTextNode(amount);

        //putting outer dishes + vars together
        newData.appendChild(newText1);
        newData.appendChild(newText2);
        newData.appendChild(newText3);
        newData.appendChild(newButton);

        //tr + td (appendChild)
        newRow.appendChild(newData);
        
        //newbutton addeventlistener
        newButton.addEventListener("click", removeRow(counting));
        function removeRow(counting){
            table.deleteRow(counting);
        }

    }
}

