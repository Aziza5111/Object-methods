const person = {
  name: "Dilshod",
  age: 30,
};

delete person.age;

let { name, age } = person;
person.age = 18

console.log(person);