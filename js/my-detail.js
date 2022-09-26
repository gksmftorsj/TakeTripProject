const username = localStorage.getItem("username_inUse");
const id = localStorage.getItem("detail_id");
const title = localStorage.getItem("detail_title");
const expenditure = localStorage.getItem(`${username}'s ${id}'s expenditure`);
const trip = localStorage.getItem(`${username}'s ${id}'s trip`);

const detail_title = document.querySelector(".detail_title");
const detail_story = document.querySelector(".detail_story");
const detail_img = document.querySelector(".detail_img");

detail_title.innerText = title;
detail_story.innerText = JSON.parse(trip).story;
detail_img.setAttribute("src", JSON.parse(trip).img);

const detail_expenditure = document.querySelector(".detail_expenditure");
const parsedExpenditure = JSON.parse(expenditure);
console.log(parsedExpenditure);

if (parsedExpenditure !== null) {
  let total_expenditure = 0;
  for (let i = 0; i < parsedExpenditure.length; i++) {
    const expenditure_flex = document.createElement("div");
    expenditure_flex.setAttribute("class", "expenditure_flex");
    const detail = document.createElement("p");
    const expense = document.createElement("p");
    detail.innerText = `${parsedExpenditure[i].detail} :`;
    expenditure_flex.appendChild(detail);
    expense.innerText = `${parseInt(
      parsedExpenditure[i].expense
    ).toLocaleString()}원`;
    expenditure_flex.appendChild(expense);
    detail_expenditure.appendChild(expenditure_flex);
    total_expenditure =
      total_expenditure + parseInt(parsedExpenditure[i].expense);
  }
  const total = document.createElement("p");
  total.classList.add("total_expenditure");
  total.innerText = `총 지출액: ${total_expenditure.toLocaleString()}원`;
  detail_expenditure.appendChild(total);
}
