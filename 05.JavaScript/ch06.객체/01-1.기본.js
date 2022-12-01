const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    console.log(
      this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.'
    );
  },
  greeting: function () {
    console.log("Hi! I'm " + this.name[0] + '.');
  },
};

console.log(person);
console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
console.log(person.interests[1]);
person.bio();
person.greeting();
console.log(person['name'][0]);
person.name[0] = '고뚱이';
console.log(person.name);
person.cute = true;
console.log(person.cute);
