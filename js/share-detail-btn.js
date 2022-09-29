{
  // 공유취소버튼
  let cancel_share_trips = [];
  let cancel_val_share = [];

  const share_cancel_btn = document.querySelector(".share_cancel_btn");

  function cancelShareTrip() {
    const parsedShareTrips = JSON.parse(localStorage.getItem("share_trips"));
    const parsedValShare = JSON.parse(localStorage.getItem("val_share"));
    const parsedUserShareTrips = JSON.parse(
      localStorage.getItem(`${username}'s share_trips`)
    );
    const parsedUserShareCnt = JSON.parse(
      localStorage.getItem(`${username}'s share_cnt`)
    );
    const parsedLikedUsername = JSON.parse(
      localStorage.getItem(`${share_id}'s like_cnt`)
    );

    let like_list = [];

    let user_share_trips = [];

    let share_cnt = [];

    if (parsedLikedUsername !== null) {
      for (let i = 0; i < parsedLikedUsername.length; i++) {
        const like_trips = JSON.parse(
          localStorage.getItem(`${parsedLikedUsername[i]}'s like_trips`)
        );
        like_list = like_trips.filter((like_trip) => like_trip.id !== share_id);
        console.log(like_list);
        localStorage.setItem(
          `${parsedLikedUsername[i]}'s like_trips`,
          JSON.stringify(like_list)
        );
      }
    }

    if (parsedShareTrips !== null) {
      for (let i = 0; i < parsedShareTrips.length; i++) {
        const parsedId = parsedShareTrips[i].id;
        if (share_id === parsedId) {
          cancel_share_trips = parsedShareTrips.filter(
            (trip) => trip.id !== share_id
          );
          cancel_val_share = parsedValShare.filter(
            (val_share) => val_share !== share_id
          );
          localStorage.setItem(
            "share_trips",
            JSON.stringify(cancel_share_trips)
          );
          localStorage.setItem("val_share", JSON.stringify(cancel_val_share));
          localStorage.removeItem(`${share_id}'s like_cnt`);
          localStorage.removeItem(`${share_id}'s reviews`);
        }
      }
    }

    if (parsedUserShareTrips !== null) {
      for (let i = 0; i < parsedUserShareTrips.length; i++) {
        const parsedId = parsedUserShareTrips[i].id;
        if (share_id === parsedId) {
          user_share_trips = parsedUserShareTrips.filter(
            (trip) => trip.id !== share_id
          );
          localStorage.setItem(
            `${username}'s share_trips`,
            JSON.stringify(user_share_trips)
          );
        }
      }
    }

    if (parsedUserShareCnt !== null) {
      for (let i = 0; i < parsedUserShareCnt.length; i++) {
        const parsedId = parsedUserShareCnt[i];
        console.log(parsedId);
        console.log(share_id);
        if (share_id === parsedId) {
          share_cnt = parsedUserShareCnt.filter((trip) => trip !== share_id);
          localStorage.setItem(
            `${username}'s share_cnt`,
            JSON.stringify(share_cnt)
          );
        }
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
      const parsedId = parsedTrips[i].id;
      console.log(share_id);
      console.log(typeof parsedId);
      if (share_id === String(parsedId)) {
        delete_trips = parsedTrips.filter(
          (trip) => trip.id !== parseInt(share_id)
        );
        localStorage.removeItem(`${username}'s ${share_id}'s trip`);
        localStorage.removeItem(`${username}'s ${share_id}'s expenditure`);
        localStorage.removeItem(`${share_id}'s like_cnt`);
        localStorage.setItem(
          `${username}'s trips`,
          JSON.stringify(delete_trips)
        );
        delete_saved_id = parsedIdList.filter((trip) => trip !== share_id);
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

  function createPwPopup() {
    let width = "500";
    let height = "500";
    let left = Math.ceil((window.screen.width - width) / 2); // ceil=올림
    let top = Math.ceil((window.screen.height - height) / 2);
    window.open(
      "../html/create-pw.html",
      "비밀번호설정 팝업",
      `width=${width}, height=${height}, left=${left}, top=${top}`
    ); // 팝업창 가운데 정렬
  }

  delete_btn.addEventListener("click", () => {
    if (localStorage.getItem("anotherLogin") !== null) {
      if (
        confirm(
          "글을 삭제하기 위해서는 비밀번호가 필요합니다. 비밀번호를 등록하시겠습니까?"
        )
      ) {
        createPwPopup();
      }
    } else {
      const val_pw = prompt("비밀번호를 입력하세요");
      if (val_pw === localStorage.getItem("pw_inUse")) {
        deleteToDo();
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    }
  });

  share_cancel_btn.addEventListener("click", () => {
    if (localStorage.getItem("anotherLogin") !== null) {
      if (
        confirm(
          "공유를 취소하기 위해서는 비밀번호가 필요합니다. 비밀번호를 등록하시겠습니까?"
        )
      ) {
        createPwPopup();
      }
    } else {
      const val_pw = prompt("비밀번호를 입력하세요");
      if (val_pw === localStorage.getItem("pw_inUse")) {
        cancelShareTrip();
        window.location.href = "../index.html";
        alert("공유가 취소되었습니다.");
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    }
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
