const express = require('express');
const app = express();

const session = require('express-session');
const methodOverride = require('method-override');

const usersController = require('./controllers/usersController');

const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
// Method Override
app.use(methodOverride('_method'));

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

// Sets EJS Variables - Can call these from any ejs view using the varibale name eq, app.locals.title => title on ejs view
app.use((req, res, next) => {
	// Logged In User Info available anywhere
	app.locals.userId = req.session.userId;
	app.locals.username = req.session.username;
	app.locals.admin = req.session.admin;
	next();
});

// Custom Middleware
// Sets Title Dynamically
app.use((req, res, next) => {
	app.locals.title = req.url.replace('/', '| '); // Sets title to url replacing / with |
	next();
});

// Routes
// Index Route
app.get('/', (req, res) => {
	res.render('index');
});

app.use('/users', usersController);

app.get(`*`, (req, res) => {
	res.render(`404`, {
		req: req.url
	})
})


app.listen(PORT, () => console.log(`Server running on ${PORT}`));
