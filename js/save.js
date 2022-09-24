const $showToDoList = document.getElementById("showtodo-list");

const info_username = localStorage.getItem("info_username");

const parsedId = JSON.parse(localStorage.getItem(`${info_username}'s saveIds`));

const title = localStorage.getItem("title");

function paintShowToDo(showToDo) {
  const getData = JSON.parse(
    localStorage.getItem(`${info_username}'s ${showToDo}'s value`)
  );
  console.log(`${info_username}'s ${showToDo}'s value`);
  console.log(showToDo);
  console.log(getData);
  const $li = document.createElement("li");
  const $img = document.createElement("img");
  const $p = document.createElement("p");
  $li.id = getData.id;
  $li.appendChild($img);
  $li.appendChild($p);
  $p.addEventListener("click", () => {
    window.location.href = "../html/detail.html";
  });
  $showToDoList.appendChild($li);
  const imgFile = getData.img;
  $img.setAttribute("src", imgFile);
  $img.classList.add("allImg");
}

if (parsedId !== null) {
  parsedId.forEach(paintShowToDo);
}

const todos = JSON.parse(localStorage.getItem(`${info_username}'s todos`));

for (let i = 0; i < todos.length; i++) {
  for (let j = 0; j < parsedId.length; j++) {
    const li = document.querySelectorAll("li");
    const p = document.querySelectorAll("p");
    if (String(todos[i].id) === li[j].id) {
      console.log("제대로 들어옴");
      const imgTitle = todos[i].text;
      p[j].innerText = imgTitle;
      p[j].addEventListener("click", (event) => {
        localStorage.setItem("detailTitle", event.target.innerText);
        localStorage.setItem("detailId", event.target.parentElement.id);
        localStorage.setItem("modifyId", event.target.parentElement.id);
        localStorage.setItem("title", imgTitle);
      });
    }
  }
}
