const { server } = require('./app/server');
const logger = require('./app/helpers/logger');

server().then((app) => {
    const port = process.env.USER_SERVICE_PORT || 8003;
    app.listen(port, () => {
        logger.info(`User service is listening on port ${port}`);
    });
});
