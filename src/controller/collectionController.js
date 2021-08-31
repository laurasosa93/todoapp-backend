const {Collection} = require('../mongo');

//importamos user y creamos las funciones que necesitamos para el esquema
// exports. exporta directamente la funcion al definirla, también se puede definir con const y al final exportar
//reciben req  peticiones del cliente y res, la respuesta que enviamos desde el back-end
//modulo.metodos(loqueestemoshaciendo, find crea una promesa).then(promise, guarda la promesa de ser ejecutado)
//a partir de then es una funcion
//Collection.find()
//.then('callback, una funcion definida previamente cuando se resuelta find')
//.catch() cuando falla find  
//then y catch, await +async, para ejecucion hasta resolver x para no devolver undefined p.ej
//find('todo lo que coincida con parametro'), findAll, findOne
//const id = req.params.id (express)


exports.findAll = (req, res) =>{
  Collection
.find().then((collections) => {
    res.status(200).json(collections);
  }).catch(error => {
    res.status(500).json(error);
  });
}

exports.findOne = (req, res) =>{

  const id = req.params.id;
  Collection
.findById(id).then((collection) => {
    res.status(200).json(collection);
  }).catch(error => {
    res.status(500).json(error);
  });
}


exports.create = (req, res) => {
  const data = req.body;

  const newCollection = new Collection
(data);
  newCollection.save().then((collection) => {
    res.status(200).json({message: "collection created"});
  }).catch(error => {
    res.status(500).json({message: "collection not created"});
  });
}  

exports.delete = (req, res) => {
  const id = req.params.id;
  Collection
.findByIdAndDelete(id)
  .then((user) => {
    res.status(200).json({message: "collection deleted"});
  }).catch(error => {
    res.status(500).json({message: "collection not deleted"});
  });
  }

  exports.update = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Collection.findByIdAndUpdate(id, data).then((collection) => {
      res.status(200).json({message: "collection updated"});
    }).catch(error => {
      res.status(500).json({message: "collection not updated"});
    });
    }

    exports.search = (req, res) => {
    const query = req.query;
    Collection.findOne(query).then((collection) => {
      res.status(200).json({message: "collection Found"});
    }).catch(error => {
      res.status(500).json({message: "collection not found"});
    });
    }