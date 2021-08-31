const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
	name: { type: String, required: true, unique: true},
	status: {type: Boolean, required: true},
	col: {type: mongoose.Schema.Types.ObjectId}
}, {timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});

const Task = mongoose.model('Task', schema);

module.exports = Task;