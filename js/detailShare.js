const shareTitle = localStorage.getItem("shareTitle");
const shareUsername = localStorage.getItem("shareUsername");
const shareText = localStorage.getItem("shareText");
const shareExpenditure = localStorage.getItem("shareExpenditure");
const shareImg = localStorage.getItem("shareImg");
const shareId = localStorage.getItem("shareId");

const expenditureBox = document.querySelector(".expenditureBox");

const parsedExpenditure = JSON.parse(shareExpenditure);

if (parsedExpenditure !== null) {
  let totalExpense = 0;
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

const savedUsername = localStorage.getItem("info_username");

if (savedUsername === shareUsername) {
  console.log("hello");
  const btnBox = document.createElement("div");
  btnBox.classList.add("btnBox");
  const modifyBtn = document.createElement("button");
  modifyBtn.innerHTML = `수정하기<i class="fa-regular fa-pen-to-square"></i>`;
  modifyBtn.addEventListener("click", () => {
    window.location.href = "../html/write.html";
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `삭제하기<i class="fa-solid fa-xmark"></i>`;
  const shareCancelBtn = document.createElement("button");
  shareCancelBtn.innerText = "공유취소하기";
  const cancelImg = document.createElement("img");
  cancelImg.setAttribute("src", "../img/share_cancel.png");
  shareCancelBtn.appendChild(cancelImg);

  const top_bottom_right = document.querySelector(".top-bottom-right");

  btnBox.appendChild(modifyBtn);
  btnBox.appendChild(deleteBtn);
  btnBox.appendChild(shareCancelBtn);
  top_bottom_right.appendChild(btnBox);
}
