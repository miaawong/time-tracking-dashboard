// const getData = () => {
//   fetch("./data.json")
//     .then(res => res.json())
//     .then(data => console.log(data));
// };
// getData();

const dailyBtn = document.querySelector("#daily-btn");
const weeklyBtn = document.querySelector("#weekly-btn");
const monthlyBtn = document.querySelector("#monthly-btn");

const duration = document.querySelectorAll(".duration");
const prevDuration = document.querySelectorAll(".prev-duration");

const dailyData = () => {
  fetch("./data.json")
    .then(res => res.json())
    .then(data =>
      duration.forEach((time, i) => {
        duration[i].innerHTML = data[i].timeframes.daily.current + "hrs";
        prevDuration[i].innerHTML =
          "Last Daily - " + data[i].timeframes.daily.previous + "hrs";
      })
    );
};
const weeklyData = () => {
  fetch("./data.json")
    .then(res => res.json())
    .then(data =>
      duration.forEach((time, i) => {
        duration[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
        prevDuration[i].innerHTML =
          "Last Weekly - " + data[i].timeframes.weekly.previous + "hrs";
      })
    );
};
const monthlyData = () => {
  fetch("./data.json")
    .then(res => res.json())
    .then(data =>
      duration.forEach((time, i) => {
        duration[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
        prevDuration[i].innerHTML =
          "Last Monthly - " + data[i].timeframes.monthly.previous + "hrs";
      })
    );
};

dailyBtn.addEventListener("click", () => {
  dailyBtn.classList.remove("muted-text");
  weeklyBtn.classList.add("muted-text");
  monthlyBtn.classList.add("muted-text");
  dailyData();
});
weeklyBtn.addEventListener("click", () => {
  weeklyBtn.classList.remove("muted-text");
  dailyBtn.classList.add("muted-text");
  monthlyBtn.classList.add("muted-text");
  weeklyData();
});
monthlyBtn.addEventListener("click", () => {
  monthlyBtn.classList.remove("muted-text");
  dailyBtn.classList.add("muted-text");
  weeklyBtn.classList.add("muted-text");
  monthlyData();
});

dailyData();
dailyBtn.classList.remove("muted-text");
weeklyBtn.classList.add("muted-text");
monthlyBtn.classList.add("muted-text");
