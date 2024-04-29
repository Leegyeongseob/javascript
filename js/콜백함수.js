// 콜백 함수란? 함수의 인자로 다른 함수를 전달하여 그 함수가 실행될 때 호출하는 함수
// 이벤트가 언제 발생하는지 모르게 때문에 필요하다!!!
// 1. 이벤트 감지(EVENT LEASENER) -> 2. 기능 수행(기능을 수행하는 함수를 작성해서 구현) : 콜백함수!
// 콜백함수는 주로 비동기적인 작업을 처리할 떄 많이 사용
// 비동기 : 누군가에게 일을 시켜놓고 다른 일을 하는 것  -> 콜백 함수 필요(끝나면 콜백!)
// 주로 사용 서버로부터 데이터를 가져오는 작업이 완료 될 때 콜백 함수를 호출
//  1. 사용자의 이벤트 처리
//  2. 네트워크 응답처리
//  3. 파일을 읽고 쓰는 동작
//  4. 의도적으로 시간 지연이 필요한 기능
function cry(){
  console.log("cry");
}
function sing(){
  console.log("sing");
}
function dance(){
  console.log("dance");
}

// function checkMood(mood){
//   if (mood == "good") sing();
//   else if(mood =="not bad") dance();
//   else cry();
// }
// checkMood("good");

function checkMoodcallback(mood,goodCall,badCall,notBadCall){
    if (mood == "good") goodCall();
    else if(mood =="not bad") notBadCall();
    else badCall();
}
checkMoodcallback("good",sing,cry,dance);
