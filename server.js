// imports
const express = require('express');
const CORS = require('CORS');
const helmet = require('helmet');
const morgan = require('morgan');

const routerAction = require('./action/routerAction');
const routerProject = require('./project/routerProject');

// instantiate server
const server = express();

// middleware
server.use(helmet());
server.use(CORS());
server.use(express.json());
server.use(morgan('dev'));

// routers
server.use('/api/projects', routerProject);
server.use('/api/actions', routerAction);

// listening
const port = 5000;
server.listen(port, () => console.log(`API running on port ${port}`));
