const user_share_trip_list = document.querySelector("#user_share_trip_list");
const profile_img = document.querySelector(".profile_img");
const username = document.querySelector(".username");
const registerd_cnt = document.querySelector(".registerd_cnt");
const shared_cnt = document.querySelector(".shared_cnt");

const share_Username = localStorage.getItem("share_username");
const parsedRegisterdCnt = JSON.parse(
  localStorage.getItem(`${share_Username}'s id_list`)
);
const parsedSharedCnt = JSON.parse(
  localStorage.getItem(`${share_Username}'s share_cnt`)
);

username.innerText = share_Username;
registerd_cnt.innerText = `등록한 글: ${parsedRegisterdCnt.length}`;
shared_cnt.innerText = `공유한 글: ${parsedSharedCnt.length}`;

function profileImgPopup() {
  let width = "700";
  let height = "700";
  let left = Math.ceil((window.screen.width - width) / 2); // ceil=올림
  let top = Math.ceil((window.screen.height - height) / 2);
  window.open(
    "../html/profile-img.html",
    "비밀번호설정 팝업",
    `width=${width}, height=${height}, left=${left}, top=${top}`
  ); // 팝업창 가운데 정렬
}

profile_img.addEventListener("click", profileImgPopup);

const parsedUserShareTrips = JSON.parse(
  localStorage.getItem(`${share_Username}'s share_trips`)
);

function showShareTrip(shareTrip) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  li.id = shareTrip.id;
  img.setAttribute("src", shareTrip.img);
  img.classList.add("share_img");
  p.innerText = shareTrip.title;
  p.addEventListener("click", () => {
    window.location.href = "../html/detailShare.html";
  });

  li.appendChild(img);
  li.appendChild(p);
  user_share_trip_list.appendChild(li);
}

if (parsedUserShareTrips !== null) {
  parsedUserShareTrips.forEach(showShareTrip);
}

let modify_share_trips = [];

for (let i = 0; i < parsedUserShareTrips.length; i++) {
  for (let j = 0; j < parsedUserShareTrips.length; j++) {
    const li = document.querySelectorAll("li");
    const p = document.querySelectorAll("p");
    p[i].addEventListener("click", () => {
      if (li[i].id === String(parsedUserShareTrips[j].id)) {
        localStorage.setItem("share_title", parsedUserShareTrips[j].title);
        localStorage.setItem("share_id", parsedUserShareTrips[j].id);
        localStorage.setItem("share_story", parsedUserShareTrips[j].story);
        localStorage.setItem(
          "share_expenditure",
          JSON.stringify(parsedUserShareTrips[j].expenditure)
        );
        console.log(parsedUserShareTrips[j].expenditure);
        localStorage.setItem(
          "share_username",
          parsedUserShareTrips[j].username
        );
        localStorage.setItem("share_img", parsedUserShareTrips[j].img);

        const modify_share_trip = {
          title: parsedUserShareTrips[j].title,
          story: parsedUserShareTrips[j].story,
          expenditure: parsedUserShareTrips[j].expenditure,
        };
        modify_share_trips.push(modify_share_trip);
        localStorage.setItem(
          "modify_share_trips",
          JSON.stringify(modify_share_trip)
        );
        localStorage.setItem("modify_id", parsedUserShareTrips[j].id);
      }
    });
  }
}

const follow_btn = document.querySelector(".follow_btn");
const follower = document.querySelector(".follower");
const follow = document.querySelector(".follow");

const username_inUse = localStorage.getItem("username_inUse");

const FOLLOWER_CNT_KEY = `${share_Username}'s follower_cnt`;
const FOLLOW_CNT_KEY = `${username_inUse}'s follow_cnt`;

let follower_cnt = [];
let follow_cnt = [];

const renderFollowerCnt = JSON.parse(
  localStorage.getItem(`${share_Username}'s follower_cnt`)
);

if (renderFollowerCnt === null || renderFollowerCnt.length === 0) {
  follower.innerText = `팔로워: 0`;
} else {
  follower.innerText = `팔로워: ${renderFollowerCnt.length}`;
}

const renderFollowCnt = JSON.parse(
  localStorage.getItem(`${share_Username}'s follow_cnt`)
);

if (renderFollowCnt === null || renderFollowCnt.length === 0) {
  follow.innerText = `팔로우: 0`;
} else {
  follow.innerText = `팔로우: ${renderFollowCnt.length}`;
}

function handelFollowBtn() {
  const localFollowerCnt = localStorage.getItem(FOLLOWER_CNT_KEY);

  if (share_Username !== username_inUse) {
    if (localFollowerCnt === null) {
      follower_cnt.push(username_inUse);
      localStorage.setItem(FOLLOWER_CNT_KEY, JSON.stringify(follower_cnt));
      console.log("1번");
    } else if (
      localFollowerCnt !== null &&
      !localFollowerCnt.includes(username_inUse)
    ) {
      follower_cnt.push(username_inUse);
      localStorage.setItem(FOLLOWER_CNT_KEY, JSON.stringify(follower_cnt));
      console.log("2번");
    } else {
      follower_cnt = follower_cnt.filter(
        (follower_cnt) => follower_cnt !== username_inUse
      );
      localStorage.setItem(FOLLOWER_CNT_KEY, JSON.stringify(follower_cnt));
      console.log("3번");
    }
    const renderFollowerCnt = JSON.parse(
      localStorage.getItem(`${share_Username}'s follower_cnt`)
    );

    if (renderFollowerCnt !== null) {
      follower.innerText = `팔로워: ${renderFollowerCnt.length}`;
    } else {
      follower.innerText = `팔로워: 0`;
    }

    const localFollowCnt = localStorage.getItem(FOLLOW_CNT_KEY);

    if (share_Username !== username_inUse) {
      if (localFollowCnt === null) {
        follow_cnt.push(username_inUse);
        localStorage.setItem(FOLLOW_CNT_KEY, JSON.stringify(follow_cnt));
        console.log("1번");
      } else if (
        localFollowCnt !== null &&
        !localFollowCnt.includes(username_inUse)
      ) {
        follow_cnt.push(username_inUse);
        localStorage.setItem(FOLLOW_CNT_KEY, JSON.stringify(follow_cnt));
        console.log("2번");
      } else {
        follow_cnt = follow_cnt.filter(
          (follow_cnt) => follow_cnt !== username_inUse
        );
        localStorage.setItem(FOLLOW_CNT_KEY, JSON.stringify(follow_cnt));
        console.log("3번");
      }
      const renderFollowCnt = JSON.parse(
        localStorage.getItem(`${share_Username}'s follow_cnt`)
      );

      if (renderFollowCnt !== null) {
        follow.innerText = `팔로우: ${renderFollowCnt.length}`;
      } else {
        follow.innerText = `팔로우: 0`;
      }
    }
  }
}
follow_btn.addEventListener("click", handelFollowBtn);

const savedFollowerCnt = localStorage.getItem(FOLLOWER_CNT_KEY);

if (savedFollowerCnt !== null) {
  const parsedFollowerCnt = JSON.parse(savedFollowerCnt);
  follower_cnt = parsedFollowerCnt;
}

const savedFollowCnt = localStorage.getItem(FOLLOW_CNT_KEY);

if (savedFollowCnt !== null) {
  const parsedFollowCnt = JSON.parse(savedFollowCnt);
  follow_cnt = parsedFollowCnt;
}
