const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
app.use(cors());
app.use(bodyparser.json());




app.listen(3000, () => {
    console.log("A szerver a 3000 porton fut!")
})
