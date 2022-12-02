let cars = ['Audi', 'Benz', 'BMW', 'Volvo'];
let car = cars.pop();
console.log(cars, car);

// 객체의 배열을 정렬
let student = [
  { name: '홍길동', eng: 88, math: 78 },
  { name: '고뚱이', eng: 78, math: 95 },
  { name: '정시케', eng: 90, math: 40 },
  { name: '고식혜', eng: 55, math: 82 },
  { name: '아무개', eng: 62, math: 91 },
];

// 영어 성적 오름차순
student.sort((x, y) => y.eng - x.eng);

/* // 이름 기준 오름차순
student.sort((x, y) => {
  if (x.name < y.name) return -1;
  else if (x.name > y.name) return 1;
  else return 0;
}); */

// 이름 기준 오름차순 (삼항연산자)
student.sort((x, y) => {
  return x.name < y.name ? -1 : x.name > y.name ? 1 : 0;
});

console.log(student);
