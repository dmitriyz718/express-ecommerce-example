const mongoose = require('mongoose');
const MONGODB_URI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/user-auth';

mongoose
	.connect(MONGODB_URI, {
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Mongoose successfully connected'))
	.catch((err) => console.log(err));

module.exports = {
	User: require('./User'),
};
