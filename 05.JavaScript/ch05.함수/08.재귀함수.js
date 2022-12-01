// n! = n * (n-1)! 단 0! = 1

function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) product *= i;
  return product;
}

console.log(factorial(10));

function facto(num) {
  if (num == 0) return 1;
  return num * facto(num - 1);
}

console.log(facto(10));
