let cost = prompt("3개의 햄버거와 2개의 음료수 가격을 입력하세요(원) : ").split(" ");
let MinBugger = Math.min(cost[0],cost[1],cost[2]);
let MinBeverage = Math.min(cost[3],cost[4])
document.write(`가장 저렴한 햄버거 가격은 ${MinBugger}원 가장 저렴한 음료 가격은 ${MinBeverage}원 입니다.`)
document.write("따라서 세트 가격은 " + (MinBugger + MinBeverage - 50) + "원 입니다.");