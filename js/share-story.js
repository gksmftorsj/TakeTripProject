const share_trip_list = document.getElementById("share_trip_list");

const parsedShareTrips = JSON.parse(localStorage.getItem("share_trips"));

function showShareTrip(parsedShareTrips) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const span = document.createElement("span");
  li.id = parsedShareTrips.id;
  img.setAttribute("src", parsedShareTrips.img);
  img.classList.add("shareImg");
  p.innerText = parsedShareTrips.title;
  p.addEventListener("click", () => {
    window.location.href = "../html/detailShare.html";
  });
  span.innerText = `${parsedShareTrips.username}'s trip`;
  span.classList.add("username");
  li.appendChild(span);
  li.appendChild(img);
  li.appendChild(p);
  share_trip_list.appendChild(li);
}

if (parsedShareTrips !== null) {
  parsedShareTrips.forEach(showShareTrip);
}

let modify_share_trips = [];

for (let i = 0; i < parsedShareTrips.length; i++) {
  for (let j = 0; j < parsedShareTrips.length; j++) {
    const li = document.querySelectorAll("li");
    const p = document.querySelectorAll("p");
    p[i].addEventListener("click", () => {
      if (li[i].id === String(parsedShareTrips[j].id)) {
        localStorage.setItem("share_title", parsedShareTrips[j].title);
        localStorage.setItem("share_id", parsedShareTrips[j].id);
        localStorage.setItem("share_story", parsedShareTrips[j].story);
        localStorage.setItem(
          "share_expenditure",
          JSON.stringify(parsedShareTrips[j].expenditure)
        );
        console.log(parsedShareTrips[j].expenditure);
        localStorage.setItem("share_username", parsedShareTrips[j].username);
        localStorage.setItem("share_img", parsedShareTrips[j].img);

        const modify_share_trip = {
          title: parsedShareTrips[j].title,
          story: parsedShareTrips[j].story,
          expenditure: parsedShareTrips[j].expenditure,
        };
        modify_share_trips.push(modify_share_trip);
        localStorage.setItem(
          "modify_share_trips",
          JSON.stringify(modify_share_trip)
        );
        localStorage.setItem("modify_id", parsedShareTrips[j].id);
      }
    });
  }
}
