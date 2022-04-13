var textButton = document.getElementsByClassName("typing")[0].querySelector("button");

textButton.addEventListener("click", write);

function write(){
    var inputText = document.getElementsByClassName("typing")[0].querySelector("input").value;
    var result = document.getElementsByClassName("result")[0];
    var list = document.createElement("li");
    var listText = document.createTextNode(inputText);

    list.appendChild(listText);
    result.appendChild(list);
}