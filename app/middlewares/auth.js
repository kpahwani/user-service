const { verifyAccessToken } = require('../helpers/auth/auth');
const logger = require('../helpers/logger');


const verifyToken = (req, res, next) => {
    logger.info('verifying token...')
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) throw new Error('authentication token not present')
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    return next();
};

module.exports = { 
    verifyToken
};
