const create_pw_form = document.querySelector(".create_pw_form");

const create_pw = document.querySelector(".create_pw");
const create_pwChk = document.querySelector(".create_pwChk");

const USERNAME_KEY = "signup_username";
const EMAIL_KEY = "signup_email";
const PW_KEY = "signup_pw";
const PWCHK_KEY = "signup_pwChk";

console.log("hyi")

function createPw(e) {
  e.preventDefault();
  // 만약 현재 비밀번호 없고 다 없으면 생성
  const username = localStorage.getItem("username_inUse");
  const email = localStorage.getItem("email_inUse");
  const pw = create_pw.value;
  const pwChk = create_pwChk.value;

  const parsedUsername = JSON.parse(localStorage.getItem(USERNAME_KEY));
  const parsedEmail = JSON.parse(localStorage.getItem(EMAIL_KEY));
  const parsedPw = JSON.parse(localStorage.getItem(PW_KEY));
  const parsedPwChk = JSON.parse(localStorage.getItem(PWCHK_KEY));

  console.log("1번 들어옴")

  if (pw === "" && pwChk === "") {
    alert("값을 입력해주세요.")
  } else if (pw === pwChk && !parsedPw.includes(pw)) {
    console.log("2번 들어옴")
    parsedUsername.push(username);
    parsedEmail.push(email);
    parsedPw.push(pw);
    parsedPwChk.push(pwChk);

    localStorage.setItem(USERNAME_KEY, JSON.stringify(parsedUsername));
    localStorage.setItem(EMAIL_KEY, JSON.stringify(parsedEmail));
    localStorage.setItem(PW_KEY, JSON.stringify(parsedPw));
    localStorage.setItem(PWCHK_KEY, JSON.stringify(parsedPwChk));

    localStorage.removeItem("kakaoLogin");
    localStorage.removeItem("naverLogin");
    window.close();
  }
}

create_pw_form.addEventListener("submit", createPw)