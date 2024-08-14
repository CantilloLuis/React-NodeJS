var express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require("cors");
var app = express();
const morgan = require("morgan");
app.use(morgan("tiny"))

app.use(cors())


const autosRoutes = require("./routes/autos");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
    .connect("mongodb+srv://NewApi:o4O8r6OUusxAZdds@newapi.qjkt1x2.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Estamos conectados");

    });


app.use('/api/autos', autosRoutes);



module.exports = app;
