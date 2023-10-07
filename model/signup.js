const Sequelize = require('sequelize')
const sequelize = require('../utils/db')

const signUp = sequelize.define('signup', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = signUp