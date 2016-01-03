// JavaScript HAS NO classes. We have:
// Functions
// Objects

// MyTextArea is a function (called constructor)
// It returns an object

var o = {
  foo: 10,
  bar: 'hello',
  likes: ['skiing', 'dancing'],
  hello: function() {
    console.log('Hello!!!!');
  },
  bye: function() {

  }
};



// Constructor
function MyTextArea(el) {
  el.innerHTML = '<p>Total: 0 characters</p>' +
    '<textarea></textarea>';

  var ta = el.querySelector('textarea');

  var res = {
    setText: function(text) {
      ta.textContent = text;
    },
    reset: function() {
      ta.textContent = '';
    }
  };

  return res;
}



var items = document.querySelectorAll('.ta');
//for (var i=0; i < items.length; i++ ) {
//  var ta = MyTextArea(items[i]);
//}

var t1 = MyTextArea(items[0]);
var t2 = MyTextArea(items[1]);












