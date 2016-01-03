// JavaScript HAS NO classes. We have:
// Functions
// Objects

// MyTextArea is a function (called constructor)
// It returns an object
// Constructor
function MyTextArea(el) {
  el.innerHTML = '<p>Total: <span class="val">0</span> characters</p>' +
    '<textarea></textarea>';
  this.el = {
    ta: el.querySelector('textarea'),
    val: el.querySelector('.val'),
  };

  el.addEventListener('input', this.handleInput.bind(this));
}

MyTextArea.prototype.setText = function(text) {
  this.el.ta.textContent = text;
};

MyTextArea.prototype.reset = function() {
  this.el.ta.textContent = '';
};

MyTextArea.prototype.handleInput = function(ev) {
  this.el.val.textContent = this.el.ta.value.length;
};


var items = document.querySelectorAll('.ta');
//for (var i=0; i < items.length; i++ ) {
//  var ta = MyTextArea(items[i]);
//}

var t1 = new MyTextArea(items[0]);
var t2 = new MyTextArea(items[1]);










