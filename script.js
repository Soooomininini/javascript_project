// inputText, typeButton 지정은 해결
// inputText 를 write 안으로 옮김
var typeButton = document.querySelector('button');


//typeButton click event 
typeButton.addEventListener("click", write);


//write function
function write(){
    /* Why moved inputText into write funciton?
    Because, inputText is null, since the user hasn't written anything on the
    input bar. The brower cannot call the null variable.
     */

    //create nodes
    var inputText = document.querySelector("input").value;
    var result = document.getElementsByClassName("result")[0];
    var newList = document.createElement("li");
    var newListContent = document.createTextNode(inputText);
    
    //append nodes
    newList.appendChild(newListContent);
    result.appendChild(newList);
    
}


