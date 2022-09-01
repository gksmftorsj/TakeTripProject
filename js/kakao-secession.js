// 회원탈퇴
function secession() {
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

const $kakaoSecessionBtn = document.querySelector("#secession-btn");
$kakaoSecessionBtn.addEventListener("click", secession);

// 기능 정리
// 카카오계정 로그인 시 localStorage에 username과 email 저장 sessionStorage에 token 저장
// 카카오계정 로그아웃 시 localStorage와 sessionStorage 저장 값 제거
// 카카오계정 로그아웃 시 localStorage와 sessionStorage 저장 값 제거
// 자동로그인이 하도록 되어 있기 때문에 다른 카카오계정으로 로그인 하려면 탈퇴한 뒤에 다시 서비스 가입 시에 다른 카카오계정으로 로그인 해야 한다.