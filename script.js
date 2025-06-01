const goal = 120;
let currentDate = new Date();
let selectedDate = getTodayKey();

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

function getData() {
  return JSON.parse(localStorage.getItem("driveData") || "{}");
}

function saveData(data) {
  localStorage.setItem("driveData", JSON.stringify(data));
}

function resetToday() {
  const data = getData();
  delete data[selectedDate];
  saveData(data);
  updateUI();
}

function saveMinutes() {
  const mins = parseInt(document.getElementById("minuteInput").value);
  if (!isNaN(mins)) {
    const data = getData();
    data[selectedDate] = mins;
    saveData(data);
    document.getElementById("minuteInput").value = "";
    updateUI();
  }
}

function changeMonth(offset) {
  currentDate.setMonth(currentDate.getMonth() + offset);
  updateUI();
}

function selectDay(dateKey) {
  selectedDate = dateKey;
  updateUI();
}

function drawCalendar(data) {
  const cal = document.getElementById("calendar");
  cal.innerHTML = "";

  ['Ma','Di','Wo','Do','Vr','Za','Zo'].forEach(d => {
    const div = document.createElement("div");
    div.className = "day header";
    div.innerText = d;
    cal.appendChild(div);
  });
}

const y = currentDate.getFullYear();
const m = currentDate.getMonth();
const firstDay = new Date(y, m, 1);
const offset = (firstDay.getDay() + 6) % 7; // zorgt dat maandag = 0
const daysInMonth = new Date(y, m + 1, 0).getDate();

for (let i = 0; i < offset; i++) {
  const div = document.createElement("div");
  div.className = "day";
  cal.appendChild(div);
}



