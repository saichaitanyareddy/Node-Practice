const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const movies = require('./routes/movies');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/movies', [movies]);

app.get('/', (req, res) => {
    res.send('Hello Sai');
})

app.listen(3000, () => { console.log("server start") });