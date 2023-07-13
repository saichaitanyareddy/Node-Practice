let router = require('express').Router();
let fs = require('fs');
let moviesData = require('../movies.json')
router.post('/insert', (req, res) => {
    moviesData.movies.push(req.body.data);
    console.log(moviesData);
    fs.writeFile("movies.json", JSON.stringify(moviesData), () => { });
    res.send('Successfully inserted!')
})
module.exports = router;