const express = require("express");
const app = express();

app.get("/", (req,res,next)=>{
    res.send("hello,api");
    }
);


module.exports = app;