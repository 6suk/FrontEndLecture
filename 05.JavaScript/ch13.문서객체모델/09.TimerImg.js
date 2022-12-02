function myDateTime() {
  const now = new Date();
  const hh = now.getHours().toString().padStart(2, 0);
  const mm = now.getMinutes().toString().padStart(2, 0);
  const ss = now.getSeconds().toString().padStart(2, 0);

  return hh + mm + ss;
}

window.onload = () => {
  setInterval(() => {
    let time = myDateTime();
    document.getElementById('hh1').src = `./digits/${time[0]}.svg`;
    document.getElementById('hh2').src = `./digits/${time[1]}.svg`;
    document.getElementById('mm1').src = `./digits/${time[2]}.svg`;
    document.getElementById('mm2').src = `./digits/${time[3]}.svg`;
    document.getElementById('ss1').src = `./digits/${time[4]}.svg`;
    document.getElementById('ss2').src = `./digits/${time[5]}.svg`;
  }, 1000);
};
