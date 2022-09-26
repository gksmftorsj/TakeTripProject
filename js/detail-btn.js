{
  // 삭제버튼
  let cancel_share_trips = [];
  let cancel_val_share = [];

  const parsedShareTrips = JSON.parse(localStorage.getItem("share_trips"));
  const parsedValShare = JSON.parse(localStorage.getItem("val_share"));

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
      }
    }
  }

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
}

//-------------------------------------------------------------------------

{
  // 수정버튼
  document.querySelector(".modify_btn").addEventListener("click", () => {
    window.location.href = "../html/write.html";
    const detail_id = localStorage.getItem("detail_id");
    localStorage.setItem("click_id", detail_id);
  });
}

//-------------------------------------------------------------------------

{
  // 공유버튼
  const share_btn = document.querySelector(".share_btn");

  let share_trips = [];

  let val_share = [];

  function shareToDo() {
    const detail_title = localStorage.getItem("detail_title");
    const detail_id = localStorage.getItem("detail_id");
    const saved_trip = JSON.parse(
      localStorage.getItem(`${username}'s ${detail_id}'s trip`)
    );
    const saved_expenditure = JSON.parse(
      localStorage.getItem(`${username}'s ${detail_id}'s expenditure`)
    );
    // 밑에 savedShareData는 렌더링 될 때 불러오는 것이기 때문에 새로고침이 없으면 항상 null이다
    // 그래서 함수 안에서 새로 불러서 비교해야 한다.
    const render_share_trips = localStorage.getItem("share_trips");
    const parsedShareTrips = JSON.parse(render_share_trips);

    if (parsedShareTrips === null) {
      const share_trip = {
        id: detail_id,
        username: username,
        title: detail_title,
        story: saved_trip.story,
        img: saved_trip.img,
        expenditure: saved_expenditure,
      };
      share_trips.push(share_trip);
      localStorage.setItem("share_trips", JSON.stringify(share_trips));
      val_share.push(detail_id);
      localStorage.setItem("val_share", JSON.stringify(val_share));
      alert("공유되었습니다.");
      console.log(val_share.includes(detail_id));
      console.log(parsedShareTrips);
    } else if (val_share.includes(detail_id)) {
      alert("이미 공유되었습니다.");
      return;
    } else {
      const share_trip = {
        id: detail_id,
        username: username,
        title: detail_title,
        story: saved_trip.story,
        img: saved_trip.img,
        expenditure: saved_expenditure,
      };
      share_trips.push(share_trip);
      localStorage.setItem("share_trips", JSON.stringify(share_trips));
      val_share.push(detail_id);
      localStorage.setItem("val_share", JSON.stringify(val_share));
      alert("공유되었습니다.");
    }
  }

  const savedShareTrips = localStorage.getItem("share_trips");

  if (savedShareTrips !== null) {
    const parsedShareTrips = JSON.parse(savedShareTrips);
    share_trips = parsedShareTrips;
  }

  const savedValShare = localStorage.getItem("val_share");

  if (savedValShare !== null) {
    const parsedValShare = JSON.parse(savedValShare);
    val_share = parsedValShare;
  }

  share_btn.addEventListener("click", shareToDo);
}
