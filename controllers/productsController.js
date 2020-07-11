// current path: /products
// show

const router = require("./usersController");

// create

// edit/update

// delete

// show all : `/`
// Shows All Users
router.get('/', (req, res) => {
    db.Products.find({}, (err, foundProducts) => {
        if (err) console.log(err);
        res.render('products/index', {
            users: foundProducts,
        });
    });
});

module.exports = router;
