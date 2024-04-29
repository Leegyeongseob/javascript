// Date 객체에는 날짜 및 시간과 관련 있는 메서드가 정의되어 있음
var _gmt = new Date();
const date = new Date(_gmt.getTime() + (_gmt.getTimezoneOffset() * 60000));
console.log(date);

//달은 배열 인덱스가 됨.
const date1 = new Date(2024,4,1,12,0,0);
console.log(date1);

//원하는대로 넣기위한 방법
const date2 = new Date("2024/4/24/11:27:00");
console.log(date2);