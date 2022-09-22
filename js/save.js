const $showToDoList = document.getElementById("showtodo-list");

const info_username = localStorage.getItem("info_username");

const parsedId = JSON.parse(localStorage.getItem(`${ info_username }'s saveIds`));

const title = localStorage.getItem("title");

function goDetail() {
  window.location.href = "../html/detail.html"
}

function paintShowToDo(showToDo) {
  const getData = JSON.parse(localStorage.getItem(`${ info_username }'s ${ showToDo }'s value`));
  console.log(`${ info_username }'s ${ showToDo }'s value`);
  console.log(showToDo);
  console.log(localStorage.getItem(`${ info_username }'s ${ showToDo }'s value`));
  console.log(getData);
  const $li = document.createElement("li");
  const $img = document.createElement("img");
  const $p = document.createElement("p");
  $li.id = getData.id;
  $li.appendChild($img);
  $li.appendChild($p);
  $img.addEventListener("click", goDetail);
  $p.addEventListener("click", goDetail);
  $showToDoList.appendChild($li);
  const imgFile = getData.img;
  $img.setAttribute("src", imgFile);
  $p.innerText = getData.text;
}

if (parsedId !== null) {
  parsedId.forEach(paintShowToDo);
}
