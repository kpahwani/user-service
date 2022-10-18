const authRoutes = require('express').Router();
const authController = require('../controllers/authController')
const logger = require('../helpers/logger');
const asyncRouteHandler =require('../helpers/asyncRouteHandler');


authRoutes.post('/login', asyncRouteHandler(async (req, res) => {
    const { accessToken, refreshToken } = await authController.loginUser(req.body);
    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    res.json({ accessToken });
}));


authRoutes.post('/refresh', asyncRouteHandler(async (req, res) => {
    const tokenData = await authController.getTokenFromRefreshToken(req.body);
    res.send(tokenData);
}));

module.exports = authRoutes;
