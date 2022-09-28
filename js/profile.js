const img = document.querySelector(".profile_img");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const follow = document.querySelector(".follow");

const profile_img = localStorage.getItem(`${ savedUsername }'s profile_img`);

if (profile_img === null) {
  img.setAttribute("src", `../img/profile-img/user.png`)
} else {
  img.setAttribute("src", profile_img);
}
email.setAttribute("value", savedEmail);
username.setAttribute("value", savedUsername);
follow.innerText = `팔로우: 0`;

const modify_profile_btn = document.querySelector(".modify_profile_btn");

function createPwPopup() {
  let width = "500";
  let height = "500";
  let left = Math.ceil((window.screen.width - width) / 2); // ceil=올림
  let top = Math.ceil((window.screen.height - height) / 2);
  window.open(
    "../html/create-pw.html",
    "비밀번호설정 팝업",
    `width=${ width }, height=${ height }, left=${ left }, top=${ top }`
  ); // 팝업창 가운데 정렬
}



modify_profile_btn.addEventListener("click", () => {


  if (localStorage.getItem("kakaoLogin") !== null) {
    if (confirm("프로필 수정을 위해서는 비밀번호가 필요합니다. 비밀번호를 등록하시겠습니까?")) {
      createPwPopup();
    }
  } else {
    const val_pw = prompt("비밀번호를 입력하세요");
    if (
      localStorage.getItem("kakaoLogin") === null &&
      localStorage.getItem("naverLogin") === null
    ) {
      if (val_pw === localStorage.getItem("pw_inUse")) {
        window.location.href = "../html/modify-profile.html";
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else if (
      localStorage.getItem("kakaoLogin") === null &&
      localStorage.getItem("naverLogin") !== null
    ) {
      const val_email = prompt("이메일을 입력하세요");
      if (val_email === localStorage.getItem("email_inUse")) {
        window.location.href = "../html/modify-profile.html";
      } else {
        alert("이메일이 틀렸습니다.");
      }
    } else if (
      localStorage.getItem("kakaoLogin") !== null &&
      localStorage.getItem("naverLogin") === null
    ) {
      const val_email = prompt("이메일을 입력하세요");
      if (val_email === localStorage.getItem("email_inUse")) {
        window.location.href = "../html/modify-profile.html";
      } else {
        alert("이메일이 틀렸습니다.");
      }
    }
  }
});
