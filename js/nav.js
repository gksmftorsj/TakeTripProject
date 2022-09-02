const $btnBox = document.querySelector(".btnBox");
const $loginBtn = document.querySelector(".loginBtn");
const $myInfo = document.createElement("img"); // btnBox에 myInfo Element 추가 기능 저장
$myInfo.classList.add("myInfo"); // class="myInfo"
$myInfo.setAttribute("src", "../img/user.png"); // myInfo 속성 값으로 src 추가


// 로그인 후 내 정보 생성

// localStorage에서 값 가져오기
const KAKAO_USERNAME = localStorage.getItem("kakao_username");
const KAKAO_EMAIL = localStorage.getItem("kakao_email");
const NAVER_USERNAME = localStorage.getItem("naver_username");
const NAVER_EMAIL = localStorage.getItem("naver_email");
const GENERAL_USERNAME = localStorage.getItem("general_username");
const GENERAL_EMAIL = localStorage.getItem("general_email");


if ((KAKAO_USERNAME !== null && KAKAO_EMAIL !== null) || // 만약 localStorage에 값이 있다면
  (NAVER_USERNAME !== null && NAVER_EMAIL !== null) ||
  (GENERAL_USERNAME !== null && GENERAL_EMAIL !== null)) {
  $btnBox.removeChild($loginBtn); // btnBox에서 loginBtn Element 제거
  $btnBox.prepend($myInfo); // 완성된 myInfo btnBox 자식 요소 중 가장 위쪽에 추가
}

const $showMyInfo = document.querySelector(".showMyInfo");
const $username = document.querySelector(".username");
const $email = document.querySelector(".email");

function showMyInfo() {
  $showMyInfo.classList.toggle("hidden");
  if (KAKAO_USERNAME !== null && KAKAO_EMAIL !== null) {
    $username.innerText = `이름: ${ KAKAO_USERNAME }`;
    $email.innerText = `이메일: ${ KAKAO_EMAIL }`;
  } else if (NAVER_USERNAME !== null && NAVER_EMAIL !== null) {
    $username.innerText = `이름: ${ NAVER_USERNAME }`;
    $email.innerText = `이메일: ${ NAVER_EMAIL }`;
  } else if (GENERAL_USERNAME !== null && GENERAL_EMAIL !== null) {
    $username.innerText = `이름: ${ GENERAL_USERNAME }`;
    $email.innerText = `이메일: ${ GENERAL_EMAIL }`;
  }
}

$myInfo.addEventListener('click', showMyInfo);

const $logoutBtn = document.querySelector(".logoutBtn");

// 로그아웃 버튼 구현
function handleLogoutBtn() {
  if (KAKAO_USERNAME !== null && KAKAO_EMAIL !== null) { // 카카오 값 있으면 모두 지우고 로그아웃
    localStorage.removeItem("kakao_username");
    localStorage.removeItem("kakao_email");
    localStorage.removeItem("kakao_a73dc0bc8795922f63e374e2b8c687fa");
    sessionStorage.removeItem("AccessKEY");
    alert("로그아웃 되었습니다.");
  } else if (NAVER_USERNAME !== null && NAVER_EMAIL !== null) { // 네이버 값 있으면 모두 지우고 로그아웃
    localStorage.removeItem("naver_username");
    localStorage.removeItem("naver_email");
    alert("로그아웃 되었습니다.");
  } else if (GENERAL_USERNAME !== null && GENERAL_EMAIL !== null) { // 일반 값 있으면 모두 지우고 로그아웃
    console.log("안녕");
    localStorage.removeItem("general_username");
    localStorage.removeItem("general_email");
    localStorage.removeItem("general_pw");
    localStorage.removeItem("general_pwChk");
    alert("로그아웃 되었습니다.");
  }
}

$logoutBtn.addEventListener('submit', handleLogoutBtn);