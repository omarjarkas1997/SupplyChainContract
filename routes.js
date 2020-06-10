
// server.js
const routes = require('next-routes')();

routes
    .add('/products/new','/products/new')
    .add('/products/:address', '/products/show');

module.exports = routes;