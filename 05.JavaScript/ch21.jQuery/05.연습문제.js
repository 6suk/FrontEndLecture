function answer11() {
  let num1 = parseInt($('#num1').val());
  let num2 = parseInt($('#num2').val());
  let powerArray = [];

  if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || num2 - num1 < 4) {
    alert('입력 값의 범위를 확인하세요.');
    return;
  }

  for (let i = num1; i <= num2; i++) {
    powerArray.push(Math.pow(2, i));
  }

  $('#result1').text(`결과 : ${powerArray}`).css('color', 'blue');
}

function answer12() {
  const words = $('#text2').val().replace(/[',.]/g, '').replace(/[-\n]/g, ' ').split(' ');
  let cnt = 0;

  for (let a of words) if (a == 'the') cnt++;
  $('#result2').html(`'the'의 개수는 <b>${cnt}개</b> 입니다.`).css('color', 'blue');
}

function answer13() {
  let prices = $('#price')
    .val()
    .split(';')
    .map((x) => parseInt(x))
    .sort((a, b) => b - a);

  $('#result3').text(`${prices}`).css('color', 'blue');
}

let cars = [];

function answer14_add() {
  cars.push($('#car').val());
}
function answer14() {
  const manu = cars.map((x) => x.split(' ')[0]);
  const model = cars.map((x) => x.split(' ').slice(1).join(' '));
  $('#input').text(cars);
  $('#manufacturer').text(manu);
  $('#model').text(model);
}

// function answer1() {
//   let num1Node = document.getElementById('num1');
//   let num2Node = document.getElementById('num2');
//   let num1 = parseInt(num1Node.value);
//   let num2 = parseInt(num2Node.value);
//   if (num1 < 1 || num1 > 2 0 || num2 < 10 || num2 > 30 || num2 - num1 < 4) {
//     alert('입력 값의 범위를 확인하세요.');
//     return;
//   }

//   let powerArray = [];
//   for (let i = num1; i <= num2; i++) {
//     powerArray.push(Math.pow(2, i));
//   }
//   let resNode = document.getElementById('result1');
//   resNode.innerHTML = '결과: ' + powerArray;
//   resNode.style.color = 'blue';
// }

// function answer2() {
//   let textNode = document.getElementById('text2');
//   let text = textNode.value;
//   const noPunct = text.replace(/[',.]/g, '').replace(/[-\n]/g, ' ');
//   document.getElementById('noPunct').innerHTML = noPunct;

//   const words = noPunct.split(' ');
//   let count = 0;
//   for (let word of words) if (word == 'the') count++;

//   const resNode = document.getElementById('result2');
//   resNode.innerHTML = `'the'의 개수는 ${count}개 입니다.`;
//   resNode.style.color = 'blue';
// }

// function answer3() {
//   const priceStr = document.getElementById('price').value;
//   // let priceStrArr = priceStr.split(';');              // ['51900', '83000', '158000', ...]
//   // let prices = priceStrArr.map(x => parseInt(x));     // [51900, 83000, 158000, ...]
//   /* let prices = [];
//   for (let str of priceStrArr)
//       prices.push(parseInt(str)); */
//   let prices = priceStr.split(';').map((x) => parseInt(x));

//   prices.sort((a, b) => b - a); // prices가 내림차순으로 정렬됨

//   const resNode = document.getElementById('result3');
//   resNode.innerHTML = prices;
//   resNode.style.color = 'blue';
// }

// var cars = [];
// function answer4_add() {
//   const carNode = document.getElementById('car');
//   cars.push(carNode.value);
// }
// function answer4() {
//   /* const manu = cars.map(x => {
//       let y = x.split(' ');
//       return y[0];
//   }); */
//   const manu = cars.map((x) => x.split(' ')[0]);
//   /* const model = cars.map(x => {
//       let y = x.split(' ');
//       let m = y.slice(1);
//       return m.join(' ');
//   }); */
//   const model = cars.map((x) => x.split(' ').slice(1).join(' '));

//   document.getElementById('input').innerHTML = cars;
//   document.getElementById('manufacturer').innerHTML = manu;
//   document.getElementById('model').innerHTML = model;
// }
