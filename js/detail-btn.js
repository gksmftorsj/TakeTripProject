{
  // 삭제버튼
  let deleteTrip = [];
  let deleteSavedId = [];

  const parsedTrips = JSON.parse(localStorage.getItem(`${username}'s trips`));
  const parsedIdList = JSON.parse(
    localStorage.getItem(`${username}'s id_list`)
  );

  const delete_btn = document.querySelector(".delete_btn");

  // li의 아이디와 선택된 값을 아이디가 같으면 li제거

  function deleteToDo() {
    for (let i = 0; i < parsedTrips.length; i++) {
      console.log("2번 들어옴");
      const delete_id = localStorage.getItem("detail_id");
      const parsedId = parsedTrips[i].id;
      console.log(delete_id);
      console.log(typeof parsedId);
      if (delete_id === String(parsedId)) {
        console.log("3번 들어옴");
        deleteTrip = parsedTrips.filter(
          (trip) => trip.id !== parseInt(delete_id)
        );
        localStorage.removeItem(`${username}'s ${delete_id}'s trip`);
        localStorage.removeItem(`${username}'s ${delete_id}'s expenditure`);
        localStorage.setItem(`${username}'s trips`, JSON.stringify(deleteTrip));
        deleteSavedId = parsedIdList.filter((trip) => trip !== delete_id);
        localStorage.setItem(
          `${username}'s id_list`,
          JSON.stringify(deleteSavedId)
        );
        window.location.href = "../index.html";
        alert("삭제되었습니다.");
      }
    }
  }

  delete_btn.addEventListener("click", deleteToDo);
}

//-------------------------------------------------------------------------

{
  // 수정버튼
  document.querySelector(".modify_btn").addEventListener("click", () => {
    window.location.href = "../html/write.html";
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
