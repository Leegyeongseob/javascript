//비교 연산자
// 자동 형변환을 해서 비교를 한다.
if(12=='12') console.log("비교 결과가 같습니다.");
else console.log("비교 결과가 다릅니다.");

if(11==='12'-1) console.log("비교 결과가 같습니다.");
else console.log("비교 결과가 다릅니다.");

if(12 == '12' && typeof(12) == typeof('12')) console.log("비교 결과가 같습니다.");
else console.log("비교 결과가 다릅니다.");

//묵시적 형변환 : 숫자 + 문자열 = 문자열
//자바에서는 명시적 형변환을 하지 않으면 에러 발생함.
let num1 = 10 + "10";
console.log(num1);
console.log(typeof(num1));

//명시적 형변환 
let num2 = 10;
let num3 = "10";
console.log(num2+ Number(num3));