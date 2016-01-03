import Util from './util';

export default function MyTextArea(input_el) {
  input_el.innerHTML = '<p>Total: <span class="val">0</span> characters</p>' +
    '<textarea></textarea>';

  this.el = {
    ta: input_el.querySelector('textarea'),
    val: input_el.querySelector('.val'),
  };

  input_el.addEventListener('input', this.handleInput.bind(this));
}


MyTextArea.prototype.setText = function(text) {
  this.el.ta.textContent = text;
};

MyTextArea.prototype.reset = function() {
  this.el.ta.textContent = '';
};

MyTextArea.prototype.handleInput = function(ev) {
  this.el.val.textContent = Util.lengthOf(this.el.ta);
};

