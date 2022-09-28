// 로그인 회원가입 css 설정
const login = document.querySelector(".login"); // 로그인 전체화면
const loginScreen = document.querySelector(".login_screen"); // 로그인 스크린
const loginBg = document.querySelector(".login_bg"); // 로그인 배경화면
const login_signupBtn = document.querySelector(".signup_screen_btn"); // 로그인 창에서 회원가입 버튼

const signup = document.querySelector(".signup"); // 회원가입 전체화면
const signupScreen = document.querySelector(".signup_screen"); // 회원가입 스크린
const signupBg = document.querySelector(".signup_bg"); // 회원가입 배경화면
const signup_signupBtn = document.querySelector(".signup_btn"); // 회원가입에서 회원가입 버튼
const signup_loginBtn = document.querySelector(".login_screen_btn"); // 회원가입에서 로그인 버튼

const HIDDEN_LOGINFORM = "hidden_login_form"; // 로그인 스크린 숨기기
const HIDDEN_LOGINBG = "hidden_login_bg"; // 로그인 배경화면 숨기기
const SHOW_LOGINFORM = "show_login_form"; // 로그인 스크린 나타나기
const SHOW_LOGINBG = "show_login_bg"; // 로그인 배경화면 나타나기
const SHOW_LOGIN = "show_login"; // 로그인 전체화면 투명도 주기
const LOGIN_ABSOLUTTE = "login_absolute"; // 로그인 전체화면 absolute class

const HIDDEN_SIGNUPFORM = "hidden_signup_form"; // 회원가입 스크린 숨기기
const HIDDEN_SIGNUPBG = "hidden_signup_bg"; // 회원가입 배경화면 숨기기
const SHOW_SIGNUPFORM = "show_signup_form"; // 회원가입 스크린 나타나기
const SHOW_SIGNUPBG = "show_signup_bg"; // 회원가입 배경화면 나타나기
const HIDDEN_SIGNUP = "hidden_signup"; // 회원가입 전체화면 display none 주기
const SHOW_SIGNUP = "show_signup"; // 회원가입 전체화면 투명도 주기
const SIGNUP_ABSOLUTE = "signup_absolute"; // 회원가입 전체화면 absolute 주기

function loginToSignup() {
  // 로그인 창에서 회원가입으로 넘어가는 css
  loginScreen.classList.add(HIDDEN_LOGINFORM); // (로그인 스크린 숨기기) 추가
  loginBg.classList.add(HIDDEN_LOGINBG); // (로그인 배경화면 숨기기) 추가
  signupScreen.classList.remove(HIDDEN_SIGNUPFORM); // (회원가입 스크린 숨기기) 제거
  signupBg.classList.remove(HIDDEN_SIGNUPBG); // (회원가입 배경화면 숨기기) 제거
  login.classList.remove(LOGIN_ABSOLUTTE); // 로그인 전체화면 classList에서 absolute 제거
  signup.classList.add(SIGNUP_ABSOLUTE); // (회원가입 전체화면 abosolute 주기) 추가
  signup.classList.remove(HIDDEN_SIGNUP); // (회원가입 전체화면 display none 주기) 제거
  signup.classList.add(SHOW_SIGNUP); // (회원가입 전체화면 투명도 주기) 추가
  signupScreen.classList.add(SHOW_SIGNUPFORM); // (회원가입 스크린 나타나기) 추가
  signupBg.classList.add(SHOW_SIGNUPBG); // (회원가입 배경화면 나타나기) 추가
  loginScreen.classList.remove(SHOW_LOGINFORM); // (로그인 스크린 나타나기) 제거
  loginBg.classList.remove(SHOW_LOGINBG); // (로그인 배경화면 나타나기) 제거
  login.classList.remove(SHOW_LOGIN); // (로그인 전체화면 투명도 주기) 제거
  // => 제거를 하지 않으면 투명도가 1이기 떄문에 signup => login 넘어올 때 회원가입 전체화면가 보이지 않음
  loginEmail.value = ""; // 로그인 창에서 회원가입 창으로 넘어갈 시 빈 값으로 초기화
  loginPw.value = "";
}

login_signupBtn.addEventListener("click", loginToSignup); // 로그인 창에서 회원가입 클릭

function signupToLogin() {
  // 회원가입 창에서 로그인으로 넘어가는 css
  signupScreen.classList.add(HIDDEN_SIGNUPFORM); // (회원가입 스크린 숨기기) 추가
  signupBg.classList.add(HIDDEN_SIGNUPBG); // (회원가입 배경화면 숨기기) 추가
  loginScreen.classList.remove(HIDDEN_LOGINFORM); // (로그인 스크린 숨기기) 제거
  loginBg.classList.remove(HIDDEN_LOGINBG); // (로그인 배경화면 숨기기) 제거
  login.classList.add(LOGIN_ABSOLUTTE); // 로그인 전체화면 classList에서 absolute 추가
  signup.classList.remove(SIGNUP_ABSOLUTE); // (회원가입 전체화면 absolute 주기) 제거
  login.classList.add(SHOW_LOGIN); // (로그인 전체화면 투명도 주기) 추가
  loginScreen.classList.add(SHOW_LOGINFORM); // (로그인 스크린 나타나기) 추가
  loginBg.classList.add(SHOW_LOGINBG); // (로그인 배경화면 나타나기) 추가
  signupScreen.classList.remove(SHOW_SIGNUPFORM); // (회원가입 스크린 나타나기) 제거
  signupBg.classList.remove(SHOW_SIGNUPBG); // (회원가입 배경화면 나타나기) 제거
  signup.classList.remove(SHOW_SIGNUP); // (회원가입 전체화면 투명도 주기) 제거
  // => 제거를 하지 않으면 투명도가 1이기 떄문에 login => signup 넘어올 때 로그인 전체화면이 보이지 않음
  signupUsername.value = ""; // 회원가입 창에서 로그인 창으로 넘어갈 시 빈 값으로 초기화
  signupEmail.value = "";
  signupPw.value = "";
  signupPwChk.value = "";
}

signup_loginBtn.addEventListener("click", signupToLogin); // 회원가입 창에서 로그인 클릭

//--------------------------------------------------------------------------------------

// 회원가입 기능 설정
const signupForm = document.querySelector("#signup_form"); // 회원가입 폼
const signupUsername = document.querySelector("#signup_username"); // 회원가입 사용자 이름
const signupEmail = document.querySelector("#signup_email"); // 회원가입 이메일
const signupPw = document.querySelector("#signup_pw"); // 회원가입 비밀번호
const signupPwChk = document.querySelector("#signup_pwChk"); // 회원가입 비밀번호 확인

const loginForm = document.querySelector("#login_form"); // 로그인 폼
const loginEmail = document.querySelector("#login_email"); // 로그인 이메일
const loginPw = document.querySelector("#login_pw"); // 로그인 비밀번호

// 회원가입 완료 시 팝업창
function openPopup() {
  let width = "500";
  let height = "500";
  let left = Math.ceil((window.screen.width - width) / 2); // ceil=올림
  let top = Math.ceil((window.screen.height - height) / 2);
  window.open(
    "../html/signup-complete.html",
    "회원가입완료 팝업",
    `width=${ width }, height=${ height }, left=${ left }, top=${ top }`
  ); // 팝업창 가운데 정렬
}

const USERNAME_KEY = "signup_username";
const EMAIL_KEY = "signup_email";
const PW_KEY = "signup_pw";
const PWCHK_KEY = "signup_pwChk";

let username = [];
let email = [];
let pw = [];
let pwChk = [];

function handleSignupBtn(event) {
  event.preventDefault();
  // 회원가입 입력값 저장
  const usernameValue = signupUsername.value;
  const emailValue = signupEmail.value;
  const pwValue = signupPw.value;
  const pwChkValue = signupPwChk.value;
  if (
    usernameValue === "" ||
    emailValue === "" ||
    pwValue === "" ||
    pwChkValue === ""
  ) {
    alert("값을 입력해주세요."); // 빈칸이 있으면 경고창
  } else if (pwValue !== pwChkValue) {
    alert("비밀번호를 확인해주세요."); // 비밀번호와 비밀번호 확인이 다르면 경고창
  } else {
    const parsedUsername = JSON.parse(localStorage.getItem(USERNAME_KEY));
    const parsedEmail = JSON.parse(localStorage.getItem(EMAIL_KEY));
    const parsedPw = JSON.parse(localStorage.getItem(PW_KEY));
    if (parsedUsername !== null) {
      for (i = 0; i < parsedUsername.length; i++) {
        if (parsedUsername[i] === signupUsername.value) {
          alert("이미 존재하는 사용자이름입니다. 다른 이름을 사용해주세요.");
          return;
        } else if (parsedEmail[i] === signupEmail.value) {
          alert("이미 존재하는 이메일입니다. 다른 이메일을 사용해주세요.");
          return;
        } else if (signupPw.value === signupPwChk.value && parsedPw[i] === signupPw.value) {
          alert("이미 존재하는 비밀번호입니다. 다른 비밀번호를 사용해주세요.")
          return;
        }
      }
    }
    // 배열에 회원가입 입력값 push
    username.push(usernameValue);
    email.push(emailValue);
    pw.push(pwValue);
    pwChk.push(pwChkValue);

    // push한 값 localStorage에 저장
    localStorage.setItem(USERNAME_KEY, JSON.stringify(username));
    localStorage.setItem(EMAIL_KEY, JSON.stringify(email));
    localStorage.setItem(PW_KEY, JSON.stringify(pw));
    localStorage.setItem(PWCHK_KEY, JSON.stringify(pwChk));

    const val_id = {
      username: usernameValue,
      email: emailValue,
      pw: pwValue,
      pwChk: pwChkValue,
    }
    localStorage.setItem(`${ usernameValue }'s val_id`, JSON.stringify(val_id));

    // 회원가입 완료 후 입력창 빈 값으로 초기화
    signupUsername.value = "";
    signupEmail.value = "";
    signupPw.value = "";
    signupPwChk.value = "";

    loginEmail.value = emailValue;
    loginPw.value = pwValue;

    signupToLogin(); // 빈칸도 없고 비밀번호도 맞으면 로그인 창으로 넘어가기
    openPopup(); // 회원가입 완료 팝업창 띄우기
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
const savedEmail = localStorage.getItem(EMAIL_KEY);
const savedPw = localStorage.getItem(PW_KEY);
const savedPwChk = localStorage.getItem(PWCHK_KEY);

// 저장된 회원가입 값 있으면 렌더링 시에 배열값으로 불러와서 기존 배열에 저장 해둔다.
// 그래야 계속해서 lcoalStorage에 배열값들이 저장된다.
if (savedUsername !== null) {
  const parsedUsername = JSON.parse(savedUsername);
  const parsedEmail = JSON.parse(savedEmail);
  const parsedPw = JSON.parse(savedPw);
  const parsedPwChk = JSON.parse(savedPwChk);

  username = parsedUsername;
  email = parsedEmail;
  pw = parsedPw;
  pwChk = parsedPwChk;
}

signupForm.addEventListener("submit", handleSignupBtn); // 회원가입 버튼 클릭

//--------------------------------------------------------------------------------------

// 로그인 기능 설정
function handleLoginBtn(event) {
  event.preventDefault();
  // 로그인 버튼 클릭 시의 local값 불러와서 비교해야 한다.
  const val_username = JSON.parse(localStorage.getItem(USERNAME_KEY));
  const val_email = JSON.parse(localStorage.getItem(EMAIL_KEY));
  const val_pw = JSON.parse(localStorage.getItem(PW_KEY));

  // 회원가입한 아이디가 하나도 없으면 회원가입 해주세요 경고창
  if (val_username === null && val_email === null && val_pw === null) {
    alert("회원가입 먼저 해주세요.");
    return;
  } else {
    for (let i = 0; i < val_email.length; i++) {
      // 회원가입 된 아이디 개수 만큼 반복문 돌려서 같은 값 있으면 로그인 성공
      if (val_email[i] === loginEmail.value && val_pw[i] === loginPw.value) {
        // 로그인 실패할 경우 경고창 위해 성공하면 index값 local에 저장하기
        localStorage.setItem("index", i);
        localStorage.setItem("username_inUse", val_username[i]);
        localStorage.setItem("email_inUse", val_email[i]);
        localStorage.setItem("pw_inUse", val_pw[i]);
        window.location.href = "../index.html";
        loginEmail.value = "";
        loginPw.value = "";
      }
    }
  }
  // 이메일값과 비밀번호값이 일치하지 않을 경우 index값이 없기 때문에 경고창
  if (localStorage.getItem("index") === null) {
    alert("이메일과 비밀번호를 다시 확인해주세요.");
  }
}

loginForm.addEventListener("submit", handleLoginBtn); // 로그인 버튼 클릭
