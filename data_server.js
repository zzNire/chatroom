
var app = require('express')(); 
var http = require('http').Server(app);

var io = require('socket.io')(http); //socket.io

var net = require('net');
//var url = "211.67.21.100:29999"
//tcp 连接


var HOST = '211.67.21.100';
var PORT = 29999;
var result;

var client = new net.Socket();
client.connect(PORT, HOST,()=>{
    console.log('connect successed');
});

client.on('data',data =>{
    console.log(data);
    result = new DataView(data);
    console.log(result)
})

// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('Connection closed');
});

var x = new Buffer([0x30,0x2e,0x35,0x30,0x39,0x36,0x39,0x35]);
x.readFloatBE(0)