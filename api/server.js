const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router.js');
const plantsRouter = require('./plants/plants-router.js');
const usersRouter = require('./users/users-router');
const restrict = require('./auth/restricted.js');



const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/users', restrict, usersRouter); // only logged-in users 
server.use('/plants', restrict, plantsRouter); // only logged-in users 

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack, // comment out this line before production
  });
});

module.exports = server;
