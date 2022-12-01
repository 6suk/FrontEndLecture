let max = 0,
  x = 0,
  y = 0;

for (let i = 100; i < 1000; i++) {
  for (let k = i; k < 1000; k++) {
    let mul = i * k;
    let str = String(mul).split('').reverse().join('');
    if (mul == str && max < mul) {
      max = mul;
      x = i;
      y = k;
    }
  }
}

console.log(`${x} * ${y} = ${max}`);
