require('dotenv').config();
const { triggerAsyncId } = require('async_hooks');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

import { connect } from './db/config';
connect();

const io = new Server(server, {
  cors: true, 
  origins: [process.env.CLIENT_HOST],
});

const port = process.env.PORT || 3001;

io.on('connection', (socket: any) => {
  socket.on('askQuestion', (who: any) => {
    console.log("question object has entered the server: ", who);
    io.emit('showQuestion', who);
  })
});

server.listen(port, () => {
  console.log(process.env.CLIENT_HOST);
  console.log(`listening on port ${port}`);
});