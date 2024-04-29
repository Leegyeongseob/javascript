//함수 선언문 : function 키워드로 선언하여 함수 이름을 가짐, 호이스팅에 영향을 받음
function Sum(p1,p2){
  let Sum = p1 + p2;
  return Sum;
}
let sum1 = Sum(21,24);
console.log(sum1);

// 익명 함수 : 함수 구현부에서 바로 값을 대입 받음. -> 함수명을 안쓰는 대신에 변수명이 대신하는 느낌. 함수의 주소값을 변수에 저장함.(const)
const sum = function(p1,p2){
  let Sum = p1 + p2;
  return Sum;
}
console.log(Sum(21,24));

const gogodan = function(x){
  for(let i=1; i<10;i++){
    console.log(`${x} * ${i} = ${x*i}\n`);
  }
};
gogodan(3);
//네이밍 함수 : 익명 함수 + 함수명. 함수명이 의미없음 -> 쓰지 말자.

//화살표 함수 : function을 생략하고 화살표로 표시

const gugudan2 = (x) =>{
  for (let i = 1 ;i < 10;i++){
    console.log(`${x} * ${i} = ${x*i}\n`);
  }
}
gugudan2(5);

//기본값 할당
function sum10(a = 10, b){
  console.log(a+b);
}
sum10(100);
