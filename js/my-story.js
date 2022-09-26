const show_trip_list = document.querySelector("#show_trip_list");

const username = localStorage.getItem("username_inUse");
const paresdIdList = JSON.parse(localStorage.getItem(`${username}'s id_list`));

const title = localStorage.getItem("title");

function showMyTrip(showTrip) {
  const savedTrip = JSON.parse(
    localStorage.getItem(`${username}'s ${showTrip}'s trip`)
  );
  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  img.setAttribute("src", savedTrip.img);
  img.classList.add("myStory-img");
  p.addEventListener("click", () => {
    window.location.href = "../html/detail.html";
  });
  li.id = savedTrip.id;
  li.appendChild(img);
  li.appendChild(p);
  show_trip_list.appendChild(li);
}

if (paresdIdList !== null) {
  paresdIdList.forEach(showMyTrip);
}

const trips = JSON.parse(localStorage.getItem(`${username}'s trips`));

for (let i = 0; i < trips.length; i++) {
  for (let j = 0; j < paresdIdList.length; j++) {
    const li = document.querySelectorAll("li");
    const p = document.querySelectorAll("p");
    if (String(trips[i].id) === li[j].id) {
      p[j].innerText = trips[i].title;
      p[j].addEventListener("click", (event) => {
        localStorage.setItem("detail_title", trips[i].title);
        localStorage.setItem("detail_id", event.target.parentElement.id);
        localStorage.setItem("modify_id", event.target.parentElement.id);
      });
    }
  }
}
