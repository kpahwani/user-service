const express = require('express');
const usersRoutes = require('./users');
const authRoutes = require('./auth');
const logger = require('../helpers/logger');

module.exports = function(app) {
    const router = express.Router();

    app.use('/', router);


    // middlewares
    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    //Error Handler
    /**
    * @param error
    * @param req
    * @param res
    * @param next
    */
    function errorHandler(error, req, res, next) {
        logger.error(`Error in content-service: `, error);
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).send({
            status: 'error',
            message: error.message
        });
    }
    //routes:
    router.use('', authRoutes);
    router.use('', usersRoutes);
    router.use(errorHandler);
};
