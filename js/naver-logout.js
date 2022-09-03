const savedNaverUsername = localStorage.getItem("naver_username");
const savedNaverEmail = localStorage.getItem("naver_email");

var testPopUp;
function openPopUp() {
  // 로그아웃 창 open
  console.log("hi");
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

function naverLogout() {
  // localStorage에서 KEY 값 삭제
  localStorage.removeItem(NAVER_USERNAME_KEY);
  localStorage.removeItem(NAVER_EMAIL_KEY);
  // 만약 KEY 값이 null 즉 삭제되었다면 로그아웃
  if (savedNaverUsername === null && savedNaverEmail === null) {
    openPopUp(); // 로그아웃 창 open
    closePopUp();
    setTimeout(function () {
      // 열리자마자 로그아웃 창 close
      closePopUp();
    }, 0);
    alert("로그아웃 되었습니다."); // 로그아웃 성공
  }
}
