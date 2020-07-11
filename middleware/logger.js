// Sets EJS Variables - Can call these from any ejs view using the varibale name eq, app.locals.title => title on ejs view
// Express Session
app.use(
    session({
        secret: 'keyboard cat', // i dont know some kind of cat? meow
        resave: false,
        saveUninitialized: true,
    })
);

const logger = ((req, res, next) => {
    // Logged In User Info available anywhere
    app.locals.userId = req.session.userId;
    app.locals.username = req.session.username;
    app.locals.admin = req.session.admin;
    next();
});

// Custom Middleware
// Sets Title Dynamically
const urlReplacer = ((req, res, next) => {
    app.locals.title = req.url.replace('/', '| '); // Sets title to url replacing / with |
    next();
});

module.exports = { logger, urlReplacer };
