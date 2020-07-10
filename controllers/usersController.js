const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => {
	db.User.find({}, (err, foundUsers) => {
		if (err) console.log(err);
		res.render('user/index', {
			users: foundUsers,
		});
	});
});

router.get('/create', (req, res) => {
	res.render('user/create');
});

router.post('/', (req, res) => {
	db.User.create(req.body, (err, createdUser) => {
		if (err) console.log(err);
		res.redirect('/');
	});
});

// This route will set all the session info
router.get('/signin', (req, res) => {
	res.render('user/signin');
});

router.post('/signin', (req, res) => {
	db.User.findOne({ username: req.body.username }, (err, currentUser) => {
		if (err) console.log(err);
		if (currentUser.username) {
			if (currentUser.password === req.body.password) {
				req.session.userId = currentUser._id;
				req.session.username = currentUser.username;
				req.session.admin = currentUser.isAdmin;
				console.log(req.session);
				res.redirect(`/users/${req.session.userId}`);
			} else {
				res.send('Wrong password');
			}
		} else {
			res.send('No user found');
		}
	});
});

router.get('/:id', (req, res) => {
	db.User.findById(req.params.id, (err, foundUser) => {
		if (err) console.log(err);
		console.log(req.session);
		res.render('user/show', {
			user: foundUser,
			seshId: req.session.userId,
		});
	});
});

module.exports = router;
