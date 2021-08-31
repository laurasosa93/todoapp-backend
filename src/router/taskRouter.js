const express = require('express');
const {TaskController} = require('../controller')

const TaskRouter = express.Router();

TaskRouter.get('/', TaskController.findAll);

TaskRouter.get('/:id', TaskController.findOne);

TaskRouter.post('/', TaskController.create);

TaskRouter.post('/search', TaskController.search);

TaskRouter.put('/:id', TaskController.update);

TaskRouter.delete('/:id', TaskController.delete
);


module.exports = {TaskRouter};
