// 로그인 후 메뉴와 내 정보 이미지 생성
const nav_btn = document.querySelector(".nav_btn");
const login_btn = document.querySelector(".login_btn");

// nav_btn에 myInfo Element 추가 기능 저장
const myInfo = document.createElement("img");
myInfo.classList.add("myInfo");

const savedUsername = localStorage.getItem("username_inUse");
const savedEmail = localStorage.getItem("email_inUse");

// 만약 localStorage에 값이 있다면 로그인 버튼 없애고 내 정보로 변경
if (savedUsername !== null && savedEmail !== null) {
  nav_btn.removeChild(login_btn); // nav_btn에서 login_btn Element 제거
  nav_btn.prepend(myInfo); // 완성된 myInfo nav_btn 자식 요소 중 가장 위쪽에 추가
  const myStory = document.querySelector("#myStory");
  const shareStory = document.querySelector("#shareStory");
  myStory.classList.remove("hidden_story");
  myStory.classList.add("show_story");
  shareStory.classList.remove("hidden_story");
  shareStory.classList.add("show_story");
}

// index일 때와 아닐 때의 경로가 다르기 때문에 주소로 구별
// 나중에 배포할 때는 index 제거
if (
  window.location.href.includes("index") ||
  window.location.href === "https://gksmftorsj.github.io/project0901/"
) {
  myInfo.setAttribute("src", "img/user.png");
} else {
  myInfo.setAttribute("src", "../img/user.png");
}

// ----------------------------------------------------------------------------------

// 내 정보 애니메이션
const myInfo_menu = document.querySelector(".myInfo_menu");

myInfo_menu.setAttribute("style", "display:none");

function showInfo() {
  myInfo_menu.setAttribute("style", "");
  myInfo_menu.classList.toggle("show_myInfo_menu");
  myInfo_menu.classList.toggle("hidden_myInfo_menu");
}
myInfo.addEventListener("click", showInfo);

function hoverColor() {
  const myInfo_menu = document.querySelector(".myInfo_menu");
  myInfo_menu.classList.add("before_color");
}

function leaveColor() {
  const myInfo_menu = document.querySelector(".myInfo_menu");
  myInfo_menu.classList.remove("before_color");
}
// ----------------------------------------------------------------------------------

// 로그아웃
const menu_logout_btn = document.querySelector(".menu_logout_btn");

// 네이버 로그아웃
let popup;
function naverOpenPopUp() {
  // 로그아웃 창 open
  popup = window.open(
    // 네이버 로그아웃 url
    "https://nid.naver.com/nidlogin.logout",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=no,width=1,height=1"
  );
}

function naverClosePopUp() {
  // 로그아웃 창 close
  popup.close();
}

// 카카오톡 로그아웃
// 어플리케이션 연동 JavaScript key
window.Kakao.init("22934f3c77bfd987ae251a6176031c41");

//sessionStorage에 저장된 사용자 엑세스 토큰 받아온다.
window.Kakao.Auth.setAccessToken(
  JSON.parse(sessionStorage.getItem("AccessKEY"))
);

// 로그아웃
function kakaoLogout() {
  Kakao.Auth.logout(function () {
    window.location.href; // 현재 페이지의 href(URL) 반환
  });
}

function handleLogoutBtn() {
  localStorage.removeItem("username_inUse");
  localStorage.removeItem("email_inUse");
  localStorage.removeItem("pw_inUse");
  localStorage.removeItem("index");
  localStorage.removeItem("lat");
  localStorage.removeItem("lng");
  localStorage.removeItem("com.naver.nid.access_token");
  localStorage.removeItem("com.naver.nid.oauth.state_token");
  localStorage.removeItem("anotherLogin");
  localStorage.removeItem("theme");
  kakaoLogout();
  naverOpenPopUp(); // 로그아웃 창 open
  naverClosePopUp(); // 로그아웃 창 close
}

menu_logout_btn.addEventListener("click", handleLogoutBtn);

// ----------------------------------------------------------------------------------

// 테마 변경
const theme_btn = document.querySelector(".theme_btn");
const theme_img = document.querySelector(".theme_img");
const theme_name = document.querySelector(".theme_name");
const nav_container = document.querySelector(".nav_container");
const footer = document.querySelector("footer");
const footer_span = document.querySelector("footer span");
const trip_list = document.querySelector("#trip_list");
const body = document.querySelector("body");
const write_main_container = document.querySelector(".main_container");
const write_trip_title = document.querySelector(".trip_title");
const profile_container = document.querySelector(".profile_container");
const modify_profile_container = document.querySelector(
  ".modify_profile_container"
);
const theme_detail_container = document.querySelector(".detail_container");
const share_review_list = document.querySelector(".review_list");
const user_profile_img = document.querySelector(".profile_img");

const black = "background-color:black";
const white = "color:white";

function mainPageTheme() {
  const theme = localStorage.getItem("theme");

  if (theme !== null) {
    if (theme === "black") {
      theme_img.setAttribute("src", "img/moon.png");
      theme_name.textContent = "Dark Mode";
      body.setAttribute("style", white);
      nav_container.setAttribute("style", black);
      myInfo.setAttribute("src", "img/white_user.png");
      myInfo.setAttribute("style", "width:40px; height:40px");
      if (
        window.location.href.includes("index") ||
        window.location.href === "https://gksmftorsj.github.io/project0901/"
      ) {
        footer.setAttribute("style", black);
        trip_list.setAttribute(
          "style",
          `${ black }; border-bottom: 2px solid white`
        );
        footer_span.setAttribute("style", white);
      }
    } else {
      theme_img.setAttribute("src", "img/sun.png");
      theme_name.textContent = "Light Mode";
      body.setAttribute("style", "");
      nav_container.setAttribute("style", "");
      myInfo.setAttribute("src", "img/user.png");
      myInfo.setAttribute("style", "");
      if (
        window.location.href.includes("index") ||
        window.location.href === "https://gksmftorsj.github.io/project0901/"
      ) {
        footer.setAttribute("style", "");
        trip_list.setAttribute("style", "");
        footer_span.setAttribute("style", "");
      }
    }
  }
}

function subPageTheme() {
  const theme = localStorage.getItem("theme");

  if (theme !== null) {
    if (theme === "black") {
      theme_img.setAttribute("src", "../img/moon.png");
      theme_name.textContent = "Dark Mode";
      body.setAttribute("style", `${ black }; ${ white }`);
      nav_container.setAttribute(
        "style",
        `${ black }; border-bottom: 2px solid white`
      );
      myInfo.setAttribute("src", "../img/white_user.png");
      myInfo.setAttribute("style", "width:42px; height:40px");
      if (
        window.location.href.includes("profile") &&
        !window.location.href.includes("modify-profile")
      ) {
        profile_container.setAttribute("style", "color:black");
      }
      if (window.location.href.includes("modify-profile")) {
        modify_profile_container.setAttribute("style", "color:black");
      }
      if (window.location.href.includes("write")) {
        write_main_container.setAttribute("style", black);
      }
      if (window.location.href.includes("detail")) {
        theme_detail_container.setAttribute("style", "color:black");
      }
      if (window.location.href.includes("detailShare")) {
        share_review_list.setAttribute("style", "color:black");
      }
      if (window.location.href.includes("user-profile")) {
        profile_container.setAttribute("style", white);
        user_profile_img.setAttribute("src", "../img/white_user.png");
        user_share_trip_list.setAttribute("style", "border-top: 5px solid white");
      }
    } else {
      theme_img.setAttribute("src", "../img/sun.png");
      theme_name.textContent = "Light Mode";
      body.setAttribute("style", "");
      nav_container.setAttribute("style", "");
      myInfo.setAttribute("src", "../img/user.png");
      myInfo.setAttribute("style", "");
      if (window.location.href.includes("write")) {
        write_main_container.setAttribute("style", "");
      }
      if (window.location.href.includes("user-profile")) {
        profile_container.setAttribute("style", "");
        user_profile_img.setAttribute("src", "../img/user.png");
        user_share_trip_list.setAttribute("style", "");
      }
    }
  }
}

if (
  window.location.href.includes("index") ||
  window.location.href === "https://gksmftorsj.github.io/project0901/"
) {
  mainPageTheme();
} else {
  subPageTheme();
}

function handleThemeBtn() {
  const theme = localStorage.getItem("theme");
  if (theme === null) {
    localStorage.setItem("theme", "black");
  } else if (theme === "white") {
    localStorage.setItem("theme", "black");
  } else {
    localStorage.setItem("theme", "white");
  }
  if (
    window.location.href.includes("index") ||
    window.location.href === "https://gksmftorsj.github.io/project0901/"
  ) {
    mainPageTheme();
  } else {
    subPageTheme();
  }
}

theme_btn.addEventListener("click", handleThemeBtn);
// 테마 변경

console.log(document.querySelector(".detail_expenditure"));
