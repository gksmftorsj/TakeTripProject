const $showToDoList = document.getElementById("showtodo-list");

const info_username = localStorage.getItem("info_username");

const parsedId = JSON.parse(localStorage.getItem(`${ info_username }'s saveIds`));

const title = localStorage.getItem("title");

function goDetail() {
  window.location.href = "../html/detail.html";
}

function paintShowToDo(showToDo) {
  const getData = JSON.parse(
    localStorage.getItem(`${ info_username }'s ${ showToDo }'s value`)
  );
  const $li = document.createElement("li");
  const $img = document.createElement("img");
  const $p = document.createElement("p");
  $li.id = getData.id;
  $li.appendChild($img);
  $li.appendChild($p);
  $p.addEventListener("click", goDetail);
  $showToDoList.appendChild($li);
  const imgFile = getData.img;
  $img.setAttribute("src", imgFile);
}

if (parsedId !== null) {
  parsedId.forEach(paintShowToDo);
}

for (let i = 0; i < parsedId.length; i++) {
  for (let j = 0; j <= i; j++) {
    for (let k = 0; k <= i; k++) {
      const getTitle = JSON.parse(
        localStorage.getItem(`${ info_username }'s todos`)
      );
      const li = document.querySelectorAll("li");
      const p = document.querySelectorAll("p");
      if (
        String(getTitle[i].id) === li[j].id &&
        li[j].id === p[k].parentElement.id
      ) {
        console.log("제대로 들어옴");
        const imgTitle = getTitle[i].text;
        p[i].innerText = imgTitle;
      }
    }
  }

  const p = document.querySelectorAll("p");

  p[i].addEventListener("click", (event) => {
    localStorage.setItem("detailTitle", event.target.innerText);
    localStorage.setItem("detailId", event.target.parentElement.id);
  });
}
