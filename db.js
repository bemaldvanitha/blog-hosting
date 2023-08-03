const { Sequelize } = require('sequelize');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'dvanitha';
const DB_PASSWORD = process.env.DB_PASSWORD || 'Bemal123';
const DB_NAME = process.env.DB_NAME || 'blog';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
});

module.exports = sequelize;