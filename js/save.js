const $saveToDoList = document.getElementById("savetodo-list");

const TODOS_KEY = "todos";

let toDos = [];

// function deleteToDo(event) {
//   const div = event.target.parentElement;
//   console.log(event);
// }

function paintSaveToDo(saveTodo) {
  const $div = document.createElement("div");
  $saveToDoList.appendChild($div);
  $div.id = saveTodo.id;
  const $li = document.createElement("li");
  const $span = document.createElement("span");
  $span.innerText = saveTodo.text;
  const $button = document.createElement("button");
  $button.innerText = "❌";
  // $button.addEventListener("click", deleteToDo);
  $li.appendChild($span);
  $li.appendChild($button);
  $div.appendChild($li);
  const $form = document.createElement("form");
  $div.appendChild($form);
  const $text = document.createElement("input");
  $text.setAttribute("type", "text");
  $form.appendChild($text);
  const $submit = document.createElement("input");
  $submit.setAttribute("type", "submit");
  $submit.setAttribute("value", "저장");
  $form.appendChild($submit);
  const $file = document.createElement("input");
  $file.setAttribute("type", "file");
  $file.setAttribute("multiple", "");
  $form.appendChild($file);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const pasredToDos = JSON.parse(savedToDos);
  toDos = pasredToDos;
  // paresdToDos의 값을 paintSaveToDo에 입력하면 parsedToDos에서 text만 가져와 사용
  pasredToDos.forEach(paintSaveToDo);
}

const file = document.querySelector("input[type=file]");

file.classList.add("file");

let toDosImg = [];

function saveToDosImg() {
  localStorage.setItem("img", JSON.stringify(toDosImg));
}

file.addEventListener("change", () => {
  const toDoImg = `../img/${file.files[0].name}`;
  const newTodoObj = {
    text: toDoImg,
    id: Date.now(),
  };
  toDosImg.push(newTodoObj);
  saveToDosImg();
});
