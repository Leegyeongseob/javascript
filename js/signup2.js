const store = [];
const btns = document.querySelectorAll(".btn > button");
const inputs = document.querySelectorAll("input");
const ps = document.querySelectorAll(".btn > p");
const signupBtn = document.querySelector("#mainbtn > button");
const regexps = [/^\w{8,20}$/, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/, /^\d{2,3}-\d{3,4}-\d{4}$/];
const errors = ["아이디", "패스워드", "이메일", "전화번호"];

btns.forEach((btn, i) => btn.addEventListener("click", () => {
  if (!regexps[i].test(inputs[i].value)) {
    ps[i].textContent = `${errors[i]} 잘못 입력했습니다.`;
    return;
  }
  store[i] = inputs[i].value;
  checkInputs();
}));

signupBtn.addEventListener("click", () => {
  alert(store.length === 4 ? "회원가입이 완료되었습니다." : "입력하지 않은 정보가 있습니다.");
});

const checkInputs = () => {
  signupBtn.disabled = store.length !== 4;
};
