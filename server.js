const express = require('express');
const app = express();

const session = require('express-session');

const usersController = require('./controllers/usersController');

const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));

// Method Override
// app.use(methodOverride('_method'));

// Express BodyParser
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
	})
);

// Sets EJS Variables
app.use((req, res, next) => {
	app.locals.userId = req.session.userId;
	app.locals.username = req.session.username;
	app.locals.admin = req.session.admin;
	console.log(app.locals);
	next();
});

app.get('/', (req, res) => {
	res.render('index');
});

app.use('/users', usersController);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
