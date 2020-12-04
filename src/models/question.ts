import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({

	question: {
		type: String,
		required: true,
	},
	answer: {
		type: String,
		required: true,
	},
	domain: {
		type: String,
		required: true,
	},
	questionNo: {
		type: Number,
		required: true,
		index: true,
	},
});

export default questionSchema;
