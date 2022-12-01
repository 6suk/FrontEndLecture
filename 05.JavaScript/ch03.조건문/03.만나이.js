const bYear = 2000;
const bMonth = 12;
const bDay = 1;

const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1;
const tDay = today.getDate();

let fullAge;
if (bMonth < tMonth) {
  fullAge = tYear - bYear;
} else if (bMonth > tMonth) {
  fullAge = tYear - bYear - 1;
} else {
  if (bDay <= tDay) {
    fullAge = tYear - bYear;
  } else {
    fullAge = tYear - bYear - 1;
  }
}

console.log(`- 생년월일 : ${bYear}. ${bMonth < 10 ? '0' + bMonth : bMonth}. ${bDay < 10 ? '0' + bDay : bDay}\n- 만나이 : ${fullAge}살`);
