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
  $file.setAttribute("multiple", "");
  $form.appendChild($file);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const pasredToDos = JSON.parse(savedToDos);
  toDos = pasredToDos;
  pasredToDos.forEach(paintSaveToDo);
}

const file = document.querySelector("input[type=file]");

file.classList.add("file");

file.addEventListener("change", () => {

  const value = `../img/${ file.files[0].name }`
  localStorage.setItem("img", value);
  // const img = document.createElement("img");
  // img.setAttribute("src", value);
  // const $li = document.querySelector("li");
  // $li.appendChild(img);

})


// const file = document.querySelector("input[type=file]");

// file.classList.add("hi");

// file.addEventListener("change", () => {
//   console.log(file.value);
// })


// $file.classList.add("fileClass");

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