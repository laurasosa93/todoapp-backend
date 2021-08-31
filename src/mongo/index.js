require("./connection");
const User = require("./schemas/user.js");
const Task = require("./schemas/task.js");
const Collection = require("./schemas/collection.js");


module.exports = {
	User, Task, Collection,
}

