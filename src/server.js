const App = require('./app/app');
// require('dotenv').config();

const server = new App().server;

server.listen(3000, () => console.log(`Listening on http://localhost:${3000}`));