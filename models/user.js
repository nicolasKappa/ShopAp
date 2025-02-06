const Sequalize = require('sequelize');

const sequalize = require('../util/database');

const User = sequalize.define('user', {
    id:{
        type: Sequalize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequalize.STRING,
    email: Sequalize.STRING
});

module.exports = User;