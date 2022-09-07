<<<<<<< HEAD
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
=======
// const $saveToDoList = document.getElementById("savetodo-list");

// const TODOS_KEY = "todos";

// let toDos = [];

// function paintSaveToDo(saveTodo) {
//   const $div = document.createElement("div");
//   $saveToDoList.appendChild($div);
//   const $li = document.createElement("li");
//   $li.id = saveTodo.id;
//   const $span = document.createElement("span");
//   $span.innerText = saveTodo.text;
//   const $button = document.createElement("button");
//   $button.innerText = "❌";
//   // $button.addEventListener("click", deleteToDo);
//   $li.appendChild($span);
//   $li.appendChild($button);
//   $div.appendChild($li);
//   const $form = document.createElement("form");
//   $div.appendChild($form);
//   const $text = document.createElement("input");
//   $text.setAttribute("type", "text");
//   $form.appendChild($text);
//   const $submit = document.createElement("input");
//   $submit.setAttribute("type", "submit");
//   $submit.setAttribute("value", "저장");
//   $form.appendChild($submit);
//   const $file = document.createElement("input");
//   $file.setAttribute("type", "file");
//   $form.appendChild($file);
// }

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos !== null) {
//   const pasredToDos = JSON.parse(savedToDos);
//   toDos = pasredToDos;
//   pasredToDos.forEach(paintSaveToDo);
// }
// ===========================================
// const output = document.querySelector('.output');
// const myFiles = document.querySelector("#myfiles");
// const body = document.querySelector('body');

// function logFilenames() {
//   const fileInput = document.querySelector("#myfiles");
//   const files = fileInput.files;
//   // const fileListLength = files.length;
//   // for (let i = 0; i < fileListLength; i++) {
//   //   output.innerText = `${ output.innerText }\n${ files.item(i).name }`;
//   // }
//   const file = `../img/${ files[0].name }`;
//   const img = document.createElement("img");
//   img.setAttribute("src", file);
//   body.appendChild(img);
// }

// myFiles.addEventListener("change", logFilenames);

const img = document.createElement("img");
const main = document.querySelector("main");

const imgFile = localStorage.getItem("img");
img.setAttribute("src", imgFile)
main.appendChild(img);

>>>>>>> 9ec0f26fe86663d82d56108eb6b2ee12ba494fe9
