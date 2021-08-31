const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
	name: { type: String, required: true, unique: true},
	icon: { type: Object, required: false },
	color: { type: String, required: false },
	

}, {timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});

const Collection = mongoose.model('Collection', schema);



module.exports = Collection;