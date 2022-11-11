const { User } = require('../models');

const userData = [
    {
        username: "zacfisher1990",
        password: "superman"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;