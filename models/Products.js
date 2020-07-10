const mongoose = require(`mongoose`);

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    date: {
        type: Date,
        default: new Date().localeDateString()
    },
    img: String,
    category: Array,
});
const Products = new mongoose.model(`Products`, productSchema);
module.exports = Products;
