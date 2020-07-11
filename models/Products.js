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

const productsArray = [
    {
        name: `Lorem 1`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 100,
        img: `https://picsum.photos/150/150`,
        category: `Type One`
    },
    {
        name: `Lorem 2`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 101,
        img: `https://picsum.photos/150/150`,
        category: `Type One`
    }, {
        name: `Lorem 3`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 102,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    }, {
        name: `Lorem 4`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 103,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 5`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 104,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 6`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 105,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 7`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 106,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 8`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 107,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    }, {
        name: `Lorem 9`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 108,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    }, {
        name: `Lorem 10`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 109,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    },
    {
        name: `Lorem 11`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 200,
        img: `https://picsum.photos/150/150`,
        category: `Type One`
    },
    {
        name: `Lorem 12`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 201,
        img: `https://picsum.photos/150/150`,
        category: `Type One`
    }, {
        name: `Lorem 13`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 202,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    }, {
        name: `Lorem 14`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 203,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 15`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 204,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 16`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 205,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 17`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 206,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 18`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 207,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    }, {
        name: `Lorem 19`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 208,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    }, {
        name: `Lorem 20`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 209,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    },
    {
        name: `Lorem 21`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 300,
        img: `https://picsum.photos/150/150`,
        category: `Type One`
    },
    {
        name: `Lorem 22`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 301,
        img: `https://picsum.photos/150/150`,
        category: `Type One`
    }, {
        name: `Lorem 23`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 302,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    }, {
        name: `Lorem 24`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 303,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 25`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 304,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 26`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 305,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 27`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 306,
        img: `https://picsum.photos/150/150`,
        category: `Type Two`
    }, {
        name: `Lorem 28`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 307,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    }, {
        name: `Lorem 29`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 308,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    }, {
        name: `Lorem 30`,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus exercitationem quaerat sit esse sed mollitia molestiae sapiente temporibus obcaecati quod, impedit asperiores voluptate suscipit odit a maiores numquam vitae nostrum!`,
        price: 309,
        img: `https://picsum.photos/150/150`,
        category: `Type Three`
    },
]
const Products = new mongoose.model(`Products`, productSchema);
module.exports = {
    Products,
    productsArray,
};
