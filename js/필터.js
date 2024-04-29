const persons = [
  {
    name: "유재석",
    point: 78,
    city : "서울",
  },
  {
    name: "김종국",
    point: 92,
    city : "서울",
  },
  {
    name : "양세찬",
    point : 76,
    city : "제주",
  },
  {
    name : "하하",
    point: 81,
    city : "서울"
  },
];

// 배열을 필터링해서 조건에 맞는 결과 제시
let pass = persons.filter(function(person){return person.point > 80});
console.log(pass);2

const num = [1,2,3,4,5];
const squareNum = num.map(function(e){return e*e;});
console.log(squareNum);