// const si = setInterval(function () {
//   console.log(new Date());
// }, 1000);

const si = setInterval(() => console.log(new Date()), 1000);

setTimeout(() => console.log('5초 경과'), 5000);
setTimeout(() => clearInterval(si), 5000);
