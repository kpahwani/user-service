const Followers = require('../../models/followers');
const Users = require('../../models/users');

const registerUser = async (data) => {
    return await Users.create(data);
};

const updateUserById = async (userId, dataToUpdate) => {
    const options = {
        new: true
    };
    return Users.findByIdAndUpdate(userId, dataToUpdate, options);
};

const fetchUserByEmail = async (email) => {
    return await Users.findOne({ email });
};

const getUserById = async (userId) => {
    return await Users.findOne({ _id: userId });
};

const followUser = (followerId, followeeId) => {
    return Followers.create({ followerId, followeeId });
};

const unfollowUser = (followerId, followeeId) => {
    return Followers.findOneAndDelete({ followerId, followeeId });
};

const getFollowers = (userId) => {
    return Followers.find({ followeeId: userId });
};

const getFollowing = (userId) => {
    return Followers.find({ followerId: userId });
};

module.exports = {
    registerUser,
    updateUserById,
    fetchUserByEmail,
    getUserById,
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing
};
