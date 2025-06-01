const goal = 120;
let currentDate = new Date();
let selectedDate = getTodaykey(); // fout: kleine letter 'k'

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

function getData() {
  JSON.parse(localStorage.getItem("driveData") || "{}"); // fout: mist 'return'
}
