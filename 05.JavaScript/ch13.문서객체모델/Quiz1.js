function answer1() {
  let num1Node = document.getElementById('num1');
  let num2Node = document.getElementById('num2');
  let num1 = parseInt(num1Node.value);
  let num2 = parseInt(num2Node.value);
  let powerArr = [];
  let resultNode = document.getElementById('result1');

  if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || num2 - num1 < 4) {
    alert('입력 값의 범위를 확인하세요!');
    return;
  }

  for (let i = num1; i <= num2; i++) {
    powerArr.push(Math.pow(2, i));
  }
  resultNode.innerHTML = powerArr;
}
