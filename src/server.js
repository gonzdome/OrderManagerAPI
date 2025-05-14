const App = require('./app/app');
const { dbConection } = require('./app/database/DatabaseConnection');

const server = new App().server;

dbConection.authenticate()
.then(() => { 
    server.listen(3000, () => console.log(`DB connected and Listening on http://localhost:${3000}`))
}).catch(error => console.log(`DB conection failed: ${error}`));
