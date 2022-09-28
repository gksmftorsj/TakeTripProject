var naverLogin = new naver.LoginWithNaverId({
  //내 애플리케이션 정보에 cliendId를 입력해줍니다.
  clientId: "wcyad8RUU4UMX2VrzXe2",
  // 내 애플리케이션 API설정의 Callback URL 을 입력해줍니다.
  callbackUrl: "https://gksmftorsj.github.io/project0901/html/login.html",
  isPopup: false, // 팝업을 통한 연동처리 여부
  callbackHandle: true, // callback 페이지가 분리되었을 경우에 callback 페이지에서는 callback 처리를 해줄 수 있도록 설정합니다.
});

// (3) 네이버아이디 로그인 정보를 초기화하기 위하여 init을 호출
naverLogin.init();

// (4) Callback의 처리, 정상적으로 Callback 처리가 완료될 경우 main page로 redirect(또는 Popup close) / 페이지가 정상적으로 로드 되었을 때 함수 실행
window.addEventListener("load", function () {
  naverLogin.getLoginStatus(function (status) {
    if (status) {
      // 정상적으로 로그인 되면 status = true
      // (5) 필수적으로 받아야 하는 프로필 정보가 있다면 callback처리 시점에 체크
      const naver_username = naverLogin.user.getName(); // 필수정보인 이름 값 받아온 것 저장
      const naver_email = naverLogin.user.getEmail(); // 필수정보인 이메일 값 받아온 것 저장

      const parsedValId = localStorage.getItem(`${ naver_username }'s val_id`);

      const parsedUsername = JSON.parse(localStorage.getItem("signup_username"));
      if (parsedUsername !== null) {
        if (!parsedUsername.includes(`${ naver_username }(네이버)`)) {
          localStorage.setItem("username_inUse", `${ naver_username }(네이버)`);
          localStorage.setItem("email_inUse", `${ naver_email }(네이버)`);
          localStorage.setItem("anotherLogin", "anotherLogin");
          console.log("로그인 성공");
          // window.location.href = "https://gksmftorsj.github.io/project0901/";
        } else if (parsedValId !== null && parsedUsername.includes(naver_username)) {
          if (parsedValId !== null) {
            localStorage.setItem("pw_inUse", parsedValId.pw);
          } else {
            localStorage.setItem("anotherLogin", "anotherLogin");
          }
          localStorage.setItem("username_inUse", `${ naver_username }(네이버)`);
          localStorage.setItem("email_inUse", `${ naver_email }(네이버)`);
          console.log("로그인 성공");
          // window.location.href = "https://gksmftorsj.github.io/project0901/";
        }
      } else {
        localStorage.setItem("username_inUse", `${ naver_username }(네이버)`);
        localStorage.setItem("email_inUse", `${ naver_email }(네이버)`);
        localStorage.setItem("anotherLogin", "anotherLogin");
        console.log("로그인 성공");
        // window.location.href = "https://gksmftorsj.github.io/project0901/";
      }

      if (username == undefined || username == null) {
        alert("이름은 필수정보입니다. 정보제공을 동의해주세요.");
        naverLogin.reprompt(); // 필수정보인 이름 값이 없다면 다시 한 번 동의창 띄우기
        return;
      }
      if (email == undefined || email == null) {
        alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
        naverLogin.reprompt(); // 필수정보인 이메일 값이 없다면 다시 한 번 동의창 띄우기
        return;
      }
    } else {
      console.log("로그인 실패"); // 로그인 실패
    }
  });
});
