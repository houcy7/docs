const themeReco = require('./themeReco.js');

const nav = require('../nav');
const blogConfig = require('../blogConfig');
const friendLink = require('../friendLink');

console.log(nav);
module.exports = Object.assign({}, themeReco,
    {
        nav,
        blogConfig,
        friendLink
    }
);
