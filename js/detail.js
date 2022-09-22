const title = localStorage.getItem("detailTitle");

const h1 = document.querySelector("h1");

h1.innerText = title;

const info_username = localStorage.getItem("info_username");

const id = localStorage.getItem("detailId");

const story = localStorage.getItem(`${info_username}'s ${id}'s value`);

const h2 = document.querySelector("h2");

h2.innerText = JSON.parse(story).text;

const expenditureBox = document.querySelector(".expenditureBox");

const expenditure = localStorage.getItem(
  `${info_username}'s ${id}'s expenditure`
);

const parsedExpenditure = JSON.parse(expenditure);

for (let i = 0; i < parsedExpenditure.length; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "flex");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.innerText = `${parsedExpenditure[i].detail} :`;
  div.appendChild(p1);
  p2.innerText = parsedExpenditure[i].expense;
  div.appendChild(p2);
  expenditureBox.appendChild(div);
}
