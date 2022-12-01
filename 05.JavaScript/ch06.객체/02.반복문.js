let personInfo = {
  name: '제임스',
  age: 28,
  gender: '남자',
  height: 175,
  job: '프로그래머',
  bmi: 30.0,
};

for (let attr in personInfo) console.log(attr, ':', personInfo[attr]);
