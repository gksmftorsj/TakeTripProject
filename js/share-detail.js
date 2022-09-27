const share_title = localStorage.getItem("share_title");
const share_username = localStorage.getItem("share_username");
const share_img = localStorage.getItem("share_img");
const share_story = localStorage.getItem("share_story");
const share_expenditure = localStorage.getItem("share_expenditure");
const share_id = localStorage.getItem("share_id");

const detail_expenditure = document.querySelector(".detail_expenditure");

const parsedExpenditure = JSON.parse(share_expenditure);

if (parsedExpenditure !== null) {
  let totalExpense = 0;
  for (let i = 0; i < parsedExpenditure.length; i++) {
    const expenditure_flex = document.createElement("expenditure_flex");
    expenditure_flex.setAttribute("class", "expenditure_flex");
    const detail = document.createElement("p");
    const expense = document.createElement("p");
    detail.innerText = `${ parsedExpenditure[i].detail } :`;
    expenditure_flex.appendChild(detail);
    expense.innerText = `${ parseInt(
      parsedExpenditure[i].expense
    ).toLocaleString() }원`;
    expenditure_flex.appendChild(expense);
    detail_expenditure.appendChild(expenditure_flex);
    totalExpense = totalExpense + parseInt(parsedExpenditure[i].expense);
  }
  const total = document.createElement("p");
  total.classList.add("total_expenditure");
  total.innerText = `총 지출액: ${ totalExpense.toLocaleString() }원`;
  detail_expenditure.appendChild(total);
}

document.querySelector(".share_title").innerText = share_title;
document.querySelector(".share_username").innerText = share_username;
document.querySelector(".detail_img").setAttribute("src", share_img);
document.querySelector(".detail_story").innerText = share_story;

const username = localStorage.getItem("username_inUse");

if (username === share_username) {
  const btn_container = document.createElement("div");
  btn_container.classList.add("btn_container");
  const modify_btn = document.createElement("button");
  modify_btn.classList.add("modify_btn");
  modify_btn.innerHTML = `수정하기<i class="fa-regular fa-pen-to-square"></i>`;
  const delete_btn = document.createElement("button");
  delete_btn.classList.add("delete_btn");
  delete_btn.innerHTML = `삭제하기<i class="fa-solid fa-xmark"></i>`;
  const share_cancel_btn = document.createElement("button");
  share_cancel_btn.innerText = "공유취소하기";
  share_cancel_btn.classList.add("share_cancel_btn");
  const cancel_img = document.createElement("img");
  cancel_img.setAttribute("src", "../img/share_cancel.png");
  share_cancel_btn.appendChild(cancel_img);

  const top_bottom_right = document.querySelector(".top_bottom_right");

  btn_container.appendChild(modify_btn);
  btn_container.appendChild(delete_btn);
  btn_container.appendChild(share_cancel_btn);
  top_bottom_right.appendChild(btn_container);
}
