const {User} = require('../mongo');

//importamos user y creamos las funciones que necesitamos para el esquema
// exports. exporta directamente la funcion al definirla, también se puede definir con const y al final exportar
//reciben req  peticiones del cliente y res, la respuesta que enviamos desde el back-end
//modulo.metodos(loqueestemoshaciendo, find crea una promesa).then(promise, guarda la promesa de ser ejecutado)
//a partir de then es una funcion
//User.find()
//.then('callback, una funcion definida previamente cuando se resuelta find')
//.catch() cuando falla find  
//then y catch, await +async, para ejecucion hasta resolver x para no devolver undefined p.ej
//find('todo lo que coincida con parametro'), findAll, findOne
//const id = req.params.id (express)


exports.findAll = (req, res) =>{
  User.find().then((users) => {
    res.status(200).json(users);
  }).catch(error => {
    res.status(500).json(error);
  });
}

exports.findOne = (req, res) =>{

  const id = req.params.id;
  User.findById(id).then((user) => {
    res.status(200).json(user);
  }).catch(error => {
    res.status(500).json(error);
  });
}


exports.create = (req, res) => {
  const data = req.body;

  const userData = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  };

  const newUser = new User(userData);
  newUser.save().then((user) => {
    res.status(200).json({message: "user created"});
  }).catch(error => {
    res.status(500).json({message: "user not created"});
  });

}  

exports.delete = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
  .then((user) => {
    res.status(200).json({message: "User deleted"});
  }).catch(error => {
    res.status(500).json({message: "User not deleted"});
  });
  }

  exports.update = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    User.findByIdAndUpdate(id, data).then((user) => {
      res.status(200).json({message: "User updated"});
    }).catch(error => {
      res.status(500).json({message: "User not updated"});
    });
    }

   exports.search = (req, res) => {
   const query = req.body;
   User.findOne(query).then((user) => {
     res.status(200).json({message: "User found"});
   }).catch(error => {
     res.status(500).json({message: "User not found"});
   });
   }
   
