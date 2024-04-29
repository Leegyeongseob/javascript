// 표준내장객체란? 자바스크립트에서 개발의 편의를 위해 미리 제공하는 API
// 문자열을 다루는 String 객체
const pw= "12345678";
if(pw.length <8) console.log("비밀번호는 최소 8자리이상이어야 합니다.");
// 특정 문자열 포함 여부 확인 : 포함되어 있으면 true
const email = "test@naver.com"
if(!email.includes("@")) console.log("올바른 이메일 형식이 아닙니다.");
if(email.indexOf("@") == -1) console.log("올바른 이메일 형식이 아닙니다.");
//slice() : 시작위치와 종료 위치를 주면 해당 문자열을 잘라서 반환
let str = "Apple, Banana, Kiwi";
let response = str.slice(7,13); // 인덱스 슬라이싱
console.log(response);
// substring() : slice()함수와 동일하며, 단 매개변수에 음수를 허용하지 않음
let resp1 = str.substring(7); // 매개변수를 한개만 넣으면 시작 인덱스부터 끝까지
console.log(resp1);
// replace() : 문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수
let str1 = "지구오락실, 이영지, 안유진, 미미, 이은지";
let resp2 = str1.replace("이은지","나영석");
console.log(resp2);
// replaceAll() : 대상 문자열 내의 모든 문자열을 지정한 문자열로 바꾸는 함수
let resp3 = str1.replaceAll("이","김");
console.log(resp3);
// concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수
// 불변성의 원칙!
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ",text2);
console.log(text3);

let text4 = "Hello";
text4 += " " + "World";
console.log(text4);

// Number 객체 : 숫자와 관련된 작업을 할 때 사용되는 메소드
console.log(Number.parseFloat("12"));
console.log(Number.parseFloat("12.34"));
// 숫자로 변환 불가능한 문자열은 자동으로 버린다.
console.log(Number.parseFloat("12.34곰돌이사육사"));
console.log(Number.parseFloat("곰돌이사육사"));

console.log(Number.parseInt("12"));
console.log(Number.parseInt("12.34"));
console.log(Number.parseInt("12.34곰돌이사육사"));
console.log(Number.parseInt("곰돌이사육사"));


// Array 객체 : 배열에서 사용할 수 있는 많은 속성과 메소드가 정의되어 있지 않음.
// 비파괴적인 메소드 : forEach()
const arr  = [10,20,30,40,50,60];
arr.forEach(e => {
  console.log(e + e);
});

const resp = arr.map((e)=> console.log(e*e));

//toString() : 배열 안의 모든 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

//join() : 배열안의 모든 문자를 매개변수로 지정한 문자를 이용해 결합
console.log(fruits.join(" * "));

//파괴적 메소드
//pop() : 스택 자료 구조로 마지막 데이터를 제거하고 결과를 반환
console.log(fruits.pop());
console.log(fruits);

//push() : 스택 자료 구조로 새로운 요소를 추가
fruits.push("Kiwi");
console.log(fruits);
//shift() : 배열의 첫번째 요소를 제거하고 결과를 반환
fruits.shift()
console.log(fruits);

fruits[0] = "strawberry";
console.log(fruits);

//concat()
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);


//slice()
let fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits1.slice(3); // [Apple, Mango]
let citrus2 = fruits1.slice(1,3); // [Orange, Lemon]
console.log(citrus2);

//sort()
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort(); 
console.log(fruits2);
fruits2.reverse();
console.log(fruits2);