var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var user_num = 0;
var users = [];
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
    socket.on('user name', name => {
        socket.username = name;
        console.log(socket.username);
        user_num++;
        users.push({
            name:socket.username,
            id:socket.id,
         })
        console.log(users);
        io.emit('user number', {num:user_num,users:users});
    })
    // console.log(socket);
    
    
    console.log('a user connected');
    socket.on('chat message', function (data) {
        console.log(data);
        socket.broadcast.emit('chat message', {
            name: data.name,
            msg: data.msg
        });
        //io.emit('chat message', data.name+data.msg);
    });
    socket.on('typing', (typing) => {
        console.log(typing);
        socket.broadcast.emit('typing', typing);
    })

    socket.on('disconnect', () => {
        user_num--;
        users = users.filter(v=>v.id !== socket.id);
        socket.broadcast.emit('user down', {
            user_num: user_num,
            name: socket.username
        });
    })
});


http.listen(3000, function () {
    console.log('listening on *:3000');
});