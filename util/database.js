const Sequalize = require('sequelize');

const sequalize = new Sequalize.Sequelize('Shop_App','root','Halamadrid123',{
    dialect: 'mysql',
    host:'localhost'
});

module.exports = sequalize;