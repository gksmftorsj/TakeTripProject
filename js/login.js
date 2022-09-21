// 로그인 회원가입 css 설정
const $login = document.querySelector(".login"); // 로그인 전체화면
const $loginScreen = document.querySelector(".login-screen"); // 로그인 스크린
const $loginBg = document.querySelector(".login-bg"); // 로그인 배경화면
const $login_signupBtn = document.querySelector(".signup-screen-btn"); // 로그인 창에서 회원가입 버튼

const $signup = document.querySelector(".signup"); // 회원가입 전체화면
const $signupScreen = document.querySelector(".signup-screen"); // 회원가입 스크린
const $signupBg = document.querySelector(".signup-bg"); // 회원가입 배경화면
const $signup_signupBtn = document.querySelector(".signup-btn"); // 회원가입에서 회원가입 버튼
const $signup_loginBtn = document.querySelector(".login-screen-btn"); // 회원가입에서 로그인 버튼

const HIDDEN_LOGINFORM = "hidden-login-form"; // 로그인 스크린 숨기기
const HIDDEN_LOGINBG = "hidden-login-bg"; // 로그인 배경화면 숨기기
const SHOW_LOGINFORM = "show-login-form"; // 로그인 스크린 나타나기
const SHOW_LOGINBG = "show-login-bg"; // 로그인 배경화면 나타나기
const SHOW_LOGIN = "show-login"; // 로그인 전체화면 투명도 주기
const LOGIN_ABSOLUTTE = "login-absolute"; // 로그인 전체화면 absolute class

const HIDDEN_SIGNUPFORM = "hidden-signup-form"; // 회원가입 스크린 숨기기
const HIDDEN_SIGNUPBG = "hidden-signup-bg"; // 회원가입 배경화면 숨기기
const SHOW_SIGNUPFORM = "show-signup-form"; // 회원가입 스크린 나타나기
const SHOW_SIGNUPBG = "show-signup-bg"; // 회원가입 배경화면 나타나기
const HIDDEN_SIGNUP = "hidden-signup"; // 회원가입 전체화면 display none 주기
const SHOW_SIGNUP = "show-signup"; // 회원가입 전체화면 투명도 주기
const SIGNUP_ABSOLUTE = "signup-absolute"; // 회원가입 전체화면 absolute 주기

function loginToSignup() {
  // 로그인 창에서 회원가입으로 넘어가는 css
  $loginScreen.classList.add(HIDDEN_LOGINFORM); // (로그인 스크린 숨기기) 추가
  $loginBg.classList.add(HIDDEN_LOGINBG); // (로그인 배경화면 숨기기) 추가
  $signupScreen.classList.remove(HIDDEN_SIGNUPFORM); // (회원가입 스크린 숨기기) 제거
  $signupBg.classList.remove(HIDDEN_SIGNUPBG); // (회원가입 배경화면 숨기기) 제거
  $login.classList.remove(LOGIN_ABSOLUTTE); // 로그인 전체화면 classList에서 absolute 제거
  $signup.classList.add(SIGNUP_ABSOLUTE); // (회원가입 전체화면 abosolute 주기) 추가
  $signup.classList.remove(HIDDEN_SIGNUP); // (회원가입 전체화면 display none 주기) 제거
  $signup.classList.add(SHOW_SIGNUP); // (회원가입 전체화면 투명도 주기) 추가
  $signupScreen.classList.add(SHOW_SIGNUPFORM); // (회원가입 스크린 나타나기) 추가
  $signupBg.classList.add(SHOW_SIGNUPBG); // (회원가입 배경화면 나타나기) 추가
  $loginScreen.classList.remove(SHOW_LOGINFORM); // (로그인 스크린 나타나기) 제거
  $loginBg.classList.remove(SHOW_LOGINBG); // (로그인 배경화면 나타나기) 제거
  $login.classList.remove(SHOW_LOGIN); // (로그인 전체화면 투명도 주기) 제거
  // => 제거를 하지 않으면 투명도가 1이기 떄문에 signup => login 넘어올 때 회원가입 전체화면가 보이지 않음
  $loginEmail.value = ""; // 로그인 창에서 회원가입 창으로 넘어갈 시 빈 값으로 초기화
  $loginPw.value = "";
}

$login_signupBtn.addEventListener("click", loginToSignup); // 로그인 창에서 회원가입 클릭

function signupToLogin() {
  // 회원가입 창에서 로그인으로 넘어가는 css
  $signupScreen.classList.add(HIDDEN_SIGNUPFORM); // (회원가입 스크린 숨기기) 추가
  $signupBg.classList.add(HIDDEN_SIGNUPBG); // (회원가입 배경화면 숨기기) 추가
  $loginScreen.classList.remove(HIDDEN_LOGINFORM); // (로그인 스크린 숨기기) 제거
  $loginBg.classList.remove(HIDDEN_LOGINBG); // (로그인 배경화면 숨기기) 제거
  $login.classList.add(LOGIN_ABSOLUTTE); // 로그인 전체화면 classList에서 absolute 추가
  $signup.classList.remove(SIGNUP_ABSOLUTE); // (회원가입 전체화면 absolute 주기) 제거
  $login.classList.add(SHOW_LOGIN); // (로그인 전체화면 투명도 주기) 추가
  $loginScreen.classList.add(SHOW_LOGINFORM); // (로그인 스크린 나타나기) 추가
  $loginBg.classList.add(SHOW_LOGINBG); // (로그인 배경화면 나타나기) 추가
  $signupScreen.classList.remove(SHOW_SIGNUPFORM); // (회원가입 스크린 나타나기) 제거
  $signupBg.classList.remove(SHOW_SIGNUPBG); // (회원가입 배경화면 나타나기) 제거
  $signup.classList.remove(SHOW_SIGNUP); // (회원가입 전체화면 투명도 주기) 제거
  // => 제거를 하지 않으면 투명도가 1이기 떄문에 login => signup 넘어올 때 로그인 전체화면이 보이지 않음
  $signupUsername.value = ""; // 회원가입 창에서 로그인 창으로 넘어갈 시 빈 값으로 초기화
  $signupEmail.value = "";
  $signupPw.value = "";
  $signupPwChk.value = "";
}

$signup_loginBtn.addEventListener("click", signupToLogin); // 회원가입 창에서 로그인 클릭

// 회원가입 로그인 기능 설정
const $signupForm = document.querySelector("#signup-form"); // 회원가입 폼
const $signupUsername = document.querySelector("#signup-username"); // 회원가입 사용자 이름
const $signupEmail = document.querySelector("#signup-email"); // 회원가입 이메일
const $signupPw = document.querySelector("#signup-pw"); // 회원가입 비밀번호
const $signupPwChk = document.querySelector("#signup-pwChk"); // 회원가입 비밀번호 확인

const $loginForm = document.querySelector("#login-form"); // 로그인 폼
const $loginEmail = document.querySelector("#login-email"); // 로그인 이메일
const $loginPw = document.querySelector("#login-pw"); // 로그인 비밀번호

// localStorage KEY 이름
const GENERAL_USERNAME_KEY = "general_username";
const GENERAL_EMAIL_KEY = "general_email";
const GENERAL_PW_KEY = "general_pw";
const GENERAL_PWCHK_KEY = "general_pwChk";

// 회원가입 완료 시 팝업창
let signup_completePopup;
function openPopup() {
  let width = "500";
  let height = "500";
  let left = Math.ceil((window.screen.width - width) / 2); // ceil=올림
  let top = Math.ceil((window.screen.height - height) / 2);
  signup_completePopup = window.open(
    "../html/signup-complete.html",
    "회원가입완료 팝업",
    `width=${ width }, height=${ height }, left=${ left }, top=${ top }`
  ); // 팝업창 가운데 정렬
}

// function closePopup() {
//   signup_completePopup.close();
// }

let username = [];
let email = [];
let pw = [];
let pwChk = [];

function handleSignupBtn(event) {
  event.preventDefault();
  const general_username = $signupUsername.value; // 회원가입 사용자 이름 입력 값 username에 저장
  const general_email = $signupEmail.value; // 회원가입 이메일 입력 값 email에 저장
  const general_pw = $signupPw.value; // 회원가입 비밀번호 입력 값 pw에 저장
  const general_pwChk = $signupPwChk.value; // 회원가입 비밀번호 확인 입력 값 pwChk에 저장
  if (
    general_username === "" ||
    general_email === "" ||
    general_pw === "" ||
    general_pwChk === ""
  ) {
    alert("값을 입력해주세요."); // 빈칸이 있으면 경고창
  } else if (general_pw !== general_pwChk) {
    alert("비밀번호를 확인해주세요."); // 비밀번호와 비밀번호 확인이 다르면 경고창
  } else {
    signupToLogin(); // 빈칸도 없고 비밀번호도 맞으면 로그인 창으로 넘어가기
    openPopup(); // 회원가입 완료 팝업창 띄우기
    // setTimeout(function () {
    //   closePopup();
    // }, 1100);
    const newUsername = { general_username };
    username.push(newUsername);
    localStorage.setItem("username", JSON.stringify(username));

    const newEmail = { general_email };
    email.push(newEmail);
    localStorage.setItem("email", JSON.stringify(email));

    const newPw = { general_pw };
    pw.push(newPw);
    localStorage.setItem("pw", JSON.stringify(pw));

    const newPwChk = { general_pwChk };
    pwChk.push(newPwChk);
    localStorage.setItem("pwChk", JSON.stringify(pwChk));

    $signupUsername.value = ""; // 회원가입 완료 후 입력창 빈 값으로 초기화
    $signupEmail.value = "";
    $signupPw.value = "";
    $signupPwChk.value = "";
  }
}

const savedUsername = localStorage.getItem("username");
const savedEmail = localStorage.getItem("email");
const savedPw = localStorage.getItem("pw");
const savedPwChk = localStorage.getItem("pwChk");

// if (savedUsername !== null) {
//   const parsedUsername = JSON.parse(savedUsername);
//   username = parsedUsername;
//   const parsedEmail = JSON.parse(savedEmail);
//   email = parsedEmail;
//   const parsedPw = JSON.parse(savedPw);
//   pw = parsedPw;
//   const parsedPwChk = JSON.parse(savedPwChk);
//   pwChk = parsedPwChk;
// }

// form Element에 submit 해야 돼!!!!!!!! input type="submit" Element에 submit 하지 말고!!!!!!!!
$signupForm.addEventListener("submit", handleSignupBtn); // 회원가입 버튼 클릭

function handleLoginBtn(event) {
  event.preventDefault();
  const email_validation = JSON.parse(savedEmail);
  const pw_validation = JSON.parse(savedPw);
  const username_validation = JSON.parse(savedUsername);
  for (let i = 0; i < email_validation.length; i++) {
    if (
      email_validation[i].general_email === $loginEmail.value &&
      pw_validation[i].general_pw === $loginPw.value
    ) {
      // 이메일 비밀번호 둘 다 같으면 로그인 성공 => 메인페이지로 넘어가기
      localStorage.setItem("index", i);
      window.location.href = "../index.html";
      $loginEmail.value = ""; // 로그인 완료 후 입력창 빈 값으로 초기화
      $loginPw.value = "";
      localStorage.setItem(
        "info_username",
        username_validation[i].general_username
      );
      localStorage.setItem("info_email", email_validation[i].general_email);
    }
  }
  if (localStorage.getItem("index") === null) {
    alert("이메일과 비밀번호를 다시 확인해주세요.");
  }
}

// form Element에 submit 해야 돼!!!!!!!! input type="submit" Element에 submit 하지 말고!!!!!!!!
$loginForm.addEventListener("submit", handleLoginBtn); // 로그인 버튼 클릭
