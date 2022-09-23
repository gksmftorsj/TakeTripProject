const title = document.querySelector(".writeValue");

const savedTitle = localStorage.getItem("title");

title.innerText = savedTitle;

const text = document.querySelector("textarea");

const file = document.querySelector("input[type=file]");

const saveBtn = document.querySelector(".save-btn");

const savedId = localStorage.getItem("saveId");

const info_username = localStorage.getItem("info_username");

const SAVE_KEY = `${ info_username }'s ${ savedId }'s value`;

let saveIds = [];

const saveId = localStorage.getItem("saveId");

let cnt = 1;

localStorage.setItem("cnt", cnt);
// ----------------------------------------------------------

const plusBtn = document.querySelector(".plus-btn");
const costBox = document.querySelector(".costBox");
const inputTextBox = document.querySelector(".inputTextBox");
const inputCostBox = document.querySelector(".inputCostBox");

function addInput(event) {
  event.preventDefault();
  const inputText = document.createElement("input");
  const inputCost = document.createElement("input");
  inputText.classList.add("detail");
  inputText.setAttribute("placeholder", "지출내역 ex)숙박비");
  inputCost.classList.add("expense");
  inputCost.setAttribute("placeholder", "지출금액 ex)100000");
  inputTextBox.appendChild(inputText);
  inputCostBox.appendChild(inputCost);
  cnt++;
  localStorage.setItem("cnt", cnt);
  inputText.focus();
}

plusBtn.addEventListener("click", addInput);

const minusBtn = document.querySelector(".minus-btn");

function removeInput(event) {
  event.preventDefault();
  if (document.querySelectorAll(".detail")[1] === undefined) {
    return;
  } else {
    inputTextBox.removeChild(inputTextBox.lastElementChild);
    inputCostBox.removeChild(inputCostBox.lastElementChild);
    cnt--;
    localStorage.setItem("cnt", cnt);
    inputTextBox.lastElementChild.focus();
  }
}

minusBtn.addEventListener("click", removeInput);

// ----------------------------------------------------------

function saveToDo(event) {
  event.preventDefault();
  const textValue = text.value;
  if (file.value === "" && textValue === "") {
    alert("값을 입력해주세요.");
  } else if (file.value === "" && textValue !== "") {
    const fileValue = "";
    const saveValues = {
      id: savedId,
      text: textValue,
      img: fileValue,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveValues));
    saveIds.push(savedId);

    const vallidaionIds = localStorage.getItem(`${ info_username }'s saveIds`);
    console.log(vallidaionIds);

    const vallidaionId = localStorage.getItem("saveId");
    console.log(vallidaionId);

    // saveIds값이 null 즉 처음 작성이면 바로 local에 저장
    if (vallidaionIds === null) {
      localStorage.setItem(`${ info_username }'s saveIds`, JSON.stringify(saveIds));
      window.location.href = "../html/saved.html";
    } else if (vallidaionIds.includes(vallidaionId)) {
      // saveId값이 saveIds값 안에 있으면 저장X
      file.value = "";
      text.value = "";
      console.log("제대로 들어옴");
      window.location.href = "../html/saved.html";
    } else {
      localStorage.setItem(
        `${ info_username }'s saveIds`,
        JSON.stringify(saveIds)
      );
      console.log("잘 못 들어옴");
    }
  } else {
    const fileValue = `../uploadimg/${ file.files[0].name }`;
    const saveValues = {
      id: savedId,
      text: textValue,
      img: fileValue,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveValues));
    saveIds.push(savedId);

    const vallidaionIds = localStorage.getItem(`${ info_username }'s saveIds`);
    console.log(vallidaionIds);

    const vallidaionId = localStorage.getItem("saveId");
    console.log(vallidaionId);

    // saveIds값이 null 즉 처음 작성이면 바로 local에 저장
    if (vallidaionIds === null) {
      localStorage.setItem(
        `${ info_username }'s saveIds`,
        JSON.stringify(saveIds)
      );
    } else if (vallidaionIds.includes(vallidaionId)) {
      // saveId값이 saveIds값 안에 있으면 저장X
      file.value = "";
      text.value = "";
      console.log("제대로 들어옴");
      return;
    } else {
      localStorage.setItem(
        `${ info_username }'s saveIds`,
        JSON.stringify(saveIds)
      );
      console.log("잘 못 들어옴");
    }
  }

  // 반복문 돌려서 값 저장

  const cntIndex = localStorage.getItem("cnt");

  let EXPENDITURE_KEY = `${ info_username }'s ${ savedId }'s expenditure`;

  let expenditures = [];

  const detail = document.querySelectorAll(".detail");
  const expense = document.querySelectorAll(".expense");

  for (let i = 0; i < cntIndex; i++) {
    const expenditureDetail = detail[i].value;
    const expenditureExpense = expense[i].value;

    if (detail[i].value === "" || expense[i].value === "") {
      alert("지출내역과 금액을 확인해주세요.");
      return;
    } else {
      const saveExpenditure = {
        detail: expenditureDetail,
        expense: expenditureExpense,
      };

      expenditures.push(saveExpenditure);

      localStorage.setItem(EXPENDITURE_KEY, JSON.stringify(expenditures));
    }

    detail[i].value = "";
    expense[i].value = "";
  }
  file.value = "";
  text.value = "";
  localStorage.removeItem("cnt");
}

saveBtn.addEventListener("click", saveToDo);

const localId = localStorage.getItem(`${ info_username }'s saveIds`);

if (localId !== null) {
  const parsedId = JSON.parse(localId);
  saveIds = parsedId;
}
