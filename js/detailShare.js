const shareTitle = localStorage.getItem("shareTitle");
const shareUsername = localStorage.getItem("shareUsername");
const shareText = localStorage.getItem("shareText");
const shareExpenditure = localStorage.getItem("shareExpenditure");
const shareImg = localStorage.getItem("shareImg");
const shareId = localStorage.getItem("shareId");

const parsedExpenditure = JSON.parse(shareExpenditure);

if (parsedExpenditure !== null) {
  let totalExpense = 0;
  const expenditureBox = document.querySelector(".expenditureBox");
  for (let i = 0; i < parsedExpenditure.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "flex");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.innerText = `${parsedExpenditure[i].detail} :`;
    div.appendChild(p1);
    p2.innerText = `${parseInt(
      parsedExpenditure[i].expense
    ).toLocaleString()}원`;
    div.appendChild(p2);
    expenditureBox.appendChild(div);
    totalExpense = totalExpense + parseInt(parsedExpenditure[i].expense);
  }
  const p3 = document.createElement("p");
  p3.classList.add("totalExpense");
  p3.innerText = `총 지출액: ${totalExpense.toLocaleString()}원`;
  expenditureBox.appendChild(p3);
}

document.querySelector(".shareUsername").innerText = shareUsername;
document.querySelector(".title").innerText = shareTitle;
document.querySelector(".detailImg").setAttribute("src", shareImg);
document.querySelector(".shareUsername").innerText = shareUsername;
document.querySelector(".story").innerText = shareText;
document.querySelector(".shareUsername").innerText = shareUsername;
