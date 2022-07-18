require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const router = require("./network/routes");
const db = require("./db");
db(process.env.MONGO_URL);

const app = express();

app.use(bodyParser.json());

router(app);

app.listen(process.env.PORT || 3000);
console.log(`Server listening in port:${process.env.PORT || 3000}`);
