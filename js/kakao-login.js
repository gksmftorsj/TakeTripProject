//item을 localStorage에 저장합니다. 없으면 localStorage에 아무것도 안나타난다.
function saveToDos(token) {
  typeof Storage !== "undefined" &&
    sessionStorage.setItem("AccessKEY", JSON.stringify(token));
}

// 어플리케이션 연동 JavaScript key
window.Kakao.init("91873d8a1b7b2681cd331773b09e19db");

// 로그인
function kakaoLogin() {
  window.Kakao.Auth.login({
    scope: "profile_nickname, account_email", //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣는다.
    success: function (response) {
      saveToDos(response.access_token);
      // 로그인 성공하면 사용자 엑세스 토큰 sessionStorage에 저장한다.
      window.Kakao.API.request({
        // 사용자 정보 가져오기
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          // 가져온 사용자 정보 localStroage에 저장
          localStorage.setItem("useranmeInUse", kakao_account.profile.nickname);
          localStorage.setItem("emailInUse", kakao_account.email);
          console.log("로그인 성공");
          window.location.href = "https://gksmftorsj.github.io/project0901/";
        },
      });
    },
    fail: function (error) {
      console.log(error);
    },
  });
}

const $kakaoLoginBtn = document.querySelector(".login-btn.kakao");
$kakaoLoginBtn.addEventListener("click", kakaoLogin);

// 기능 정리
// 카카오계정 로그인 시 localStorage에 username과 email 저장 sessionStorage에 token 저장
// 카카오계정 로그아웃 시 localStorage와 sessionStorage 저장 값 제거
// 카카오계정 로그아웃 시 localStorage와 sessionStorage 저장 값 제거
// 자동로그인이 하도록 되어 있기 때문에 다른 카카오계정으로 로그인 하려면 탈퇴한 뒤에 다시 서비스 가입 시에 다른 카카오계정으로 로그인 해야 한다.
