const username = localStorage.getItem("username_inUse");
const id = localStorage.getItem("modify_id");
const title = localStorage.getItem(`${ id }'s title`);

const trip_title = document.querySelector(".trip_title");
trip_title.innerText = title;

const story_form = document.querySelector(".story_form");

let id_list = [];

let cnt = 1;
localStorage.setItem("cnt", cnt);

// ----------------------------------------------------------
// 지출내역 지출 금액 + - 버튼 기능
const plus_btn = document.querySelector(".plus_btn");
const expenditure = document.querySelector(".expenditure");
const detail_container = document.querySelector(".detail_container");
const expense_container = document.querySelector(".expense_container");

function creatExpenditure(input_detail, input_expense) {
  input_detail.classList.add("detail");
  input_expense.classList.add("expense");
  input_detail.setAttribute("placeholder", "지출내역 ex)숙박비");
  input_detail.setAttribute("required", "")
  input_expense.setAttribute("placeholder", "지출금액 ex)100000");
  input_expense.setAttribute("required", "");
  input_expense.setAttribute("pattern", "[0-9]+");
  input_expense.setAttribute("title", "숫자만 입력가능합니다.");
  detail_container.appendChild(input_detail);
  expense_container.appendChild(input_expense);
}

function addExpenditure(event) {
  event.preventDefault();
  const input_detail = document.createElement("input");
  const input_expense = document.createElement("input");
  creatExpenditure(input_detail, input_expense);
  cnt = localStorage.getItem("cnt");
  cnt++;
  localStorage.setItem("cnt", cnt);
  input_detail.focus();
}

plus_btn.addEventListener("click", addExpenditure);

const minus_btn = document.querySelector(".minus_btn");

function removeExpenditure(event) {
  event.preventDefault();
  if (document.querySelectorAll(".detail")[1] === undefined) {
    return;
  } else {
    detail_container.removeChild(detail_container.lastElementChild);
    expense_container.removeChild(expense_container.lastElementChild);
    cnt = localStorage.getItem("cnt");
    cnt--;
    localStorage.setItem("cnt", cnt);
    detail_container.lastElementChild.focus();
  }
}

minus_btn.addEventListener("click", removeExpenditure);

// ----------------------------------------------------------
// storyForm
const story = document.querySelector("textarea");
const file = document.querySelector("input[type=file]");

const TRIP_KEY = `${ username }'s ${ id }'s trip`;
const EXPENDITURE_KEY = `${ username }'s ${ id }'s expenditure`;
const ID_LIST_KEY = `${ username }'s id_list`;

function valId() {
  // 같은 TRIP이 저장되지 않도록 id_list 안에 click_id값이 있으면 click_id값 id_list에 저장되지 않도록 하기
  id_list.push(id);
  const val_id_list = localStorage.getItem(ID_LIST_KEY);
  const val_id = localStorage.getItem("click_id");
  // id_list값이 null 즉 처음 작성이면 바로 local에 저장
  if (val_id_list === null) {
    localStorage.setItem(ID_LIST_KEY, JSON.stringify(id_list));
    window.location.href = "../html/my-story.html";
  } else if (val_id_list.includes(val_id)) {
    // click_id값이 id_list값 안에 있으면 저장 click_id값 id_list에 저장X
    window.location.href = "../html/my-story.html";
  } else {
    // click_id값이 id_list값 안에 없으면 저장 click_id값 id_list에 저장O
    localStorage.setItem(ID_LIST_KEY, JSON.stringify(id_list));
    window.location.href = "../html/my-story.html";
  }
}

function saveTrip(event) {
  event.preventDefault();

  // username's id's expenditure
  const cntIndex = localStorage.getItem("cnt");
  let expenditures = [];
  const detail = document.querySelectorAll(".detail");
  const expense = document.querySelectorAll(".expense");
  let modify_share_trips = [];
  let modify_expenditure = [];
  const parsed_share_trips = JSON.parse(localStorage.getItem("share_trips"));
  const modify_id = localStorage.getItem("modify_id");
  const share_id = localStorage.getItem("share_id");
  console.log(parsed_share_trips);
  for (let i = 0; i < cntIndex; i++) {
    const expenditureDetail = detail[i].value;
    const expenditureExpense = expense[i].value;
    if (detail[i].value === "" || expense[i].value === "") {
      alert("값을 입력해주세요.");
      return;
    } else {
      const saveExpenditure = {
        detail: expenditureDetail,
        expense: expenditureExpense,
        username: username,
      };
      expenditures.push(saveExpenditure);
      localStorage.setItem(EXPENDITURE_KEY, JSON.stringify(expenditures));
      if (parsed_share_trips !== null) {
        console.log("1번 들어옴");
        for (let i = 0; i < parsed_share_trips.length; i++) {
          if (parsed_share_trips[i].id === modify_id) {
            modify_share_trips = parsed_share_trips.filter(
              (trip) => trip.id !== modify_id
            );
            localStorage.setItem(
              "share_trips",
              JSON.stringify(modify_share_trips)
            );
            console.log(JSON.stringify(modify_share_trips));
            modify_expenditure.push(saveExpenditure);
            localStorage.setItem(
              "modify_expenditure",
              JSON.stringify(modify_expenditure)
            );
            console.log(JSON.stringify(modify_expenditure));
          }
        }
      }
    }
  }

  // username's id's trip
  const story_value = story.value;
  const parsedModifyExpenditure = JSON.parse(
    localStorage.getItem("modify_expenditure")
  );
  if (story_value === "" && file.value === "") {
    // 입력값 아무것도 없을 경우
    alert("값을 입력해주세요.");
    return;
  } else {
    const fileValue = `../img/uploadimg/${ file.files[0].name }`;
    const save_values = {
      id: id,
      title: title,
      story: story_value,
      img: fileValue,
    };
    localStorage.setItem(TRIP_KEY, JSON.stringify(save_values));
    valId();
    if (modify_share_trips !== null) {
      for (let i = 0; i < parsed_share_trips.length; i++) {
        if (parsed_share_trips[i].id === modify_id) {
          console.log("2번 들어옴");
          const modify_share_trip = {
            expenditure: parsedModifyExpenditure,
            id: id,
            img: fileValue,
            story: story_value,
            title: title,
            username: username,
          };
          const parsedShareTrips = JSON.parse(
            localStorage.getItem("share_trips")
          );
          parsedShareTrips.push(modify_share_trip);
          console.log(modify_share_trip);
          localStorage.setItem("share_trips", JSON.stringify(parsedShareTrips));
        }
      }
    }
  }
}

story_form.addEventListener("submit", saveTrip);

const savedIdList = localStorage.getItem(ID_LIST_KEY);

if (savedIdList !== null) {
  const parsedIdList = JSON.parse(savedIdList);
  id_list = parsedIdList;
}

//---------------------------------------------------------------------------

{
  // 수정
  const modify_story = document.querySelector(".story");

  const modify_id = localStorage.getItem("modify_id");
  const modify_trip = localStorage.getItem(`${ username }'s ${ modify_id }'s trip`);
  const modify_expenditure = localStorage.getItem(
    `${ username }'s ${ modify_id }'s expenditure`
  );

  const parsedTrip = JSON.parse(modify_trip);
  const parsedExpenditure = JSON.parse(modify_expenditure);

  trip_title.innerText = parsedTrip.title;
  modify_story.innerText = parsedTrip.story;

  function onceExpenditure() {
    const detail = document.querySelector(".detail");
    const expense = document.querySelector(".expense");
    detail.value = parsedExpenditure[0].detail;
    expense.value = parsedExpenditure[0].expense;
  }

  for (let i = 0; i < parsedExpenditure.length; i++) {
    if (parsedExpenditure.length > 1) {
      if (i === 0) {
        onceExpenditure();
      } else {
        const input_detail = document.createElement("input");
        const input_expense = document.createElement("input");
        creatExpenditure(input_detail, input_expense);
        input_detail.value = parsedExpenditure[i].detail;
        input_expense.value = parsedExpenditure[i].expense;
        localStorage.setItem("cnt", parsedExpenditure.length);
      }
    } else {
      onceExpenditure();
    }
  }
}
