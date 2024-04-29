//ES6 : 2015년에 발표
// 가변변수(let)와 불변변수(const) : 블록 scope <-> var : 함수 scope, 호이스팅 문제
// 재할당하지 않기!(불변성의 원칙 : ES6의 문법은 아니지만 리엑트의 핵심 철학)
const arr1 = [1,2,3];
const arr2 = arr1.concat(4);
console.log(arr2);
console.log("=================================");
// 화살표 함수 추가 : 간결한 코드 작성 시 유리
const add = function(x,y){
  return x+y;
}
const add2 = (x,y) => x + y;
// 템플릿 리터럴 : 백틱(``)으로 문자열에 변수를 포함시킬 수 있음.

// 전개 연산자 : 배열이나 객체를 개별 요소로 분리 해줌
const arr3 = [1,2,3];
const arr4 = [4,5,6];
const arr5 = arr3.concat(arr4);
console.log(arr5);
console.log("=================================");
// ... : 각각의 요소를 펼쳐서 넣어라!
const arr6 =[...arr3,...arr4];
console.log(arr6);
console.log("=================================");
// 객체에서의 전개연산자
const obj1 = {x:1,y:2};
const obj2 = {z:3,w:4};
const obj3 = {...obj1,...obj2};
//소수의 값만 변경
const obj4 = {...obj3, w: 100};
console.log(obj3);
console.log("=================================");
console.log(obj4);
// 객체에서의 전개연산자
const member = {
  name : "곰돌이사육사",
  age : 20,
  addr : "서울시 강남구 역삼동",
};

const member2 ={...member,addr:"경기도 수원시 권선구"};
console.log("=================================");
console.log(member2);
