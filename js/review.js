const review_cnt = document.querySelector(".review_cnt");
const like_cnt = document.querySelector(".like_cnt");
const review_form = document.querySelector(".review_form");
const review_value = document.querySelector(".review_value");
const reiview_list = document.querySelector(".review_list");

const parsedReviewCnt = JSON.parse(localStorage.getItem(`${ share_id }'s reviews`));

if (parsedReviewCnt !== null) {
  review_cnt.innerText = `댓글(${ parsedReviewCnt.length })`;
} else {
  review_cnt.innerText = `댓글(0)`;
}

const parsedLikeCnt = JSON.parse(localStorage.getItem(`${ share_id }'s like_cnt`));

if (parsedLikeCnt !== null) {
  like_cnt.innerText = `좋아요(${ parsedLikeCnt.length })`;
} else {
  like_cnt.innerText = `좋아요(0)`;
}

const REVIEWS_KEY = `${ share_id }'s reviews`;

let writtenReviews = [];

function saveReviews() {
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(writtenReviews));
}

function deleteReview(event) {
  // 시간을 id 값으로 받기 때문에 같은 초에 여러개 작성 후 삭제하면 그 시간대 댓글이 모두 삭제된다.
  const li = event.target.previousElementSibling;
  const review_field = event.target.parentElement;
  writtenReviews = writtenReviews.filter((review) => review.time !== li.id);
  review_field.remove();
  saveReviews();
  const renderReviewCnt = JSON.parse(localStorage.getItem(`${ share_id }'s reviews`));
  review_cnt.innerText = `댓글(${ renderReviewCnt.length })`;
}

function paintReview(newReview) {
  const li = document.createElement("li");
  li.id = newReview.time;
  const review = document.createElement("p");
  review.classList.add("review");
  review.innerText = newReview.review_value;
  const time = document.createElement("span");
  time.classList.add("time");
  time.innerText = newReview.time;
  const writer = document.createElement("span");
  writer.classList.add("writer");
  writer.innerText = newReview.username;
  const delete_btn = document.createElement("button");
  delete_btn.classList.add("review_delete_btn");
  delete_btn.innerText = "❌";
  delete_btn.addEventListener("click", deleteReview);
  li.appendChild(review);
  li.appendChild(time);
  li.appendChild(writer);
  if (newReview.username === username) {
    const review_field = document.createElement("div");
    review_field.classList.add("review_field");
    reiview_list.appendChild(review_field);
    review_field.appendChild(li);
    review_field.appendChild(delete_btn);
  } else {
    reiview_list.appendChild(li);
  }
}

function handleReviewSubmit(event) {
  event.preventDefault();
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const seconds = ("0" + today.getSeconds()).slice(-2);

  const time_now =
    year +
    "-" +
    month +
    "-" +
    day +
    " / " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  if (review_value.value !== "") {
    const newReviewObj = {
      review_value: review_value.value,
      time: time_now,
      username: username,
    };
    writtenReviews.push(newReviewObj);
    paintReview(newReviewObj);
    saveReviews();
  }

  const renderReviewCnt = JSON.parse(localStorage.getItem(`${ share_id }'s reviews`));
  review_cnt.innerText = `댓글(${ renderReviewCnt.length })`;
  review_value.value = "";
  review_value.focus();
}

review_form.addEventListener("submit", handleReviewSubmit);

{
  const savedReviews = localStorage.getItem(REVIEWS_KEY);

  if (savedReviews !== null) {
    const parsedReviews = JSON.parse(savedReviews);
    writtenReviews = parsedReviews;
    parsedReviews.forEach(paintReview);
  }

  const like_btn = document.querySelector(".like_btn");
  const LIKE_CNT_KEY = `${ share_id }'s like_cnt`;
  let like_cnt = [];

  function handleLikeBtn() {

    const savedLikeCnt = localStorage.getItem(LIKE_CNT_KEY);

    if (savedLikeCnt === null) {
      like_cnt.push(username);
      localStorage.setItem(LIKE_CNT_KEY, JSON.stringify(like_cnt))
    } else if (savedLikeCnt !== null && !savedLikeCnt.includes(username)) {
      like_cnt.push(username);
      localStorage.setItem(LIKE_CNT_KEY, JSON.stringify(like_cnt))
    } else {
      alert("이미 좋아요를 누르셨습니다.");
      return
    }
    const renderLikeCnt = JSON.parse(localStorage.getItem(`${ share_id }'s like_cnt`));
    console.log(renderLikeCnt);
    document.querySelector(".like_cnt").innerText = `좋아요(${ renderLikeCnt.length })`;
  }

  like_btn.addEventListener("click", handleLikeBtn);

  const savedLikeCnt = localStorage.getItem(LIKE_CNT_KEY);

  if (savedLikeCnt !== null) {
    const parsedLikeCnt = JSON.parse(savedLikeCnt);
    like_cnt = parsedLikeCnt;
  }
}
