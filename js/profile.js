const username = document.querySelector(".username");
const email = document.querySelector(".email");
const follow = document.querySelector(".follow");

username.innerText = `사용자이름: ${ savedUsername }`;
email.innerText = `이메일: ${ savedEmail }`;
follow.innerText = `팔로우: 0`;

const modify_profile_btn = document.querySelector(".modify_profile_btn");

modify_profile_btn.addEventListener("click", () => {
  window.location.href = "../html/modify-profile.html";
})