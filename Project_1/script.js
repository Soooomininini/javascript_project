var textButton = document.getElementsByClassName("typing")[0].querySelector("button");

textButton.addEventListener("click", write);

function write(){
    /* Why moved inputText into the write funciton?
    Because, inputText is null, since the user hasn't written anything in the
    input bar. The brower cannot call the null variable.
     */

    //create nodes
    var inputText = document.querySelector("input").value;
    var result = document.getElementsByClassName("result")[0];
    var newList = document.createElement("ul");
    /* "ul", not "li" : because it's compatible with styling (style.css) */
    var newListContent = document.createTextNode(inputText);
    
    //append nodes
    newList.appendChild(newListContent);
    result.appendChild(newList);
    
}

    var inputText = document.getElementsByClassName("typing")[0].querySelector("input").value;
    var result = document.getElementsByClassName("result")[0];
    var list = document.createElement("li");
    var listText = document.createTextNode(inputText);

    list.appendChild(listText);
    result.appendChild(list);

