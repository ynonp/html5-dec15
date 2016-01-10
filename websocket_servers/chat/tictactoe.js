var io = require('socket.io')();
var moves = [];

io.on('connection', function(socket){
  socket.emit('move', moves);

  socket.on('msg', function(msg) {
    moves.push(msg);
    io.sockets.emit('move', [msg]);
  });
});

io.listen(3200);

