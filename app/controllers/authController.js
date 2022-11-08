const usersDbHelper = require('../helpers/dbHelper/users');
const { isValidPassword,
    createAccessToken,
    createRefreshToken,
    verifyRefreshToken } = require('../helpers/auth/auth');



const loginUser = async (data) => {
    const { email, password } = data;
    if( !email || !password ) throw new Error(`email or password not present, email: ${email}, password: ${password}`);

    const user = await usersDbHelper.fetchUserByEmail(email);
    if(!user || !(await isValidPassword(password, user.password))) throw new Error('Invalid Credentials');

    const payload = { email, name: user.name };
    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);

    return { accessToken, refreshToken };
};


const getTokenFromRefreshToken = async (data) => {
    const { refreshToken } = data;
    if(!refreshToken) throw new Error('refreshToken not present');
    const decodedPayload = verifyRefreshToken(refreshToken);
    const accessToken = createAccessToken(decodedPayload);
    return { accessToken };
};

module.exports = {
    loginUser,
    getTokenFromRefreshToken
};
