var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('./client/build'))


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
});

io.on('connection', function(socket){
    socket.on('draw', (drawAction) => {
    io.sockets.emit('draw', drawAction)
  })
})



http.listen(3000, function () {
  console.log('Example app listening on 3000');
});
