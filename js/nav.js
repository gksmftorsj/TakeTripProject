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

let testPopUp;
function openPopUp() {
  // 로그아웃 창 open
  testPopUp = window.open(
    "https://nid.naver.com/nidlogin.logout",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=no,width=1,height=1"
  );
}
function closePopUp() {
  // 로그아웃 창 close
  testPopUp.close();
}

// 어플리케이션 연동 JavaScript key
window.Kakao.init("22934f3c77bfd987ae251a6176031c41");

//sessionStorage에 저장된 사용자 엑세스 토큰 받아온다.
window.Kakao.Auth.setAccessToken(
  JSON.parse(sessionStorage.getItem("AccessKEY"))
);
// 왜 안나오지
// 회원탈퇴
function secession() {
  console.log("hello");
  Kakao.API.request({
    url: "/v1/user/unlink",
    success: function () {
      alert("탈퇴가 완료되었습니다.");
      window.location.href; // 현재 페이지의 href(URL) 반환
      // 나중에 로그아웃 시 localStroage에서 clear나 remove Item 사용하여 제거
    },
    fail: function () {
      alert("로그인이 되어있지 않습니다. 로그인 후 다시 시도해주세요.");
    },
  });
}

// 로그아웃 버튼 구현
function handleLogoutBtn(event) {
  event.preventDefault();
  if (KAKAO_USERNAME !== null && KAKAO_EMAIL !== null) {
    // 카카오 값 있으면 모두 지우고 로그아웃
    localStorage.removeItem("kakao_username");
    localStorage.removeItem("kakao_email");
    secession();
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
