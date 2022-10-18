const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { BCRYPT_SALT = 10, ACCESS_TOKEN_EXPIRY = '5m', REFRESH_TOKEN_EXPIRY = '1d' } =require('config');
const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET || 'test-jwt-access-secret';
const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET || 'test-jwt-refresh-secret';

const hashPassword = (password) => {
    return bcrypt.hash(password, BCRYPT_SALT);
};

const isValidPassword = (plaintextPassword, hashedPassword) => {
    return bcrypt.compare(plaintextPassword, hashedPassword);
};

const createAccessToken = (payload) => {
    return jwt.sign(payload, JWT_ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
};

const createRefreshToken = (payload) => {
    return jwt.sign(payload, JWT_REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
};

const verifyAccessToken = (accessToken) => {
    jwt.verify(accessToken, JWT_ACCESS_TOKEN_SECRET);
};

const verifyRefreshToken = (refreshToken) => {
    jwt.verify(refreshToken, JWT_REFRESH_TOKEN_SECRET);
};

module.exports = {
    hashPassword,
    isValidPassword,
    createAccessToken,
    createRefreshToken,
    verifyAccessToken,
    verifyRefreshToken
};
