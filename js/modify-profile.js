const username = document.querySelector(".username");
const email = document.querySelector(".email");

username.setAttribute("value", savedUsername);
email.setAttribute("value", savedEmail);

let pw = [];
let pwChk = [];

const modify_profile_form = document.querySelector(".modify_profile_form");
const current_pw = document.querySelector(".current_pw");
const new_pw = document.querySelector(".new_pw");
const new_pwChk = document.querySelector(".new_pwChk");

const inUse_Pw = localStorage.getItem("pw_inUse");

function modifyProfile(event) {
  event.preventDefault();
  const current_pw_value = current_pw.value;
  const new_pw_value = new_pw.value;
  const new_pwChk_value = new_pwChk.value;

  const parsedPw = JSON.parse(localStorage.getItem("signup_pw"));
  const parsedPwChk = JSON.parse(localStorage.getItem("signup_pwChk"));

  if (
    inUse_Pw === current_pw_value &&
    new_pw_value === new_pwChk_value &&
    !parsedPw.includes(new_pw_value)
  ) {
    console.log("hi");

    pw = parsedPw.filter((pw) => pw !== current_pw_value);
    pw.push(new_pw_value);

    pwChk = parsedPwChk.filter((pwChk) => pwChk !== current_pw_value);
    pwChk.push(new_pwChk_value);

    localStorage.setItem("signup_pw", JSON.stringify(pw));
    localStorage.setItem("signup_pwChk", JSON.stringify(pwChk));
    localStorage.setItem("pw_inUse", new_pw_value);
  } else {
    console.log("여기 오지마");
  }
}

modify_profile_form.addEventListener("submit", modifyProfile);
