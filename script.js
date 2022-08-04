const currentTf = document.querySelectorAll(".current-timeframe");
const previousTf = document.querySelectorAll(".previous-timeframe");
const cardTitle = document.querySelectorAll(".content-title h2");
const localJson = "./data.json";

const getData = async () => {
  const response = await fetch(localJson);
  const data = await response.json();

  for (let i = 0, l = data.length; i < l; i++) {
    const obj = data[i];

    cardTitle[i].innerHTML = obj.title;
    currentTf[i].innerHTML = `${obj.timeframes.weekly.current}hrs`;
    previousTf[i].innerHTML = `${obj.timeframes.weekly.previous}hrs`;
  }
};

getData();
