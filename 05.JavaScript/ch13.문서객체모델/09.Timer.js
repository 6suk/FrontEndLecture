function myDatetime(date) {
  return `${date.getHours()} : ${date.getMinutes().toString().padStart(2, 0)} : ${date
    .getSeconds()
    .toString()
    .padStart(2, 0)}`;
}
function myDate(date) {
  return `${date.getFullYear()}-${date.getMonth().toString().padStart(2, 0)}-${date
    .getDate()
    .toString()
    .padStart(2, 0)}`;
}

window.onload = () => {
  document.getElementById('date').innerHTML = myDate(new Date());
  setInterval(() => {
    document.getElementById('time').innerHTML = myDatetime(new Date());
  }, 1000);
};
