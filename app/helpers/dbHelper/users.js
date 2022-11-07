const Users = require('../../models/users');

const registerUser = async (data) => {
    return await Users.create(data);
};

const fetchUserByEmail = async (email) => {
    return await Users.findOne({ email });
};

module.exports = {
    registerUser,
    fetchUserByEmail
};
