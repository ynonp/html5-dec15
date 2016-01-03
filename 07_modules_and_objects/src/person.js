// ES6
export default class Person {
  constructor(name) {
    this.name = name;
    this.age = 1;
  }

  hello() {
    console.log(`Hi! ${this.name} and I am ${this.age} years old`);
  }

  growUp() {
    this.age++;
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
    this.grade = 77;
  }

  grades() {
    console.log('You got 100');
  }

}









/*
export default function Person(name) {
  this.name = name;
  this.age = 1;
}

Person.prototype.hello = function() {
  console.log(`Hi! ${this.name} and I am ${this.age} years old`);
};

Person.prototype.growUp = function() {
  this.age++;
};
  */