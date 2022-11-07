const usersDbHelper = require('../helpers/dbHelper/users');
const { hashPassword } = require('../helpers/auth/auth');



const registerUser = async (data) => {
    const { email, password } = data;
    if( !email || !password ) throw Error(`email or password not present, email: ${email}, password: ${password}`);
    const hashedPassword = await hashPassword(password);
    const user = await usersDbHelper.registerUser({ email, password: hashedPassword });
    return {
        id: user._id,
        email
    };
};


module.exports = {
    registerUser
};
