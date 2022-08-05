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
    previousTf[i].innerHTML = `Day - ${obj.timeframes.daily.previous}hrs`;
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
    previousTf[i].innerHTML = `Month - ${obj.timeframes.monthly.previous}hrs`;
  }
};

const dataDaily = document.querySelector("[data-daily]");
const dataWeekly = document.querySelector("[data-weekly]");
const dataMonthly = document.querySelector("[data-monthly]");

dataDaily.addEventListener("click", () => {
  dataDaily.classList.add("date--active");
  dataWeekly.classList.remove("date--active");
  dataMonthly.classList.remove("date--active");

  dailyData();
});

dataWeekly.addEventListener("click", () => {
  dataDaily.classList.remove("date--active");
  dataWeekly.classList.add("date--active");
  dataMonthly.classList.remove("date--active");

  weeklyData();
});

dataMonthly.addEventListener("click", () => {
  dataDaily.classList.remove("date--active");
  dataWeekly.classList.remove("date--active");
  dataMonthly.classList.add("date--active");

  monthlyData();
});

if (dataWeekly.classList.contains("date--active")) {
  weeklyData();
}
