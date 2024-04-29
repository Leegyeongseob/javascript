// ES5 : 2009년에 발표된 버젼, 주로 바닐라 자바스크립트(Third-party library를 사용하지 않고 순수 자바 문법만 사용)에서 언급되는 버젼
// Json(JavaScript Object Notation) 객체 : 서버와 프론트엔드간에 
let data = '{"name":"John","age":"30"}';
let obj = JSON.parse(data);
console.log(obj.name); // "John"
console.log("=================================");
console.log(JSON.stringify(obj));
console.log("=================================");
// Array 메소드
const numbers = [1,2,3,4,5,6,7,8,9,10];
// 배열의 요소를 순회 할 때 사용, 배열의 내용을 변경 할 수 없음. 무조건 전체 순회
numbers.forEach(e => console.log(e));
console.log("=================================");
// map() : 배열의 모든 요소를 순회 하면서 새로운 배열을 만듬.
const squares = numbers.map(e => e *e );
console.log(squares);
console.log("=================================");
// filter(): 배열의 요소 중 조건을 만족하는 요소만 추출하여 새로운 배열을 생성
const even = numbers.filter(e => e % 2 == 0);
console.log(even);
console.log("=================================");
//reduce() : 배열의 모든 요소를 순회하여, 대입되는 값을 소모하면서 누적 해 나가는 것
const sum = numbers.reduce((e1,e2) => e1+e2,0);// 초기값은 0을 의미, 누적합(피보나치 수열)
console.log(sum);

