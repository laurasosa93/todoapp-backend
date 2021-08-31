const express = require('express');
const {CollectionController} = require('../controller')

const CollectionRouter = express.Router();

// '/' significa /collection/...(definido en index) 
CollectionRouter.get('/', CollectionController.findAll);

CollectionRouter.get('/:id', CollectionController.findOne);

CollectionRouter.post('/', CollectionController.create);

CollectionRouter.post('/search', CollectionController.search);

CollectionRouter.put('/:id', CollectionController.update);
// patch actualiza un dato concreto, put general

CollectionRouter.delete('/:id', CollectionController.delete);


module.exports = {CollectionRouter};
