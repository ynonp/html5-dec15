// JavaScript HAS NO classes. We have:
// Functions
// Objects

// MyTextArea is a function (called constructor)
// It returns an object

function MyTextAreaPrototype() {
  this.setText = function(text) {
    var ta = this.el.querySelector('textarea');
    ta.textContent = text;
  };

  this.reset = function() {
    var ta = this.el.querySelector('textarea');
    ta.textContent = '';
  };


  this.handleInput = function(ev) {
    var span = this.el.querySelector('.val');
    span.textContent = this.el.querySelector('textarea').value.length;
  }

}

// Constructor
function MyTextArea(el) {
  el.innerHTML = '<p>Total: <span class="val">0</span> characters</p>' +
    '<textarea></textarea>';
  this.el = el;

  el.addEventListener('input', this.handleInput.bind(this));
}
















var proto = new MyTextAreaPrototype();
MyTextArea.prototype = proto;


var items = document.querySelectorAll('.ta');
//for (var i=0; i < items.length; i++ ) {
//  var ta = MyTextArea(items[i]);
//}

var t1 = new MyTextArea(items[0]);
var t2 = new MyTextArea(items[1]);












