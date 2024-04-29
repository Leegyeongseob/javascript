// 클로저란? 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘
function Counter(){
  let count = 0;
  return {
    increment:function(){
      count++;
      console.log(count);
    },
    decrement:function(){
      count--;
      console.log(count);
    }
  };
}


const MyCounter = Counter();

MyCounter.increment();
MyCounter.increment();
MyCounter.decrement();

//'count'변수는 외부에서 직접 접근할 수 없습니다.
console.log(MyCounter.count);
