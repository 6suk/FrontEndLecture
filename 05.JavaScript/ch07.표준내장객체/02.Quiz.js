// 1 ~ 1000

let count = {};

for (let i = 0; i < 10; i++) {
  count[i] = 0;
}

for (let i = 0; i <= 1000; i++) {
  let a = i.toString();
  for (let k = 0; k < a.length; k++) {
    count[a[k]]++;
  }
}

console.log(count);
