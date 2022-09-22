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
    } else if (vallidaionIds.includes(vallidaionId)) {
      // saveId값이 saveIds값 안에 있으면 저장X
      file.value = "";
      text.value = "";
      console.log("제대로 들어옴");
      return;
    } else {
      localStorage.setItem(`${ info_username }'s saveIds`, JSON.stringify(saveIds));
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
      localStorage.setItem(`${ info_username }'s saveIds`, JSON.stringify(saveIds));
    } else if (vallidaionIds.includes(vallidaionId)) {
      // saveId값이 saveIds값 안에 있으면 저장X
      file.value = "";
      text.value = "";
      console.log("제대로 들어옴");
      return;
    } else {
      localStorage.setItem(`${ info_username }'s saveIds`, JSON.stringify(saveIds));
      console.log("잘 못 들어옴");
    }
  }
  file.value = "";
  text.value = "";
}

saveBtn.addEventListener("click", saveToDo);

const localId = localStorage.getItem(`${ info_username }'s saveIds`);

if (localId !== null) {
  // console.log(typeof localId);
  const parsedId = JSON.parse(localId);
  // console.log(parsedId);
  saveIds = parsedId;
  // console.log(saveIds);
}
