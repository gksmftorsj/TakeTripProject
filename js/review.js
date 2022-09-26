const review_form = document.querySelector(".review_form");
const review_value = document.querySelector(".review_value");
const reiview_list = document.querySelector(".review_list");

const REVIEWS_KEY = `${ share_id }'s reviews`

let writtenReviews = [];

function saveReviews() {
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(writtenReviews));
}

function deleteReview(event) {
  const li = event.target.parentElement;
  writtenReviews = writtenReviews.filter((review) => review.time !== li.id);
  li.remove();
  saveReviews();
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
  const writer = document.createElement("span")
  writer.classList.add("writer")
  writer.innerText = newReview.username;
  const delete_btn = document.createElement("button");
  delete_btn.classList.add("delete_btn")
  delete_btn.innerText = "❌";
  delete_btn.addEventListener("click", deleteReview);
  li.appendChild(review)
  li.appendChild(time);
  li.appendChild(writer);
  li.appendChild(delete_btn);
  reiview_list.appendChild(li);
}



function handleReviewSubmit(event) {
  event.preventDefault();
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const hours = ('0' + today.getHours()).slice(-2);
  const minutes = ('0' + today.getMinutes()).slice(-2);
  const seconds = ('0' + today.getSeconds()).slice(-2);

  const time_now = year + '-' + month + '-' + day + ' / ' + hours + ':' + minutes + ':' + seconds;

  if (username === share_username && review_value.value !== "") {
    const newReviewObj = {
      review_value: review_value.value,
      time: time_now,
      username: "나",
    }
    writtenReviews.push(newReviewObj);
    paintReview(newReviewObj);
    saveReviews();
  } else if (username !== share_username && review_value.value !== "") {
    const newReviewObj = {
      review_value: review_value.value,
      time: time_now,
      username: username,
    }
    writtenReviews.push(newReviewObj);
    paintReview(newReviewObj);
    saveReviews();
  }
  review_value.value = "";
}

review_form.addEventListener("submit", handleReviewSubmit);

const savedReviews = localStorage.getItem(REVIEWS_KEY);

if (savedReviews !== null) {
  const parsedReviews = JSON.parse(savedReviews);
  writtenReviews = parsedReviews;
  parsedReviews.forEach(paintReview);
}