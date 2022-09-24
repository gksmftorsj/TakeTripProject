const deleteUsername = localStorage.getItem("info_username");

// const TODOS_KEY = `${ id }'s todos`;

let deleteToDos = [];

let deleteSaveIds = [];

const parsedToDos = JSON.parse(
  localStorage.getItem(`${deleteUsername}'s todos`)
);

const parsedSaveIds = JSON.parse(
  localStorage.getItem(`${deleteUsername}'s saveIds`)
);

const deleteBtn = document.querySelector(".removeBtn");

// li의 아이디와 선택된 값을 아이디가 같으면 li제거

function deleteToDo() {
  console.log("1번 들어옴");
  for (let i = 0; i < parsedToDos.length; i++) {
    console.log("2번 들어옴");
    const deleteId = localStorage.getItem("detailId");
    const parsedId = parsedToDos[i].id;
    console.log(deleteId);
    console.log(typeof parsedId);
    if (deleteId === String(parsedId)) {
      console.log("3번 들어옴");
      deleteToDos = parsedToDos.filter(
        (toDo) => toDo.id !== parseInt(deleteId)
      );
      console.log(typeof parsedToDos);
      console.log(typeof parsedToDos[i]);
      console.log(parsedToDos);
      localStorage.removeItem(`${deleteUsername}'s ${deleteId}'s value`);
      localStorage.removeItem(`${deleteUsername}'s ${deleteId}'s expenditure`);
      localStorage.setItem(
        `${deleteUsername}'s todos`,
        JSON.stringify(deleteToDos)
      );
      console.log(typeof parsedSaveIds[i]);
      console.log(parsedSaveIds);
      deleteSaveIds = parsedSaveIds.filter((toDo) => toDo !== deleteId);
      localStorage.setItem(
        `${deleteUsername}'s saveIds`,
        JSON.stringify(deleteSaveIds)
      );
      window.location.href = "../index.html";
      alert("삭제되었습니다.");
    }
  }
}

deleteBtn.addEventListener("click", deleteToDo);

document.querySelector(".modifyBtn").addEventListener("click", () => {
  window.location.href = "../html/write.html";
});

const shareBtn = document.querySelector(".shareBtn");

let shareDatas = [];

let validationShare = [];

function shareToDo() {
  const detailTitle = localStorage.getItem("detailTitle");
  const detailId = localStorage.getItem("detailId");
  const shareValue = JSON.parse(
    localStorage.getItem(`${deleteUsername}'s ${detailId}'s value`)
  );
  const shareExpenditure = JSON.parse(
    localStorage.getItem(`${deleteUsername}'s ${detailId}'s expenditure`)
  );
  // 밑에 savedShareData는 렌더링 될 때 불러오는 것이기 때문에 새로고침이 없으면 항상 null이다
  // 그래서 함수 안에서 새로 불러서 비교해야 한다.
  const renderShareData = localStorage.getItem("shareData");
  const parsedShareData = JSON.parse(renderShareData);

  if (parsedShareData === null) {
    const shareData = {
      username: deleteUsername,
      title: detailTitle,
      text: shareValue.text,
      img: shareValue.img,
      expenditure: shareExpenditure,
      id: detailId,
    };
    shareDatas.push(shareData);
    localStorage.setItem("shareData", JSON.stringify(shareDatas));
    validationShare.push(detailId);
    localStorage.setItem("validationShare", JSON.stringify(validationShare));
    console.log("A들어옴");
    alert("공유되었습니다.");
  } else if (validationShare.includes(detailId)) {
    console.log("B들어옴");
    alert("이미 공유되었습니다.");
    return;
  } else {
    const shareData = {
      username: deleteUsername,
      title: detailTitle,
      text: shareValue.text,
      img: shareValue.img,
      expenditure: shareExpenditure,
      id: detailId,
    };
    console.log(validationShare);
    shareDatas.push(shareData);
    localStorage.setItem("shareData", JSON.stringify(shareDatas));
    validationShare.push(detailId);
    localStorage.setItem("validationShare", JSON.stringify(validationShare));
    console.log("C들어옴");
    alert("공유되었습니다.");
  }
}

const savedShareData = localStorage.getItem("shareData");

if (savedShareData !== null) {
  const parsedShareData = JSON.parse(savedShareData);
  shareDatas = parsedShareData;
}

const savedValidationShare = localStorage.getItem("validationShare");

if (savedValidationShare !== null) {
  const parsedValidationShare = JSON.parse(savedValidationShare);
  validationShare = parsedValidationShare;
}

shareBtn.addEventListener("click", shareToDo);
