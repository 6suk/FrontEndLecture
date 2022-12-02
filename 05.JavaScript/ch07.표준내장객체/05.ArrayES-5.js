let fruits = ['apple', 'banana', 'cherry', 'grape'];

fruits.forEach((v, i) => console.log(i + ' = ' + v));

///////////////////map
let fruitsUp = fruits.map((x) => x.toUpperCase());
console.log(fruitsUp);
