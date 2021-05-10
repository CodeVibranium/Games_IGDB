const BaseUrl = "https://api.rawg.io/api";

function getCurrentMonth() {
  const month = new Date().getMonth();
  if (month < 10) {
    const Month = month + 1;
    return `0${Month}`;
  } else {
    return month;
  }
}
function getCurrentDay() {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
}
const getCurrentYear = new Date().getFullYear();
const Key = "cbffbeed97cd432fac8806f1622db71c";

const currentDate = `${getCurrentYear}-${getCurrentMonth()}-${getCurrentDay()}`;
const searchByDateUrl =
  BaseUrl +
  `/games?key=${Key || process.env.REACT_APP_RAW_API}&dates=${currentDate}`;
console.log(searchByDateUrl);
