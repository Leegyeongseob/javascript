//자바스크립트에서는 원시타입을 제외한 모든 값을 참조 타입
//객체는 중괄호를 사용해서 만드며, 속성(property)과 값(value)의 쌍으로 구성
const person= {
  name : "설윤",
  age : 21,
  addr : "서울시 강남구 청담동",
  group : "엔믹스",
  desc:function(){
    return this.group+"는 여성 5인조 걸그룹입니다.";
  }
};
console.log(person["name"]);
console.log(person["age"]);
console.log(person["addr"]);
console.log(person["group"]);
console.log(person.desc());

//객체 생성
function Person(name,age){
  this.name = name;
  this.age = age;
  this.sayHello = function(){
    console.log(`Hello,my name is ${this.name}, age is ${this.age}`);
  };
}
let person1 = new Person("안유진", 21);
let person2 = new Person("장원영", 26);

person1.sayHello();
person2.sayHello();


