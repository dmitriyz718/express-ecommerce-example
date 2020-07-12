// current path: /products
// show

const express = require('express');

const router = express.Router();
const db = require('../models');

// create

// edit/update

// delete

// show all : `/`
// Shows All Users
router.get('/', (req, res) => {
  db.Products.find({}, (err, foundProducts) => {
    if (err) console.log(err);
    res.render('products/index', {
      products: foundProducts,
    });
  });
});

module.exports = router;
