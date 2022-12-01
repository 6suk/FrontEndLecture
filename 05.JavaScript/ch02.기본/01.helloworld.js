// 출력 메소드
console.log('Hello', 'World', '!!!');

// 상수, 변수
const hello = '안녕하세요!'; // 상수
var x = 3;
let y = 5;

// 기본 자료형
// 1. Number
console.log(typeof 1, typeof 3.14);
console.log(2 ** 10); // 2의 10제곱 (자바X)

// 2.문자열
console.log(typeof '안녕하세요!');
let a = '안녕하세요';
console.log(a);
console.log(hello[0], hello[5]); // hello.charAt(0);

// 2-1. 템플릿 문자열
console.log(`${hello} 3 + 5 = ${x + y}`); // `${}`안에 변수가 들어갈 수 있다.
console.log(`올해는 ${new Date().getFullYear()}년 입니다.`);

// 3. Boolean
console.log(typeof true, typeof false);

// 5. 객체
console.log(typeof { x: 3, y: 4 });
let obj = { x, y };
console.log(obj.x, obj.y);

// 6. undefined
let b;
console.log(typeof b);
console.log(typeof c);

console.log('52' - 273);
console.log('52' * 273);
console.log('52' / 273);
console.log('52' % 273);
