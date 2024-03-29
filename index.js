const express = require('express')

const Controller = require('./Controllers/controller')
const dbConn = require('./utils/dbConfig')
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());
app.use(express.json());
app.use(cors());
const port=5000;
const PORT = process.env.PORT || port;

//if (process.env.PORT === 'production') {
app.use(express.static(path.join(__dirname + "/public")))
//}
const objCollection = {
 app: app
}
new Controller(objCollection);
const server = require('http').createServer(app)
server.listen(PORT, () => {
 console.log(`listing to the port ${port}`)
})