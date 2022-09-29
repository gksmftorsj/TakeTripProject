const user_share_trip_list = document.querySelector("#user_share_trip_list");
const profile_img = document.querySelector(".profile_img");
const username = document.querySelector(".username");
const registerd_cnt = document.querySelector(".registerd_cnt");
const shared_cnt = document.querySelector(".shared_cnt");

const share_Username = localStorage.getItem("share_username");
const savedProfileImg = localStorage.getItem(`${ share_Username }'s profile_img`);
const parsedRegisterdCnt = JSON.parse(localStorage.getItem(`${ share_Username }'s id_list`));
const parsedSharedCnt = JSON.parse(localStorage.getItem(`${ share_Username }'s share_cnt`));

if (savedProfileImg === null) {
  profile_img.setAttribute("src", "../img/profile-img/user.png");
} else {
  profile_img.setAttribute("src", savedProfileImg);
}
username.innerText = share_Username;
registerd_cnt.innerText = `등록한 글: ${ parsedRegisterdCnt.length }`;
shared_cnt.innerText = `공유한 글: ${ parsedSharedCnt.length }`;

const parsedUserShareTrips = JSON.parse(localStorage.getItem(`${ share_Username }'s share_trips`));

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
        localStorage.setItem("share_username", parsedUserShareTrips[j].username);
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

const share_id = localStorage.getItem("share_id");
const username_inUse = localStorage.getItem("username_inUse");

const FOLLOW_CNT_KEY = `${ share_id }'s follow_cnt`;

const follow_cnt = [];

function handelFollowBtn() {

  const savedFollowCnt = localStorage.getItem(FOLLOW_CNT_KEY);

  if (savedFollowCnt === null) {
    follow_cnt.push(username_inUse);
    localStorage.setItem(FOLLOW_CNT_KEY, JSON.stringify(follow_cnt));
  } else if (savedFollowCnt !== null && !savedFollowCnt.includes(username_inUse)) {
    follow_cnt.push(username_inUse);
    localStorage.setItem(FOLLOW_CNT_KEY, JSON.stringify(follow_cnt));
  } else {
    follow_cnt = follow_cnt.filter((follow_cnt) => follow_cnt !== username_inUse);
    localStorage.setItem(FOLLOW_CNT_KEY, JSON.stringify(follow_cnt));
  }
  const renderFollowCnt = JSON.parse(localStorage.getItem(`${ share_id }'s follow_cnt`));
}

follow_btn.addEventListener("click", handelFollowBtn);