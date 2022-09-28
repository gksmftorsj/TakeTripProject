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

modify_profile_btn.addEventListener("click", () => {
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
});
