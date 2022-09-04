const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const dateFromValue = document.getElementById("dateFrom");
const dateToValue = document.getElementById("dateTo");
const stateValue = document.getElementById("state");
const cityValue = document.getElementById("city");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
  const btn = document.createElement("button");
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = `${dateFromValue.vlaue}~${dateToValue}/${stateValue} ${cityValue}`;
  toDoForm.vlaue;
  $state.value = "시/도 선택";
  $city.value = "군/구 선택";
  $dateForm.value = "";
  $dateTo.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
