const usersDbHelper = require('../helpers/dbHelper/users');
const { hashPassword } = require('../helpers/auth/auth');



const registerUser = async (data) => {
    const { email, password, ...userData } = data;
    if( !email || !password ) throw Error(`email or password not present, email: ${email}, password: ${password}`);
    const hashedPassword = await hashPassword(password);
    const user = await usersDbHelper.registerUser({ email, password: hashedPassword, ...userData });
    return {
        id: user._id,
        email,
        ...userData
    };
};


const updateUser = async (userId, dataToUpdate) => {
    let user = await usersDbHelper.updateUserById(userId, dataToUpdate);
    return user || {};
};


const getUserDetails = async (userId) => {
    let user = await usersDbHelper.getUserById(userId);
    if(user) {
        user = user.toObject()
        user.followers = await usersDbHelper.getFollowers(userId) || 111;
        user.following = await usersDbHelper.getFollowing(userId);
    }
    return user || {};
};


const followUser = ({ followerId, followeeId }) => {
    return usersDbHelper.followUser(followerId, followeeId)
};


const unfollowUser = ({ followerId, followeeId }) => {
    return usersDbHelper.unfollowUser(followerId, followeeId)
};


module.exports = {
    registerUser,
    updateUser,
    getUserDetails,
    followUser,
    unfollowUser
};
