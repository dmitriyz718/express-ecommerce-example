const express = require('express');
const router = express.Router();

const db = require('../models');

// Shows All Users
router.get('/', (req, res) => {
	db.User.find({}, (err, foundUsers) => {
		if (err) console.log(err);
		res.render('user/index', {
			users: foundUsers,
		});
	});
});

// Displays sign up form
router.get('/create', (req, res) => {
	res.render('user/create');
});

// Creates new user (sign up)
router.post('/', (req, res) => {
	db.User.create(req.body, (err, createdUser) => {
		if (err) console.log(err);
		res.redirect('/');
	});
});

// Displays Sign In Form
router.get('/signin', (req, res) => {
	res.render('user/signin');
});

// This route will set all the session info, signs user in

router.post('/signin', (req, res) => {
	db.User.findOne({ username: req.body.username }, (err, currentUser) => {
		if (err) console.log(err);
		if (currentUser.username) {
			// If user exists
			if (currentUser.password === req.body.password) {
				// Checks if password matches password for user in database
				req.session.userId = currentUser._id; // Sets session userId to loggedIn userId
				req.session.username = currentUser.username; // Sets session username to loggedIn username
				req.session.admin = currentUser.isAdmin; // Sets session admin status to loggedIn admin status
				res.redirect(`/users/${req.session.userId}`); // Redirects to logged in users page
			} else {
				// If password doesn't match
				res.send('Wrong password');
			}
		} else {
			// If user does not exist
			res.send('No user found');
		}
	});
});

// Show Individual User

router.get('/:id', (req, res) => {
	db.User.findById(req.params.id, (err, foundUser) => {
		if (err) console.log(err);
		console.log(req.session);
		res.render('user/show', {
			user: foundUser,
		});
	});
});

module.exports = router;
