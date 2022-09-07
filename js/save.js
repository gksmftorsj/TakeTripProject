const $saveToDoList = document.getElementById("savetodo-list");

const TODOS_KEY = "todos";

let toDos = [];

<<<<<<< HEAD
// function deleteToDo(event) {
//   const div = event.target.parentElement;
//   console.log(event);
// }

function paintSaveToDo(saveTodo) {
  const $div = document.createElement("div");
  $saveToDoList.appendChild($div);
  $div.id = saveTodo.id;
  const $li = document.createElement("li");
=======
function paintSaveToDo(saveTodo) {
  const $div = document.createElement("div");
  $saveToDoList.appendChild($div);
  const $li = document.createElement("li");
  $li.id = saveTodo.id;
>>>>>>> 9ec0f26fe86663d82d56108eb6b2ee12ba494fe9
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
<<<<<<< HEAD
  // paresdToDos의 값을 paintSaveToDo에 입력하면 parsedToDos에서 text만 가져와 사용
=======
>>>>>>> 9ec0f26fe86663d82d56108eb6b2ee12ba494fe9
  pasredToDos.forEach(paintSaveToDo);
}

const file = document.querySelector("input[type=file]");

file.classList.add("file");

<<<<<<< HEAD
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
=======
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
>>>>>>> 9ec0f26fe86663d82d56108eb6b2ee12ba494fe9
