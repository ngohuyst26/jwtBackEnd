import express from "express";
import configViewEngine from "./configs/ViewEngine";
import initWebRouter from "./routes/web";
require("dotenv").config();
var bodyParser = require('body-parser')

const app = express();

const PORT = process.env.PORT || 8080;

configViewEngine(app);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

initWebRouter(app);

app.listen(PORT, () => {
  console.log("Run on PORT + " + PORT);
});
