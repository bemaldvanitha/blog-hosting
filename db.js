const { Sequelize } = require('sequelize');

const DB_HOST = process.env.DB_HOST || 'database-1.cl09dftx61qy.eu-west-1.rds.amazonaws.com';
const DB_USER = process.env.DB_USER || 'admin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'Bemal123#';
const DB_NAME = process.env.DB_NAME || 'my_db';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
});

module.exports = sequelize;