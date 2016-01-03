/**
 * 1. Comments
 *    Block comments (as you can see)
 *    And line comments with //
 *
 *
 * 2. Variables, operators
 * 3. Functions
 * 4. Loops
 * 5. switch/case
 * 6. if
 *
 * 7. Arrays
 * 8. Hash Maps
 *
 * 9. Classes
 *
 * a. APIs
 */

function readFavoriteColor(data) {
  return data.color;
}


function growUp(person) {
  person.age++;
}

var bob = {
  name: 'bob',
  age: 17,
  likes: 'to code'
};

var garfield = {
  age: 4,
  likes: ['to eat', 'to sleep'],
};


growUp(bob);



function sum(a, b) {
  return a + b;
}

function main() {
  var x = 10;
  var y = 20;
  var result = sum(x,y);

  if ( x > 5 ) {
    console.log('x > 5');
  }

  for ( var i=0; i < 10; i++ ) {
    result += i;
  }

  console.log(i);




  console.log('x + y = ', result);
}

main();




















