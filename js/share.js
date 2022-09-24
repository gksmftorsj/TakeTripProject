const $shareToDoList = document.getElementById("sharetodo-list");

const paredShareData = JSON.parse(localStorage.getItem("shareData"));

// console.log(paredShareData);

function paintShareToDo(paredShareData) {
  console.log(paredShareData.title);
  const $li = document.createElement("li");
  const $img = document.createElement("img");
  const $p = document.createElement("p");
  const $span = document.createElement("spna");
  $span.innerText = paredShareData.username;
  $img.setAttribute("src", paredShareData.img);
  $img.classList.add("shareImg");
  $p.innerText = paredShareData.title;
  $li.appendChild($span);
  $li.appendChild($img);
  $li.appendChild($p);
  $shareToDoList.appendChild($li);
}

if (paredShareData !== null) {
  paredShareData.forEach(paintShareToDo);
}
