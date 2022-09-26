const share_trip_list = document.getElementById("share_trip_list");

const parsedShareTrips = JSON.parse(localStorage.getItem("share_trips"));

function showShareTrip(parsedShareTrips) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const title = document.createElement("div");
  title.classList.add("title");
  li.id = parsedShareTrips.id;
  img.setAttribute("src", parsedShareTrips.img);
  img.classList.add("shareImg");
  p.innerText = parsedShareTrips.title;
  p.addEventListener("click", () => {
    window.location.href = "../html/detailShare.html";
  });
  span.innerText = `${parsedShareTrips.username}'s trip`;
  span.classList.add("username");
  const like_btn = document.createElement("button");
  like_btn.classList.add("like_btn");
  like_btn.innerHTML = `
    <div class="like-wrapper">
      <div class="ripple"></div>
      <svg class="heart" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
      </svg>
      <div class="particles" style="--total-particles: 6">
        <div class="particle" style="--i: 1; --color: #7642F0"></div>
        <div class="particle" style="--i: 2; --color: #AFD27F"></div>
        <div class="particle" style="--i: 3; --color: #DE8F4F"></div>
        <div class="particle" style="--i: 4; --color: #D0516B"></div>
        <div class="particle" style="--i: 5; --color: #5686F2"></div>
        <div class="particle" style="--i: 6; --color: #D53EF3"></div>
      </div>
  </button>`;
  title.appendChild(span);
  title.appendChild(like_btn);
  li.appendChild(title);
  li.appendChild(img);
  li.appendChild(p);
  share_trip_list.appendChild(li);
}

if (parsedShareTrips !== null) {
  parsedShareTrips.forEach(showShareTrip);
}

let modify_share_trips = [];

for (let i = 0; i < parsedShareTrips.length; i++) {
  for (let j = 0; j < parsedShareTrips.length; j++) {
    const li = document.querySelectorAll("li");
    const p = document.querySelectorAll("p");
    p[i].addEventListener("click", () => {
      if (li[i].id === String(parsedShareTrips[j].id)) {
        localStorage.setItem("share_title", parsedShareTrips[j].title);
        localStorage.setItem("share_id", parsedShareTrips[j].id);
        localStorage.setItem("share_story", parsedShareTrips[j].story);
        localStorage.setItem(
          "share_expenditure",
          JSON.stringify(parsedShareTrips[j].expenditure)
        );
        console.log(parsedShareTrips[j].expenditure);
        localStorage.setItem("share_username", parsedShareTrips[j].username);
        localStorage.setItem("share_img", parsedShareTrips[j].img);

        const modify_share_trip = {
          title: parsedShareTrips[j].title,
          story: parsedShareTrips[j].story,
          expenditure: parsedShareTrips[j].expenditure,
        };
        modify_share_trips.push(modify_share_trip);
        localStorage.setItem(
          "modify_share_trips",
          JSON.stringify(modify_share_trip)
        );
        localStorage.setItem("modify_id", parsedShareTrips[j].id);
      }
    });
  }
}

const like_btn = document.querySelectorAll(".like_btn");
let like_cnt = [];

for (let i = 0; i < parsedShareTrips.length; i++) {
  const savedLikeCnt = localStorage.getItem(
    `${parsedShareTrips[i].id}'s like_cnt`
  );
  const parsedLikeCnt = JSON.parse(savedLikeCnt);
  console.log(JSON.parse(parsedLikeCnt));
  like_btn[i].addEventListener("click", (evnet) => {
    const username = localStorage.getItem("username_inUse");
    const like_username =
      evnet.target.parentElement.parentElement.parentElement.innerText.split(
        "'"
      )[0];
    const like_id =
      evnet.target.parentElement.parentElement.parentElement.parentElement.id;
    if (savedLikeCnt !== null && !savedLikeCnt.includes(like_username)) {
      console.log("1 들어옴");
      console.log(savedLikeCnt);
      console.log(like_username);
      like_cnt.push(username);
      localStorage.setItem(`${like_id}'s like_cnt`, JSON.stringify(like_cnt));
    } else if (savedLikeCnt === null) {
      console.log("2 들어옴");
      like_cnt.push(username);
      localStorage.setItem(`${like_id}'s like_cnt`, JSON.stringify(like_cnt));
    }
  });
  if (savedLikeCnt !== null) {
    const parsedLikeCnt = JSON.parse(savedLikeCnt);
    like_cnt = parsedLikeCnt;
  }
}
