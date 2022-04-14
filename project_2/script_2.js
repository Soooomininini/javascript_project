//button 변수 설정
var button = document.querySelector("button");
//counting : 추가한 expense 개수 세기 위한 전역변수 설정.
var counting = 0;
//table body : input의 각 값을 테이블의 한 row로 추가하기 위해 전역변수 설정.
var tbody = document.querySelector("tbody");

//버튼 이벤트리스너 설정
button.addEventListener("click", submitData);

//submitData 함수 : 테이블에 input값 입력하는 함수. 처음 입력 시작할때는 
//맨 처음 있는 기본 멘트를 지우고 새로 입력. 새로 입력할때마다 counting++
// 그 후에 counting이 1이상이 되었을 때는
//기존것을 지우지 않고 그 다음에 계속 입력.
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

//setTable 함수 : 
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


