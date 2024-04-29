function newRegister(){
  let newItem = document.createAttribute("li");
  let subject = document.querySelector("#subject");
  //input 태그의 입력받은 값이 subject.value;
  newItem.innerHTML = subject.value;
  
  //추가
  let itemList = document.querySelector("#itemList");
  //자식노드의 __의 앞에 넣음.
  itemList.insertBefore(newItem,itemList.childNodes[0]);

  //입력창 초기화
  subject.value = " ";
  //삭제를 위해
  let items = document.querySelectorAll("li");
  //삭제할 아이템을 찾아서 삭제하기
  for(let i = 0;i<items.length;i++){
    items[i].addEventListener("click", function(){
      if(this.parentNode){
        this.parentNode.removeChild(this);
      }
    })
  }



}