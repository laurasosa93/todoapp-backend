const express = require('express');
const {UserController} = require('../controller')

const UserRouter = express.Router();

// '/' significa /user/...(definido en index) 
UserRouter.get('/', UserController.findAll);

UserRouter.get('/:id', UserController.findOne);

UserRouter.post('/', UserController.create);

UserRouter.post('/search', UserController.search);

UserRouter.put('/:id', UserController.update);
// patch actualiza un dato concreto, put general

UserRouter.delete('/:id', UserController.delete
);


module.exports = {UserRouter};
