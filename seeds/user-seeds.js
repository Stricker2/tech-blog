const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'mrashford',
        email: 'mrashford@email.com',
        password: 'password1234'
    },
    {
        username: 'jsancho',
        email: 'jsancho@email.com',
        password: 'password12345'
    },
    {
        username: 'amartial',
        email: 'amartial@email.com',
        password: 'password123456'
    },
    {
        username: 'ceriksen',
        email: 'ceriksen@email.com',
        password: 'password1234567'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;