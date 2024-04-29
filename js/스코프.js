// 스코프 : 변수나 함수가 영향을 미치는 범위
// 전역 스코프 : 조심하자~!!!
// let a = 10;
function sum(x){
  console.log(`함수 내부 : ${x}`);
}
sum(100);
// console.log(`함수 외부 : ${a}`);


// 지역 스코프
function sum(){
  let a = 10;
  console.log(`함수 내부 : ${a}`);
}
sum();
// console.log(`함수 외부 : ${a}`);

//블록 스코프 : 자바 스크립트는 원래 함수 스코프를 따르는 언어였지만,
//ES6에서 블록 스코프를 지원하는 let, const가 추가됨.

let a = 10;
{
  //var이 밖으로 튀어 나간다.
    var b = 20;
    console.log(`코드 블록 내부 a : ${a}`);
    console.log(`코드 블록 내부 b : ${b}`);
}
console.log(`코드 블록 외부 a : ${a}`);
console.log(`코드 블록 외부 b : ${b}`);

//즉시 실행 함수 : 함수를 정의하자마자 바로 실행하는 함수
// 호출을 안해도 시작하자마자 바로 실행되도록 할때 사용가능.

(function() {
  width = 500;
  height = 300;
  console.log(`너비 : ${width}, 높이 : ${height}`);
  init();
})();// -> ()는 이 함수를 실행하라는 의미! : 함수 전체() 형태로 표현!

function init(){
  console.log("====================================");
  console.log("프로그램 실행을 위해 초기화 작업 수행중...");
  console.log("====================================");
}
