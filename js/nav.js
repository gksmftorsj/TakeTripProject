const $nav_btn = document.querySelector(".nav-btn");
const $login_btn = document.querySelector(".login-btn");
const $myInfo = document.createElement("img"); // nav_btn에 myInfo Element 추가 기능 저장
$myInfo.classList.add("myInfo"); // class="myInfo"
$myInfo.setAttribute("src", "img/user.png"); // myInfo 속성 값으로 src 추가

// 로그인 후 내 정보 생성

// localStorage에서 값 가져오기
const KAKAO_USERNAME = localStorage.getItem("kakao_username");
const KAKAO_EMAIL = localStorage.getItem("kakao_email");
const NAVER_USERNAME = localStorage.getItem("naver_username");
const NAVER_EMAIL = localStorage.getItem("naver_email");
const GENERAL_USERNAME = localStorage.getItem("general_username");
const GENERAL_EMAIL = localStorage.getItem("general_email");

const LOGOUT_GENERAL_USERNAME = localStorage.getItem("logout_general_username");
const LOGOUT_GENERAL_EMAIL = localStorage.getItem("logout_general_email");

if (
  (KAKAO_USERNAME !== null && KAKAO_EMAIL !== null) || // 만약 localStorage에 값이 있다면
  (NAVER_USERNAME !== null && NAVER_EMAIL !== null) ||
  (LOGOUT_GENERAL_USERNAME !== null && LOGOUT_GENERAL_EMAIL !== null)
) {
  $nav_btn.removeChild($login_btn); // nav_btn에서 login_btn Element 제거
  $nav_btn.prepend($myInfo); // 완성된 myInfo nav_btn 자식 요소 중 가장 위쪽에 추가
}

const $showMyInfo = document.querySelector(".showMyInfo");
const $username = document.querySelector(".username");
const $email = document.querySelector(".email");

function showMyInfo() {
  $showMyInfo.classList.toggle("hidden");
  if (KAKAO_USERNAME !== null && KAKAO_EMAIL !== null) {
    $username.innerText = `이름: ${KAKAO_USERNAME}`;
    $email.innerText = `이메일: ${KAKAO_EMAIL}`;
  } else if (NAVER_USERNAME !== null && NAVER_EMAIL !== null) {
    $username.innerText = `이름: ${NAVER_USERNAME}`;
    $email.innerText = `이메일: ${NAVER_EMAIL}`;
  } else if (GENERAL_USERNAME !== null && GENERAL_EMAIL !== null) {
    $username.innerText = `이름: ${GENERAL_USERNAME}`;
    $email.innerText = `이메일: ${GENERAL_EMAIL}`;
  }
}

$myInfo.addEventListener("click", showMyInfo);

const $logout_btn = document.querySelector(".logout-btn");

let testPopup;
function openPopUp() {
  // 로그아웃 창 open
  testPopUp = window.open(
    "https://nid.naver.com/nidlogin.logout",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=no,width=1,height=1"
  );
  window.location.href;
}
function closePopUp() {
  // 로그아웃 창 close
  testPopUp.close();
}

// 로그아웃 버튼 구현
function handleLogoutBtn(event) {
  event.preventDefault();
  console.log("hello");
  if (KAKAO_USERNAME !== null && KAKAO_EMAIL !== null) {
    // 카카오 값 있으면 모두 지우고 로그아웃
    localStorage.removeItem("kakao_username");
    localStorage.removeItem("kakao_email");
    localStorage.removeItem("kakao_a73dc0bc8795922f63e374e2b8c687fa");
    sessionStorage.removeItem("AccessKEY");
    console.log("들어옴1");
    alert("로그아웃 되었습니다.");
  } else if (NAVER_USERNAME !== null && NAVER_EMAIL !== null) {
    // 네이버 값 있으면 모두 지우고 로그아웃
    console.log("들어옴 2");
    localStorage.removeItem("naver_username");
    localStorage.removeItem("naver_email");
    console.log("네이버 로그아웃 들어옴");
    openPopUp(); // 로그아웃 창 open
    setTimeout(function () {
      // 열리자마자 로그아웃 창 close
      closePopUp();
    }, 0);
    alert("로그아웃 되었습니다."); // 로그아웃 성공
  } else if (GENERAL_USERNAME !== null && GENERAL_EMAIL !== null) {
    // 일반 값 있으면 모두 지우고 로그아웃
    localStorage.removeItem("logout_general_username");
    localStorage.removeItem("logout_general_email");
    console.log("들어옴3");
    alert("로그아웃 되었습니다.");
  }
}

$logout_btn.addEventListener("submit", handleLogoutBtn);

const $theme_btn = document.querySelector(".theme-btn");
const $theme_img = document.querySelector(".theme-img");
const $theme_name = document.querySelector(".theme-name");

function handleThemeBtn() {
  if ($theme_name.textContent === "Light Mode") {
    $theme_img.setAttribute("src", "img/moon.png");
    $theme_name.textContent = "Dark Mode";
  } else if ($theme_name.textContent === "Dark Mode") {
    $theme_img.setAttribute("src", "img/sun.png");
    $theme_name.textContent = "Light Mode";
  }
}

$theme_btn.addEventListener("click", handleThemeBtn);
