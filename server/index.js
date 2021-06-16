const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  socket.on('askQuestion', (who) => {
    console.log("question object has entered the server: ", who);
    io.emit('showQuestion', who);
  })
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});