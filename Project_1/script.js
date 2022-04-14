//button 변수 설정 : typing element중 첫번째것의 button typing을 선택
var textButton = document.getElementsByClassName("typing")[0].querySelector("button");
//버튼에 이벤트리스너 붙이기
textButton.addEventListener("click", write);

//write 함수 : 버튼 클릭할때마다 input에 입력한 값을 하단에 입력함.
function write(){
    //inputText : input 의 값. typing 원소 중 selector가 input 인 것의 값을 지정.
    var inputText = document.getElementsByClassName("typing")[0].querySelector("input").value;
    // result 변수 설정 : result 원소 중 첫번째 -> 개선가능.
    var result = document.getElementsByClassName("result")[0];
    // list 변수 설정 : li 원소를 새로 만듦
    var list = document.createElement("li");
    // listText 변수 설정 : li 원소에 들어갈 textnode인데, 그 값은 위에서 설정한 inputText로 함.
    var listText = document.createTextNode(inputText);

    //dom tree 특성 상, 텍스트노드를 먼저 li 원소에 붙이고
    list.appendChild(listText);
    //li 요소를 result div에 붙이면 입력창 하단에 나타남
    result.appendChild(list);
}