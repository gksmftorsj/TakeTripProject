const share_trip_list = document.querySelector("#share_trip_list");

const parsedShareTrips = JSON.parse(localStorage.getItem("share_trips"));

function showShareTrip(shareTrip) {
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
  const parsedReviewCnt = JSON.parse(localStorage.getItem(`${ shareTrip.id }'s reviews`));
  const parsedLikeCnt = JSON.parse(localStorage.getItem(`${ shareTrip.id }'s like_cnt`));
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
  li.id = shareTrip.id;
  img.setAttribute("src", shareTrip.img);
  img.classList.add("share_img");
  p.innerText = shareTrip.title;
  p.addEventListener("click", () => {
    window.location.href = "../html/detailShare.html";
  });
  span.innerText = `${ shareTrip.username }'s trip`;
  span.classList.add("username");

  review_like_cnt.appendChild(review_cnt);
  review_like_cnt.appendChild(like_cnt);
  title.appendChild(span);
  title.appendChild(review_like_cnt);
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
