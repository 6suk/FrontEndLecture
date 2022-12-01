const date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMonth() + 1);

const hour = date.getHours();
if (hour < 12) console.log(`${date.toLocaleString()} 은 오전입니다`);
else console.log(`${date.toLocaleString()} 은 오후입니다`);

const amPm = hour < 12 ? console.log(`${date.toLocaleString()} 은 오전입니다`) : console.log(`${date.toLocaleString()} 은 오후입니다`);
