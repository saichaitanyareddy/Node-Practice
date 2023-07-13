const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const test = require('./routes/test');
const port = process.env.port || 5000;
const mongoose = require("mongoose");
let connection;
//configure mongoose
const mangoConnect = async () => {
    connection = await mongoose.connect("mongodb://127.0.0.1:27017/demo");
    const personSchema = new mongoose.Schema({
        id: String,
        name: String,
        mobile: Number,
        address: String
    });
    const personDetails = mongoose.model('person-details', personSchema);
    console.log("connection", connection.modelNames())
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', [test]);

app.get('/', (req, res) => {
    res.send('welcome to node');
})

app.listen(port, async () => {
    await mangoConnect();

    console.log(`server is running on port:${port}`);
})