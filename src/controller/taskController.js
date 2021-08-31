const {Task} = require('../mongo');

//importamos user y creamos las funciones que necesitamos para el esquema
// exports. exporta directamente la funcion al definirla, también se puede definir con const y al final exportar
//reciben req  peticiones del cliente y res, la respuesta que enviamos desde el back-end
//modulo.metodos(loqueestemoshaciendo, find crea una promesa).then(promise, guarda la promesa de ser ejecutado)
//a partir de then es una funcion
//Task.find()
//.then('callback, una funcion definida previamente cuando se resuelta find')
//.catch() cuando falla find  
//then y catch, await +async, para ejecucion hasta resolver x para no devolver undefined p.ej
//find('todo lo que coincida con parametro'), findAll, findOne
//const id = req.params.id (express)

exports.findAll = (req, res) =>{
  Task.find().then((tasks) => {
    res.status(200).json(tasks);
  }).catch(error => {
    res.status(500).json(error);
  });
}

exports.findOne = (req, res) =>{

  const id = req.params.id;
  Task.findById(id).then((task) => {
    res.status(200).json(task);
  }).catch(error => {
    res.status(500).json(error);
  });
}


exports.create = (req, res) => {
  const data = req.body;

  const taskData = {
    name: req.body.name,
    status: req.body.status,
    col: req.body.col
  };
  console.log(taskData);
  const newTask = new Task(taskData);
  newTask.save().then((task) => {
    res.status(200).json({message: "Task created"});
  }).catch(error => {
    console.log(error);
    res.status(500).json({message: "Task not created"});
  });
}  

exports.delete = (req, res) => {
  const id = req.params.id;
  Task.findByIdAndDelete(id)
  .then((task) => {
    res.status(200).json({message: "task deleted"});
  }).catch(error => {
    res.status(500).json({message: "task not deleted"});
  });
  }

  exports.update = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Task.findByIdAndUpdate(id, data).then((task) => {
      res.status(200).json({message: "task updated"});
    }).catch(error => {
      res.status(500).json({message: "task not updated"});
    });
    }

   exports.search = (req, res) => {
   const query = req.body;
   Task.findOne(query).then((task) => {
     res.status(200).json({message: "task Found"});
     }).catch(error => {
     res.status(500).json({message: "task not found"});
    });
    }

    exports.search = (req, res) => {
      const query = req.body;
      Task.find(query).then((task) => {
        res.status(200).json({message: "task Found"});
        }).catch(error => {
        res.status(500).json({message: "task not found"});
       });
    }