// 기본 자료형
let num = 273.1;
let numStr = Number('273.1');

console.log(num === numStr); // true

// 객체 자료형
let numObj = new Number(273.1);
console.log(num == numObj); // true
console.log(num === numObj); // false

let str = '과자|1500'.split('|');
console.log(str);

let strObj = new String('과자|1500').split('|');
console.log(strObj);
console.log(str == strObj); // false
console.log(str === strObj); // false
