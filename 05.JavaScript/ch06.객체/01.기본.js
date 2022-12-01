let maria = {
  name: '마리아',
  age: 23,
  성별: '여자',
};

console.log(maria);
console.log(maria.name);

let key = 'age';
console.log(maria[key]);

//key 값과 같은 변수명은 생략 가능
const name = '홍길동';
const age = 35;
const gender = '남자';
const hong = { name, age, gender };
console.log(hong);
