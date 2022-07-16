require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const router = require("./network/routes");
const db = require("./db");
console.log("url: ", process.env.MONGO_URL);
db(process.env.MONGO_URL);

const app = express();

app.use(bodyParser.json());

router(app);

app.listen(3000);
console.log("Server listening in http://localhost:3000");
