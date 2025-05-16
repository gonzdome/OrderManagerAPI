const express = require('express');

const CustomerRouter = require('./routes/CustomerRouter');
const MenuRouter = require('./routes/MenuRouter');
const OrderRouter = require('./routes/OrderRouter');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  routes() {
    this.server.use('/customer', CustomerRouter);
    this.server.use('/menu', MenuRouter);
    this.server.use('/order', OrderRouter);
  }

  middleware() {
    this.server.use(express.json());
  }
}

module.exports = App;