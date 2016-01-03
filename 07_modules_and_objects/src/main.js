import Person from './person';
import Summer from './summer';

var p1 = new Person('Mike');
var p2 = new Person('Jim');

// prints: My name is Mike and I am 1 years old
p1.hello();

p1.growUp();

// prints: My name is Mike and I am 2 years old
p1.hello();

// prints: My name is Jim and I am 1 years old
p2.hello();

var s1 = new Summer();
var s2 = new Summer();

s1.add(10);
s1.add(20);

s2.add(30);

s2.add(5);

// prints 30
console.log(s1.currentSum);

// prints 35
console.log(s2.currentSum);