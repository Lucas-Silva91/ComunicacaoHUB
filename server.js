
const http = require ('http');
const port = process.env.PORT || 3000;
const app = require ('./app')

const server = http.createServer(app);

const db = require ('./api/database/dbConfig');

db.connetionToDatabase();
db.DBSetting()

server.listen(port, (req, res)=>console.log(`Servidor: OK || http://localhost:${port}`));