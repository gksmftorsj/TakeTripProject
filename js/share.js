const $shareToDoList = document.getElementById("sharetodo-list");

const paredShareData = JSON.parse(localStorage.getItem("shareData"));

function paintShareToDo(paredShareData) {
  const $li = document.createElement("li");
  const $img = document.createElement("img");
  const $p = document.createElement("p");
  const $span = document.createElement("span");
  $li.id = paredShareData.id;
  $span.innerText = `${paredShareData.username}'s story`;
  $span.classList.add("username");
  $img.setAttribute("src", paredShareData.img);
  $img.classList.add("shareImg");
  $p.innerText = paredShareData.title;
  $p.addEventListener("click", () => {
    window.location.href = "../html/detailShare.html";
  });
  $li.appendChild($span);
  $li.appendChild($img);
  $li.appendChild($p);
  $shareToDoList.appendChild($li);
}

if (paredShareData !== null) {
  paredShareData.forEach(paintShareToDo);
}

let modifyShare = [];

for (let i = 0; i < paredShareData.length; i++) {
  for (let j = 0; j < paredShareData.length; j++) {
    const li = document.querySelectorAll("li");
    const p = document.querySelectorAll("p");
    p[i].addEventListener("click", () => {
      if (li[i].id === String(paredShareData[j].id)) {
        localStorage.setItem("shareTitle", paredShareData[j].title);
        localStorage.setItem("shareId", paredShareData[j].id);
        localStorage.setItem("shareText", paredShareData[j].text);
        localStorage.setItem(
          "shareExpenditure",
          JSON.stringify(paredShareData[j].expenditure)
        );
        localStorage.setItem("shareUsername", paredShareData[j].username);
        localStorage.setItem("shareImg", paredShareData[j].img);

        const modifyShareValue = {
          title: paredShareData[j].title,
          text: paredShareData[j].text,
          expenditure: paredShareData[j].expenditure,
        };
        modifyShare.push(modifyShareValue);
        localStorage.setItem("modifyShare", JSON.stringify(modifyShareValue));
      }
    });
  }
}
