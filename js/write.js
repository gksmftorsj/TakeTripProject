const title = document.querySelector(".writeValue");

const savedTitle = localStorage.getItem("title");

title.innerText = savedTitle;

const text = document.querySelector("textarea");

const file = document.querySelector("input[type=file]");

const saveBtn = document.querySelector(".save-btn");

const savedId = localStorage.getItem("saveId");

const SAVE_KEY = `${savedId}'s value`;

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
    const vallidaionId = JSON.parse(localStorage.getItem("saveIds"));

    if (vallidaionId === null) {
      localStorage.setItem("saveIds", JSON.stringify(saveIds));
    } else {
      for (let i = 0; i <= vallidaionId.length; i++) {
        if (JSON.parse(localStorage.getItem("saveIds"))[i] === saveId) {
          console.log("제대로 들어옴");
          return;
        } else {
          localStorage.setItem("saveIds", JSON.stringify(saveIds));
          console.log("잘 못 들어옴");
        }
      }
    }
  } else {
    const fileValue = `../uploadimg/${file.files[0].name}`;
    const saveValues = {
      id: savedId,
      text: textValue,
      img: fileValue,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveValues));
    saveIds.push(savedId);
    localStorage.setItem("saveIds", JSON.stringify(saveIds));
  }
  file.value = "";
  text.value = "";
}

saveBtn.addEventListener("click", saveToDo);

const localId = localStorage.getItem("saveIds");

if (localId !== null) {
  // console.log(typeof localId);
  const parsedId = JSON.parse(localId);
  // console.log(parsedId);
  saveIds = parsedId;
  // console.log(saveIds);
}
