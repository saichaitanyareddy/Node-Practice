var router = require('express').Router();
const test = require('../models/test');

router.get('/details', async (req, res) => {
    // test.fetchAll().then(function (result) {
    //     res.send(result.toJSON());
    // }).catch(function (err) {
    //     console.error(err);
    // })
    let result = await test.find();
    console.log("result", result);
    res.send(result);
})

router.post('/createPersonDetails', async (req, res) => {
    // test.fetchAll().then(function (result) {
    //     res.send(result.toJSON());
    // }).catch(function (err) {
    //     console.error(err);
    // })

    let result = await test.create({ ...req.body, id: Math.random() });
    console.log("result", result);
    res.send(result);
})

router.get('/about', (req, res) => {
    res.send('Hi, This is Sai Chaitanya. I\'m currently located at Bedford, Texas, 76021');
})
module.exports = router;
