import express from "express";
import configViewEngine from "./config/ViewEngine";
import initWebRouter from "./routes/web";
require("dotenv").config();
var bodyParser = require('body-parser');
import connection from "./config/connectionDB";


const app = express();

const PORT = process.env.PORT || 8080;

configViewEngine(app);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connection();

initWebRouter(app);

app.listen(PORT, () => {
  console.log("Run on PORT + " + PORT);
});
