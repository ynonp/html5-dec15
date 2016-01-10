var io = require('socket.io')();
io.on('connection', function(socket){
  socket.emit('news', { hello: 'world' });

  socket.on('msg', function(msg) {
    if (msg.length > 0) {
      console.log("sending: " + msg);
      socket.emit('msg', msg);
    }
  });
});
io.listen(3200);
