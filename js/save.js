const $showToDoList = document.getElementById("showtodo-list");

const parsedId = JSON.parse(localStorage.getItem("saveIds"));

for (let i = 0; i <= parsedId.length; i++) {
  const $li = document.querySelectorAll("li");
}

function paintShowToDo(showToDo) {
  const getData = JSON.parse(localStorage.getItem(`${showToDo}'s value`));
  const $li = document.createElement("li");
  const $img = document.createElement("img");
  const $p = document.createElement("p");
  $li.id = getData.id;
  $li.classList.add(`remove${getData.id}`);
  $li.appendChild($img);
  $li.appendChild($p);
  $showToDoList.appendChild($li);
  const imgFile = getData.img;
  $img.setAttribute("src", imgFile);
  $p.innerText = getData.text;
}

if (parsedId !== null) {
  parsedId.forEach(paintShowToDo);
}
