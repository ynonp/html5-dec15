var btn = document.querySelector('#btn-get');
var panel = document.querySelector('#server-text');
var itagline = document.querySelector('#itagline');
var form = document.querySelector('form');
var socket = io.connect('http://localhost:3100');

socket.on('counter', function(data) {
  panel.textContent = data.text + ':' + data.counter;
});

function updateTagline(e) {
  e.preventDefault();

  var data = { tagline: itagline.value };
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/tagline');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify(data));
}




function handleResponse(e) {
  var xhr = e.target;
  var response = JSON.parse(xhr.responseText);

  panel.textContent = response.text + ':' + response.counter;
  itagline.value = response.tagline;
}

function getTextFromServer() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/hello');
  //xhr.addEventListener('load', handleResponse);
  xhr.send();
}

btn.addEventListener('click', getTextFromServer);
form.addEventListener('submit', updateTagline);
getTextFromServer();











