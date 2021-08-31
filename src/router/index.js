const express = require('express');
const { User } = require('../mongo');
const { Collection } = require('../mongo');
const { Task } = require('../mongo');

const {UserRouter} = require('./userRouter');
const {CollectionRouter} = require('./collectionRouter');
const {TaskRouter} = require('./taskRouter');
const appRouter = express.Router();

//en este archivo es donde se utilizan los routers definidos
//'/user' define el camino de todo lo relacionado con user
appRouter.use('/user', UserRouter);
appRouter.use('/collection', CollectionRouter);
appRouter.use('/task', TaskRouter);

module.exports = appRouter;
