const express = require('express');

const CustomerRouter = require('./routes/CustomerRouter');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  routes() {
    this.server.use('/customer', CustomerRouter);
  }

  middleware() {
    this.server.use(express.json());
  }
}

module.exports = App;