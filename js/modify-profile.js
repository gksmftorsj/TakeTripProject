const img = document.querySelector(".modify_profile_img");
const file = document.querySelector("input[type=file]");
const username = document.querySelector(".username");
const email = document.querySelector(".email");

const profile_img = localStorage.getItem(`${ savedUsername }'s profile_img`);

file.onchange = function () {
  var reader = new FileReader();

  reader.onload = function (event) {
    img.src = event.target.result;
  };

  reader.readAsDataURL(this.files[0]);
};

if (profile_img === null) {
  img.setAttribute("src", `../img/profile-img/user.png`);
} else {
  img.setAttribute("src", profile_img);
}

username.setAttribute("value", savedUsername);
email.setAttribute("value", savedEmail);

let pw = [];
let pwChk = [];

const modify_profile_btn = document.querySelector(".modify_profile_btn");
const current_pw = document.querySelector(".current_pw");
const new_pw = document.querySelector(".new_pw");
const new_pwChk = document.querySelector(".new_pwChk");

function modifyProfile(event) {
  console.log("hi");
  event.preventDefault();
  const current_pw_value = current_pw.value;
  const new_pw_value = new_pw.value;
  const new_pwChk_value = new_pwChk.value;

  const parsedPw = JSON.parse(localStorage.getItem("signup_pw"));
  const parsedPwChk = JSON.parse(localStorage.getItem("signup_pwChk"));
  const inUse_Pw = localStorage.getItem("pw_inUse");

  if (
    current_pw_value === "" &&
    new_pw_value === "" &&
    new_pwChk_value === "" &&
    file.value === ""
  ) {
    if (confirm("수정한 값이 없습니다. 프로필 수정을 종료하시겠습니까?")) {
      window.location.href = "../html/my-profile.html";
    }
  }

  if (current_pw_value !== "" && new_pw_value !== "" && new_pwChk !== "") {
    if (inUse_Pw !== current_pw_value && new_pw_value !== new_pwChk_value) {
      alert("현재 비밀번호, 새 비밀번호 모두 일치하지 않습니다.");
      return;
    } else if (inUse_Pw !== current_pw_value) {
      alert("현재 비밀번호가 일치하지 않습니다.");
      return;
    } else if (new_pw_value !== new_pwChk_value) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    } else if (current_pw_value === new_pw_value) {
      alert(
        "현재 비밀번호와 새 비밀번호가 동일합니다.                                   다른 비밀번호를 입력해주세요."
      );
      return;
    } else if (parsedPw.includes(new_pw_value)) {
      alert("이미 존재하는 비밀번호입니다. 다른 비밀번호를 입력해주세요.");
      return;
    } else if (
      inUse_Pw === current_pw_value &&
      new_pw_value === new_pwChk_value &&
      !parsedPw.includes(new_pw_value)
    ) {
      pw = parsedPw.filter((pw) => pw !== current_pw_value);
      pw.push(new_pw_value);

      pwChk = parsedPwChk.filter((pwChk) => pwChk !== current_pw_value);
      pwChk.push(new_pwChk_value);

      localStorage.setItem("signup_pw", JSON.stringify(pw));
      localStorage.setItem("signup_pwChk", JSON.stringify(pwChk));
      localStorage.setItem("pw_inUse", new_pw_value);

      const val_id = {
        username: savedUsername,
        email: savedEmail,
        pw: new_pw_value,
        pwChk: new_pwChk_value,
      };
      localStorage.setItem(`${ savedUsername }'s val_id`, JSON.stringify(val_id));

      window.location.href = "../html/profile.html";
    }
  }

  if (file.value !== "") {
    const profile_img = `../img/profile-img/${ file.files[0].name }`;
    localStorage.setItem(`${ savedUsername }'s profile_img`, profile_img);
    window.location.href = "../html/profile.html";
  }

  if (
    current_pw_value !== "" &&
    new_pw_value !== "" &&
    new_pwChk_value !== "" &&
    file.value !== ""
  ) {
    alert("비밀번호와 프로필 이미지가 변경되었습니다.");
  } else if (
    file.value !== "" &&
    current_pw_value === "" &&
    new_pw_value === "" &&
    new_pwChk_value === ""
  ) {
    alert("프로필 이미지가 변경되었습니다.");
  } else if (
    file.value === "" &&
    current_pw_value !== "" &&
    new_pw_value !== "" &&
    new_pwChk_value !== ""
  ) {
    alert("비밀번호가 변경되었습니다.");
  }
}

modify_profile_btn.addEventListener("click", modifyProfile);

const membership_withdrawal_btn = document.querySelector(
  ".membership_withdrawal_btn"
);

function membershipWithdrawal(event) {
  event.preventDefault();
}

membership_withdrawal_btn.addEventListener("click", membershipWithdrawal);
