// 어플리케이션 연동 JavaScript key
window.Kakao.init("22934f3c77bfd987ae251a6176031c41");

//sessionStorage에 저장된 사용자 엑세스 토큰 받아온다.
window.Kakao.Auth.setAccessToken(
  JSON.parse(sessionStorage.getItem("AccessKEY"))
);

// 로그아웃
function kakaoLogout() {
  if (!Kakao.Auth.getAccessToken()) {
    alert("로그인이 되어있지 않습니다.");
    return; // 로그아웃 완료창 안뜨게 return 사용하여 강제종료
  }
  Kakao.Auth.logout(function () {
    alert("로그아웃이 완료되었습니다.");
    window.location.href; // 현재 페이지의 href(URL) 반환
    // 나중에 로그아웃 시 localStroage에서 clear나 remove Item 사용하여 제거
    console.log("로그아웃 성공");
  });
}

const $kakaologoutBtn = document.querySelector("#logout-btn");
$kakaologoutBtn.addEventListener("click", kakaoLogout);

// 기능 정리
// 카카오계정 로그인 시 localStorage에 username과 email 저장 sessionStorage에 token 저장
// 카카오계정 로그아웃 시 localStorage와 sessionStorage 저장 값 제거
// 카카오계정 로그아웃 시 localStorage와 sessionStorage 저장 값 제거
// 자동로그인이 하도록 되어 있기 때문에 다른 카카오계정으로 로그인 하려면 탈퇴한 뒤에 다시 서비스 가입 시에 다른 카카오계정으로 로그인 해야 한다.