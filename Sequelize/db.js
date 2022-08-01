const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'Sa05413196*',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize;