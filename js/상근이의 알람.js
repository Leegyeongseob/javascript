let time = prompt("시간 입력 : ");
time_store = time.split(":");
console.log(time_store[0] + "<br>" + time_store[1]);
let hour = Number(time_store[0]);
let min = Number(time_store[1]);
let calc = (hour * 60) + min;
if (calc < 45) calc = (24 * 60) + calc;
calc -= 45;
document.write("<h2>" + `${parseInt(calc / 60)}시 ${calc % 60}분` + "</h2>");