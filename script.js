const currentTf = document.querySelectorAll(".current-timeframe");
const previousTf = document.querySelectorAll(".previous-timeframe");
const cardTitle = document.querySelectorAll(".content-title h2");
const localJson = "./data.json";

const dailyData = async () => {
  const response = await fetch(localJson);
  const data = await response.json();

  for (let i = 0, l = data.length; i < l; i++) {
    const obj = data[i];

    cardTitle[i].innerHTML = obj.title;
    currentTf[i].innerHTML = `${obj.timeframes.daily.current}hrs`;
    previousTf[i].innerHTML = `Week - ${obj.timeframes.daily.previous}hrs`;
  }
};

const weeklyData = async () => {
  const response = await fetch(localJson);
  const data = await response.json();

  for (let i = 0, l = data.length; i < l; i++) {
    const obj = data[i];

    cardTitle[i].innerHTML = obj.title;
    currentTf[i].innerHTML = `${obj.timeframes.weekly.current}hrs`;
    previousTf[i].innerHTML = `Week - ${obj.timeframes.weekly.previous}hrs`;
  }
};

const monthlyData = async () => {
  const response = await fetch(localJson);
  const data = await response.json();

  for (let i = 0, l = data.length; i < l; i++) {
    const obj = data[i];

    cardTitle[i].innerHTML = obj.title;
    currentTf[i].innerHTML = `${obj.timeframes.monthly.current}hrs`;
    previousTf[i].innerHTML = `Week - ${obj.timeframes.monthly.previous}hrs`;
  }
};

const timeframe = document.querySelectorAll(".date");

timeframe.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    const clickedBtn = e.target;
    clickedBtn.classList.toggle("date--active");

    timeframe.forEach((target) => {
      if (target !== clickedBtn) {
        target.classList.remove("date--active");
      }
    });
  });
});

if (timeframe[0].classList.contains("date--active")) {
  dailyData();
}

if (timeframe[1].classList.contains("date--active")) {
  weeklyData();
}

if (timeframe[2].classList.contains("date--active")) {
  monthlyData();
}
