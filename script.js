
var typeButton = document.querySelector('button');
// inputText, typeButton 지정은 해결


// function call(){
//     document.getElementById("typingBox").innerText = inputText;
// }

// call();
typeButton.addEventListener("click", write);
//typeButton click event 


function write(){
    var inputText = document.querySelector("input").value;
    var result = document.getElementsByClassName("result")[0];
    var newList = document.createElement("li");
    var newListContent = document.createTextNode(inputText);
    //create nodes

    newList.appendChild(newListContent);
    result.appendChild(newList);
    //append nodes
}

function blue(){
    alert("hello");
}
