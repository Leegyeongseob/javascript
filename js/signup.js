const store = [];
const idBtn = document.querySelector(".btn1 > button");
const idInput = document.querySelector(".btn1 > input");
const regexp_id = /^\w{8,20}$/;
idBtn.addEventListener("click", () => {
  const text = document.querySelector(".btn1 > p");
  if (!regexp_id.test(idInput.value)) {
    text.textContent = "아이디를 잘못 입력했습니다.";
    return;
  }
  else{
  store[0] = idInput.value;
  checkInputs();
  }
  
});

const pwdBtn = document.querySelector(".btn2 > button");
const pwdInput = document.querySelector(".btn2 > input");
const regexp_pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
pwdBtn.addEventListener("click", () => {
  const text = document.querySelector(".btn2 > p");
  if (!regexp_pwd.test(pwdInput.value)) {
    text.textContent = "패스워드를 잘못 입력했습니다.";
    return;
  }
  else{
    store[1] = pwdInput.value;
    checkInputs();
  }
  
});

const emailBtn = document.querySelector(".btn3 > button");
const emailInput = document.querySelector(".btn3 > input");
const regexp_email = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
emailBtn.addEventListener("click", () => {
  const text = document.querySelector(".btn3 > p");
  if (!regexp_email.test(emailInput.value)) {
    text.textContent = "이메일을 잘못 입력했습니다.";
    return;
  }
  else{
    store[2] = emailInput.value;
    checkInputs();
  }
  
});

const telBtn = document.querySelector(".btn4 > button");
const telInput = document.querySelector(".btn4 > input");
const regexp_tel = /^\d{2,3}-\d{3,4}-\d{4}$/;
telBtn.addEventListener("click", () => {
  const text = document.querySelector(".btn4 > p");
  if (!regexp_tel.test(telInput.value)) {
    text.textContent = "전화번호를 잘못 입력했습니다.";
    return;
  }
  else{
    store[3] = telInput.value;
    checkInputs();
  }
  
});

const signupBtn = document.querySelector("#mainbtn > button");
signupBtn.addEventListener("click", function () {
  if (store.length === 4) {
    alert("회원가입이 완료되었습니다.");
  } else {
    alert("입력하지 않은 정보가 있습니다.");
  }
});

function checkInputs() {
  const signupBtn = document.querySelector("#mainbtn > button");
  if (store.length === 4) {
    signupBtn.disabled = false;
  } else {
    signupBtn.disabled = true;
  }
};