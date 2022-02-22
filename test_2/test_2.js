let mountains = [
    {name : "bulgok", height : "1657", place : "seongnam"},
    {name : "gwanak" ,height : "2394", place : "seoul" },
    {name : "pina", height : "3000", place : "mexico"}
]

function generateTablehead(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTablehead(table, data);