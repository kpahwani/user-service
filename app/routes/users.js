const usersRoutes = require('express').Router();
const usersController = require('../controllers/usersController')
const logger = require('../helpers/logger');
const asyncRouteHandler =require('../helpers/asyncRouteHandler');


usersRoutes.post('/register', asyncRouteHandler(async (req, res) => {
    const registeredUser = await usersController.registerUser(req.body);
    res.send(registeredUser);
}));


module.exports = usersRoutes;
