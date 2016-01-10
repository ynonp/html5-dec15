var io = require('socket.io')();
io.on('connection', function(socket){


  socket.on('data', function(data) {
    io.sockets.emit('data', data);
  });
});

io.listen(3100);
