//item을 localStorage에 저장합니다. 없으면 localStorage에 아무것도 안나타난다.
function saveToDos(token) {
  typeof Storage !== "undefined" &&
    sessionStorage.setItem("AccessKEY", JSON.stringify(token));
}

// 어플리케이션 연동 JavaScript key
window.Kakao.init("22934f3c77bfd987ae251a6176031c41");

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
          // localStorage KEY 이름
          const KAKAO_USERNAME_KEY = "kakao_username"; //
          const KAKAO_EMAIL_KEY = "kakao_email";
          // 가져온 사용자 정보 저장
          const kakaoUsername = kakao_account.profile.nickname;
          const kakaoEmail = kakao_account.email;
          // 저장한 사용자 정보 localStroage에 저장
          // 나중에 로그아웃 시 localStroage에서 clear나 remove Item 사용하여 제거
          localStorage.setItem(KAKAO_USERNAME_KEY, kakaoUsername);
          localStorage.setItem(KAKAO_EMAIL_KEY, kakaoEmail);
          console.log("로그인 성공");
          window.location.href = "../index.html";
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
