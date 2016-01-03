function PersonPrototype() {
  var self = {
    foo: 10,
    bye: function() {
      console.log("bye bye");
    },
    hello: function() {
      console.log('Hi! my name is: ' + this.name);
    }
  };
  return self;
}

function Person(name, age) {
  // *this* is the new object,
  // and JS already defines it for you
  this.name = name;
}





var personPrototype = new PersonPrototype();
Person.prototype = personPrototype;

var p1 = new Person('bob', 17);
var p2 = new Person('barbara', 17);






