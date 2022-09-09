const $saveToDoList = document.getElementById("savetodo-list");

const TODOS_KEY = "todos"; // 여기서 삭제되면 index에서도 삭제 되어야 하기 때문에 같은 keyName사용

let toDos = [];

// localStorage에 새로운 배열 다시 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteSavedToDo(event) {
  // 제거 버튼 부모의 부모 요소인 li를 찾고 제거
  const li = event.target.parentElement.parentElement;
  li.remove();
  // 저장된 toDos의 id와 현재 id가 같지 않으면 새로 저장
  // 즉 제거된 li의 id가 있으면 toDos에 새로 저장
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  saveToDos();
}

function paintSaveToDo(saveTodo) {
  const $li = document.createElement("li"); // li 생성
  $li.id = saveTodo.id; // index li와 같은 id 받아오기
  const $savedDiv = document.createElement("div"); // savedDiv 생성
  $savedDiv.classList.add("savedDiv");
  const $inputDiv = document.createElement("div"); // savedDiv 생성
  $inputDiv.classList.add("inputDiv");
  const $span = document.createElement("span"); // span 생성
  $span.innerText = saveTodo.text;
  const $button = document.createElement("button"); // button 생성
  $button.innerText = "❌";
  $button.addEventListener("click", deleteSavedToDo);
  const $text = document.createElement("input"); // text 생성
  $text.setAttribute("type", "text");
  const $submit = document.createElement("input"); // submit 생성
  $submit.setAttribute("type", "submit");
  $submit.setAttribute("value", "저장");
  const $file = document.createElement("input"); // file 생성
  $file.setAttribute("type", "file");
  $file.setAttribute("multiple", "");

  $savedDiv.appendChild($span);
  $savedDiv.appendChild($button);

  $inputDiv.appendChild($text);
  $inputDiv.appendChild($submit);
  $inputDiv.appendChild($file);

  $li.appendChild($savedDiv);
  $li.appendChild($inputDiv);
  // li>(savedDiv>span and btn) and (inputDiv>text>submit>file)
  $saveToDoList.appendChild($li);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const pasredToDos = JSON.parse(savedToDos);
  toDos = pasredToDos;
  // paresdToDos의 값을 paintSaveToDo에 입력하면 parsedToDos에서 text만 가져와 사용
  pasredToDos.forEach(paintSaveToDo);
}
// --------------------------------------------------
const TEXT_KEY = "text";

let texts = [];

function saveText() {
  localStorage.setItem(TEXT_KEY, JSON.stringify(texts));
}

const savedText = localStorage.getItem(TEXT_KEY);

function handleSubmitBtn(event) {
  event.preventDefault();
  const text = event.target.previousSibling.value;
  event.target.previousSibling.value = ""; // 같은 레벨의 노드 중, 이전 노드를 리턴한다.
  const img = `../uploadimg/${event.target.nextSibling.files[0].name}`;
  event.target.nextSibling.value = ""; // 같은 레벨의 노드 중, 다음 노드를 리턴한다.
  console.log(img);
  const textObj = {
    text: text,
    img: img,
    id: Date.now(),
  };
  texts.push(textObj);
  saveText();
  // const parsedText = JSON.parse(savedText);
  // texts = parsedText;
}

const submit = document.querySelectorAll("input[type=submit]");

for (let i = 0; i < submit.length; i++) {
  submit[i].addEventListener("click", handleSubmitBtn);
}
