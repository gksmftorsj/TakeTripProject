const $showToDoList = document.getElementById("showtodo-list");

const parsedId = JSON.parse(localStorage.getItem("saveIds"));

const title = localStorage.getItem("title");

function paintShowToDo(showToDo) {
  const getData = JSON.parse(localStorage.getItem(`${showToDo}'s value`));
  const $li = document.createElement("li");
  const $img = document.createElement("img");
  const $p = document.createElement("p");
  const $button = document.createElement("button");
  // const $span = document.createElement("span");
  // $span.innerText = title;
  // $li.appendChild($span);
  $button.innerText = "수정하기";
  $li.id = getData.id;
  // $li.classList.add(hi);
  // $li.classList.add(title);
  $li.appendChild($img);
  $li.appendChild($p);
  $li.appendChild($button);
  $button.addEventListener("click", () => {
    window.location.href = "../html/write.html";
  });
  $showToDoList.appendChild($li);
  const imgFile = getData.img;
  $img.setAttribute("src", imgFile);
  $p.innerText = getData.text;
}

if (parsedId !== null) {
  parsedId.forEach(paintShowToDo);
}
