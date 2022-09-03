const $nav_btn = document.querySelector(".nav-btn");
const $login_btn = document.querySelector(".login-btn");

// 로그인 후 내 정보 생성 => <img src="img/user.png" class="myInfo"> 생성
const $myInfo = document.createElement("img"); // nav_btn에 myInfo Element 추가 기능 저장
$myInfo.classList.add("myInfo"); // class="myInfo"
$myInfo.setAttribute("src", "img/user.png"); // myInfo 속성 값으로 src 추가

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
  // 만약 localStorage에 값이 있다면 로그인 버튼 없애고 내 정보로 변경
  (KAKAO_USERNAME !== null && KAKAO_EMAIL !== null) ||
  (NAVER_USERNAME !== null && NAVER_EMAIL !== null) ||
  (LOGOUT_GENERAL_USERNAME !== null && LOGOUT_GENERAL_EMAIL !== null)
) {
  $nav_btn.removeChild($login_btn); // nav_btn에서 login_btn Element 제거
  $nav_btn.prepend($myInfo); // 완성된 myInfo nav_btn 자식 요소 중 가장 위쪽에 추가
}
// 로그인 후 내 정보 생성

// localStorage에서 가져온 내 정보 값 보여주기
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
// localStorage에서 가져온 내 정보 값 보여주기

// 로그아웃
const $logout_btn = document.querySelector(".logout-btn");

// 네이버 로그아웃
let popup;
function openPopUp() {
  // 로그아웃 창 open
  popup = window.open(
    // 네이버 로그아웃 url
    "https://nid.naver.com/nidlogin.logout",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=no,width=1,height=1"
  );
}
function closePopUp() {
  // 로그아웃 창 close
  popup.close();
}
// 네이버 로그아웃

// 카카오톡 로그아웃
// 어플리케이션 연동 JavaScript key
window.Kakao.init("22934f3c77bfd987ae251a6176031c41");

//sessionStorage에 저장된 사용자 엑세스 토큰 받아온다.
window.Kakao.Auth.setAccessToken(
  JSON.parse(sessionStorage.getItem("AccessKEY"))
);

// 회원탈퇴
function secession() {
  Kakao.API.request({
    url: "/v1/user/unlink",
    success: function () {
      window.location.href; // 현재 페이지의 href(URL) 반환
    },
    fail: function () {
      alert("로그인이 되어있지 않습니다. 로그인 후 다시 시도해주세요.");
    },
  });
}
// 카카오톡 로그아웃

// 로그아웃 버튼 구현
function handleLogoutBtn(event) {
  event.preventDefault();
  if (KAKAO_USERNAME !== null && KAKAO_EMAIL !== null) {
    // 카카오 값 있으면 모두 지우고 로그아웃
    localStorage.removeItem("kakao_username");
    localStorage.removeItem("kakao_email");
    secession(); // 로그아웃 하면 자동로그인 되기 때문에 계정변경이라도 해서 재로그인 하도록 함 REST API 어떻게 하는지 모르겠음
    // _kawlt 쿠키 값 삭제하면 로그아웃 됨 다른 도메인이라 안지워지나?
  } else if (NAVER_USERNAME !== null && NAVER_EMAIL !== null) {
    // 네이버 값 있으면 모두 지우고 로그아웃
    localStorage.removeItem("naver_username");
    localStorage.removeItem("naver_email");
    localStorage.removeItem("com.naver.nid.access_token");
    localStorage.removeItem("com.naver.nid.oauth.state_token");
    openPopUp(); // 로그아웃 창 open
    closePopUp(); // 로그아웃 창 close
  } else if (GENERAL_USERNAME !== null && GENERAL_EMAIL !== null) {
    // 일반 값 있으면 모두 지우고 로그아웃
    localStorage.removeItem("logout_general_username");
    localStorage.removeItem("logout_general_email");
  }
}

$logout_btn.addEventListener("submit", handleLogoutBtn);
// 로그아웃

// 테마 변경
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
// 테마 변경
