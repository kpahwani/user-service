const express = require('express');
const app = express();
const routes = require('./routes');
require('./models')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function bootstrapServer() {
    routes(app);
    return Promise.resolve(app);
}

module.exports = {
    server: bootstrapServer
};
