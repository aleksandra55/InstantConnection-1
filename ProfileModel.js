var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema ({
	name: String,
	job: String,
	image_url: String,
	description: String,
	linkedin_url: String,
	mailLink: String
})

var Profile = mongoose.model("profile", ProfileSchema);
module.exports = Profile;