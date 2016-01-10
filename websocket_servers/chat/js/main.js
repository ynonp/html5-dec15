/*global io*/
var input = document.querySelector('#msg');
var chat = document.querySelector('#chat');
var form = document.querySelector('#msgform');
var socket = io.connect('http://localhost:3200');

socket.on('news', function() {
  alert('ready');
});

socket.on('msg', function(msg) {
  handleMessage(msg);
});

function sendMessage(e) {
  e.preventDefault();

  var text = input.value;
  input.value = '';
  socket.emit('msg', text);
}

function handleMessage(msg) {
  var li = document.createElement('li');
  li.textContent = msg;
  chat.appendChild(li);
}

form.addEventListener('submit', sendMessage);

