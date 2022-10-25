const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
	{
		fname: {
			type: String,
			required: true,
		},
		lname: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
