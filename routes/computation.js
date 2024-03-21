const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    let x = req.query.x ? parseFloat(req.query.x) : Math.random();
    let y = Math.random();
    
    const difference = Math.abs(x - y);
    res.send(`Math.abs(x - y) applied to ${x} and ${y} is ${difference}`);
});

module.exports = router;