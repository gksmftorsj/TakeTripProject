const like_trip_list = document.getElementById("like_trip_list");

const username = localStorage.getItem("username_inUse");
const parsedLikeTrips = JSON.parse(localStorage.getItem(`${ username }'s like_trips`));

console.log(parsedLikeTrips);
function showLikeTrip(likeTrip) {
  if (username !== likeTrip.username) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const title = document.createElement("div");
    const review_like_cnt = document.createElement("div");
    const review_cnt = document.createElement("span");
    const like_cnt = document.createElement("span");
    review_cnt.classList.add("review_cnt");
    like_cnt.classList.add("like_cnt");
    const parsedReviewCnt = JSON.parse(localStorage.getItem(`${ likeTrip.id }'s reviews`));
    const parsedLikeCnt = JSON.parse(localStorage.getItem(`${ likeTrip.id }'s like_cnt`));
    review_cnt.innerText = "댓글(0)";
    like_cnt.innerText = "좋아요(0)";
    if (parsedReviewCnt !== null) {
      if (parsedReviewCnt.length !== 0) {
        review_cnt.innerText = "댓글(" + parsedReviewCnt.length + ")";
      }
    }
    if (parsedLikeCnt !== null) {
      if (parsedLikeCnt.length !== 0) {
        like_cnt.innerText = "좋아요(" + parsedLikeCnt.length + ")";
      }
    }
    review_like_cnt.classList.add("review_like_cnt");
    title.classList.add("title");
    li.id = likeTrip.id;
    img.setAttribute("src", likeTrip.img);
    img.classList.add("like_img");
    p.innerText = likeTrip.title;
    p.addEventListener("click", () => {
      window.location.href = "../html/detailShare.html";
    });
    span.innerText = `${ likeTrip.username }'s trip`;
    span.classList.add("username");

    review_like_cnt.appendChild(review_cnt);
    review_like_cnt.appendChild(like_cnt);
    title.appendChild(span);
    title.appendChild(review_like_cnt);
    li.appendChild(title);
    li.appendChild(img);
    li.appendChild(p);
    like_trip_list.appendChild(li);
  }
}

if (parsedLikeTrips !== null) {
  parsedLikeTrips.forEach(showLikeTrip);
}


let modify_share_trips = [];

for (let i = 0; i < parsedLikeTrips.length; i++) {
  for (let j = 0; j < parsedLikeTrips.length; j++) {
    const li = document.querySelectorAll("li");
    const p = document.querySelectorAll("p");
    p[i].addEventListener("click", () => {
      if (li[i].id === String(parsedLikeTrips[j].id)) {
        localStorage.setItem("share_title", parsedLikeTrips[j].title);
        localStorage.setItem("share_id", parsedLikeTrips[j].id);
        localStorage.setItem("share_story", parsedLikeTrips[j].story);
        localStorage.setItem(
          "share_expenditure",
          JSON.stringify(parsedLikeTrips[j].expenditure)
        );
        console.log(parsedLikeTrips[j].expenditure);
        localStorage.setItem("share_username", parsedLikeTrips[j].username);
        localStorage.setItem("share_img", parsedLikeTrips[j].img);

        const modify_share_trip = {
          title: parsedLikeTrips[j].title,
          story: parsedLikeTrips[j].story,
          expenditure: parsedLikeTrips[j].expenditure,
        };
        modify_share_trips.push(modify_share_trip);
        localStorage.setItem(
          "modify_share_trips",
          JSON.stringify(modify_share_trip)
        );
        localStorage.setItem("modify_id", parsedLikeTrips[j].id);
      }
    });
  }
}