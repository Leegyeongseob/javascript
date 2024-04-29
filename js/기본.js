//자바스크립트는 데이터 타입을 지정하지 않고 값이 대입될 때 형이 결정되는 동적 타입의 언어
// 변수의 상수를 결정하는 형은 var,const,let이 있음
// 변수는 값을 여러번 대입 할 수 있음 : let, var 있음.


let x = 10;
x = 20;
console.log("x의 값은 : ",x);
//ES6가 나오기 이전부터 사용되던 변수
var y = 20;
y = 30;
console.log("y의 값은 : ",y);
//호이스팅(var는 해석의 편의성을 위해 스스로 var z선언을 위로 올려버림. -> 에러가 없이 undefined 상태)
console.log("z의 값은 : ",z);
var z = 30;
// 중복선언도 var는 그냥 동작해버림...
var a = 20;
var a = 40;
console.log("a의 값은 : ",a);
//const는 값을 변경할 수 없음.(불변성의 원칙)
let b = 20;
console.log("b의 값은 :", b);
const c = 30;
c = 40; 