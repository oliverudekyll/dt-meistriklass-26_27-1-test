function initPage() {
  const weekday = document.getElementById("weekday");
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");

  function setDate(time) {
    weekday.innerText = time.weekdayName;
    day.innerText = pad(time.dayOfMonth);
    month.innerText = time.monthName;
    year.innerText = pad(time.year);
  }
  setDate(TIME.now());
  TIME.on("day", (time) => {
    setDate(time);
  });

  function setClock(time) {
    hour.innerText = pad(time.hour);
    minute.innerText = pad(time.minute);
    second.innerText = pad(time.second);

    hour.style.flex = time.hoursProgress;
    minute.style.flex = time.minutesProgress;
    second.style.flex = time.secondsProgress;
  }

  setClock(TIME.now());
  TIME.on("second", (time) => {
    setClock(time);
  });
}

document.addEventListener("DOMContentLoaded", initPage);
