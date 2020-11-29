const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
const io = socketio(server);
io.on("connection", (ws1) => {
    console.log("client log in");
    ws1.emit("message","prafful here")
    
    ws1.on("message" , (data) => {
        console.log(data)
        io.emit("message",data)
    })
})
server.listen(5690,() => {
    console.log("server is ready")
})

