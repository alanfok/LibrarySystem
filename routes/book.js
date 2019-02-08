var express = require('express');
var router = express.Router();

router.get("/add_book",(req,res)=>
{
    res.send("hi");
});

module.exports = router;