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

function drawCalendar() {
  const cal = document.querySelector("#calendar");
  cal.innerHTML = "";

  const dagen = ["ma", "di", "wo", "do", "vr", "za", "zo"];
  dagen.forEach(function(d) {
    const dag = document.createElement("span");
    dag.innerText = d;
    cal.append(dag);
  });
}

