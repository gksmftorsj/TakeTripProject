{
  // 공유취소버튼
  let cancel_share_trips = [];
  let cancel_val_share = [];

  const parsedShareTrips = JSON.parse(localStorage.getItem("share_trips"));
  const parsedValShare = JSON.parse(localStorage.getItem("val_share"));

  const share_cancel_btn = document.querySelector(".share_cancel_btn");

  function cancelShareTrip() {
    for (let i = 0; i < parsedShareTrips.length; i++) {
      const share_id = localStorage.getItem("share_id");
      const parsedId = parsedShareTrips[i].id;
      if (share_id === parsedId) {
        cancel_share_trips = parsedShareTrips.filter(
          (trip) => trip.id !== share_id
        );
        cancel_val_share = parsedValShare.filter(
          (val_share) => val_share !== share_id
        );
        localStorage.setItem("share_trips", JSON.stringify(cancel_share_trips));
        localStorage.setItem("val_share", JSON.stringify(cancel_val_share));
        localStorage.removeItem(`${share_id}'s like_cnt`);
        localStorage.removeItem(`${share_id}'s reviews`);
      }
    }
  }

  // 삭제버튼
  let delete_trips = [];
  let delete_saved_id = [];
  const parsedTrips = JSON.parse(localStorage.getItem(`${username}'s trips`));
  const parsedIdList = JSON.parse(
    localStorage.getItem(`${username}'s id_list`)
  );

  const delete_btn = document.querySelector(".delete_btn");

  function deleteToDo() {
    for (let i = 0; i < parsedTrips.length; i++) {
      const delete_id = localStorage.getItem("detail_id");
      const parsedId = parsedTrips[i].id;
      console.log(delete_id);
      console.log(typeof parsedId);
      if (delete_id === String(parsedId)) {
        delete_trips = parsedTrips.filter(
          (trip) => trip.id !== parseInt(delete_id)
        );
        localStorage.removeItem(`${username}'s ${delete_id}'s trip`);
        localStorage.removeItem(`${username}'s ${delete_id}'s expenditure`);
        localStorage.removeItem(`${delete_id}'s like_cnt`);
        localStorage.setItem(
          `${username}'s trips`,
          JSON.stringify(delete_trips)
        );
        delete_saved_id = parsedIdList.filter((trip) => trip !== delete_id);
        localStorage.setItem(
          `${username}'s id_list`,
          JSON.stringify(delete_saved_id)
        );
        cancelShareTrip();
        window.location.href = "../index.html";
        alert("삭제되었습니다.");
      }
    }
  }

  delete_btn.addEventListener("click", () => {
    const val_pw = prompt("비밀번호를 입력하세요");
    if (
      localStorage.getItem("kakaoLogin") === null &&
      localStorage.getItem("naverLogin") === null
    ) {
      if (val_pw === localStorage.getItem("pw_inUse")) {
        deleteToDo();
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else if (
      localStorage.getItem("kakaoLogin") === null &&
      localStorage.getItem("naverLogin") !== null
    ) {
      const val_email = prompt("이메일을 입력하세요");
      if (val_email === localStorage.getItem("email_inUse")) {
        deleteToDo();
      } else {
        alert("이메일이 틀렸습니다.");
      }
    } else if (
      localStorage.getItem("kakaoLogin") !== null &&
      localStorage.getItem("naverLogin") === null
    ) {
      const val_email = prompt("이메일을 입력하세요");
      if (val_email === localStorage.getItem("email_inUse")) {
        deleteToDo();
      } else {
        alert("이메일이 틀렸습니다.");
      }
    }
  });

  share_cancel_btn.addEventListener("click", () => {
    cancelShareTrip();
    window.location.href = "../index.html";
    alert("공유가 취소되었습니다.");
  });
}

{
  // 수정버튼
  document.querySelector(".modify_btn").addEventListener("click", () => {
    window.location.href = "../html/write.html";
    const share_id = localStorage.getItem("share_id");
    localStorage.setItem("click_id", share_id);
  });
}
