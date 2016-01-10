function ContactItem(data) {
  this.id = data.id;
  this.name = data.name;
}

ContactItem.prototype.render = function(container) {
  var newElem = document.createElement('div');
  var p = document.createElement('p');
  var emailSpan = document.createElement('span');
  emailSpan.classList.add('email');

  var btn = document.createElement('button');

  newElem.classList.add('contact-item');
  p.textContent = this.name;
  p.appendChild(emailSpan);

  btn.textContent = 'Get Email';
  btn.addEventListener('click', this.getEmail.bind(this));

  newElem.appendChild(p);
  newElem.appendChild(btn);
  this.el = newElem;
  container.appendChild(newElem);
};

ContactItem.prototype.handleEmail = function(e) {
  var xhr = e.target;
  var response = JSON.parse(xhr.responseText);
  this.el.querySelector('.email').textContent = response.email;
};

ContactItem.prototype.getEmail = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/contacts/' + this.id);

  xhr.addEventListener('load', this.handleEmail.bind(this));
  xhr.send();
};

function handleContacts(e) {
  var xhr = e.target;

  var data = JSON.parse(xhr.responseText);
  var container = document.querySelector('#container');

  for (var i=0; i < data.length; i++) {
    var item = new ContactItem(data[i]);
    item.render(container);
  }
}

var xhr = new XMLHttpRequest();
xhr.open('get', '/contacts');
xhr.addEventListener('load', handleContacts);
// xhr.addEventListener('error', handleCommunicationError);

xhr.send();





























