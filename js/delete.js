const deleteUsername = localStorage.getItem("info_username");

// const TODOS_KEY = `${ id }'s todos`;

let deleteToDos = [];

let deleteSaveIds = [];

const parsedToDos = JSON.parse(localStorage.getItem(`${ deleteUsername }'s todos`));

const parsedSaveIds = JSON.parse(localStorage.getItem(`${ deleteUsername }'s saveIds`));

const deleteBtn = document.querySelector(".removeBtn");

// li의 아이디와 선택된 값을 아이디가 같으면 li제거

function deleteToDo() {
  // const deleteLi = document.querySelectorAll("li");
  console.log("1번 들어옴");
  for (let i = 0; i < parsedToDos.length; i++) {
    console.log("2번 들어옴");
    const deleteId = localStorage.getItem("detailId");
    const parsedId = parsedToDos[i].id;
    console.log(deleteId);
    console.log(typeof parsedId);
    if (deleteId === String(parsedId)) {
      console.log("3번 들어옴");
      deleteToDos = parsedToDos.filter((toDo) => toDo.id !== parseInt(deleteId));
      console.log(typeof parsedToDos);
      console.log(typeof parsedToDos[i]);
      console.log(parsedToDos);
      localStorage.removeItem(`${ deleteUsername }'s ${ deleteId }'s value`);
      localStorage.removeItem(`${ deleteUsername }'s ${ deleteId }'s expenditure`);
      localStorage.setItem(`${ deleteUsername }'s todos`, JSON.stringify(deleteToDos));
      console.log(typeof parsedSaveIds[i]);
      console.log(parsedSaveIds);
      deleteSaveIds = parsedSaveIds.filter((toDo) => toDo !== deleteId);
      localStorage.setItem(`${ deleteUsername }'s saveIds`, JSON.stringify(deleteSaveIds));
      window.location.href = "../index.html"
    }
  }
}

deleteBtn.addEventListener("click", deleteToDo);

document.querySelector(".modifyBtn").addEventListener("click", () => {

  window.location.href = "../html/write.html";
})