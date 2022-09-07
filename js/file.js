const $showToDoList = document.getElementById("showtodo-list");

let textImg = [];

function paintShowToDo(showToDo) {
  const $li = document.createElement("li");
  const $img = document.createElement("img");
  const $p = document.createElement("p");
  $p.innerText = showToDo.text;
  $li.appendChild($p);
  $li.appendChild($img);
  const imgFile = showToDo.img;
  $img.setAttribute("src", imgFile);
  $showToDoList.appendChild($li);
}

const text = localStorage.getItem("text");

if (text !== null) {
  const parsedText = JSON.parse(text);
  textImg = parsedText;
  parsedText.forEach(paintShowToDo);
}

// const main = document.querySelector("main");

// function paintSavedData() {}
// const img = document.createElement("img");
// const imgFile = localStorage.getItem("img");
// img.setAttribute("src", imgFile);
// main.appendChild(img);

// if (imgFile !== null) {
//   const pasredToDoImg = JSON.parse(imgFile);
// }
