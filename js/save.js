const $saveToDoList = document.getElementById("savetodo-list");

const TODOS_KEY = "todos";

let toDos = [];

function paintSaveToDo(saveTodo) {
  const $div = document.createElement("div");
  $saveToDoList.appendChild($div);
  const $li = document.createElement("li");
  $li.id = saveTodo.id;
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
  $form.appendChild($file);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const pasredToDos = JSON.parse(savedToDos);
  toDos = pasredToDos;
  pasredToDos.forEach(paintSaveToDo);
}

// const $form = document.querySelector("form");
// const $input = document.querySelector("input");

// function saveStory(event) {
//   preventDefault();
//   const $p = document.createElement("p");
//   $saveToDoList.appendChild($p);
//   $p.value = $input.value;
// }

// $input.addEventListener("submit", saveStory);