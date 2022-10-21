const usersRoutes = require('express').Router();
const usersController = require('../controllers/usersController')
const logger = require('../helpers/logger');
const asyncRouteHandler =require('../helpers/asyncRouteHandler');


usersRoutes.post('/register', asyncRouteHandler(async (req, res) => {
    const registeredUser = await usersController.registerUser(req.body);
    res.send(registeredUser);
}));

// update user
usersRoutes.put('/user/:userId', asyncRouteHandler(async (req, res) => {
    const userId = req.params.userId;
    const user = await usersController.updateUser(userId, req.body);
    res.send(user);
}));


usersRoutes.get('/user/:userId', asyncRouteHandler(async (req, res) => {
    const userId = req.params.userId;
    const user = await usersController.getUserDetails(userId);
    res.send(user);
}));


usersRoutes.post('/follow', asyncRouteHandler(async (req, res) => {
    const followData = await usersController.followUser(req.body);
    res.send({
        msg: 'follow successful',
        data: followData
    });
}));


usersRoutes.post('/unfollow', asyncRouteHandler(async (req, res) => {
    const unfollowData = await usersController.unfollowUser(req.body);
    res.send({
        msg: 'unfollow successful',
        data: unfollowData
    });
}));


module.exports = usersRoutes;
