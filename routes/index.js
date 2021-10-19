const router = require('./productsRouter');
const productsRouter = require('./productsRouter');

function routerApi(app){
  app.use('/products',productsRouter);

}

module.exports = routerApi;
