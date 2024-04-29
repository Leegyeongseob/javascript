
const getDateDiff = () => {
  const date = new Date();
  const date2 = new Date("2024/08/30/09:00:00");
  const diffDate = date2.getTime() - date.getTime();
  return Math.round(parseInt(diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
};
console.log(getDateDiff());
document.getElementById('result').innerHTML = getDateDiff();
