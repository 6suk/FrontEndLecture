/* 1. 파일을 읽을 경우
2. 타이머
3. 오디오 / 비디오 */

function callFiveTime(callback) {
  for (let i = 0; i < 5; i++) callback();
}

const cb = function () {
  console.log('함수 호출');
};

callFiveTime(cb);
console.log('============================');
callFiveTime(() => console.log('함수 호출'));

function introduce(lastName, firstName, callback) {
  let fullName = lastName + firstName;
  callback(fullName);
}

introduce('홍', '길동', function (name) {
  console.log(name);
});
