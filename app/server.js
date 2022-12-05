const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const routes = require('./routes');
require('./models')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

function bootstrapServer() {
    routes(app);
    return Promise.resolve(app);
}

module.exports = {
    server: bootstrapServer
};
