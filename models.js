var mongoose = require('mongoose');
var Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;
		

var MyModel = new Schema({
	name	: String,
	date	: Date
});

var MyModel = mongoose.model('MyModel', MyModel);
exports.MyModel = MyModel;