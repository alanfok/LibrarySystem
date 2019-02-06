const express = require("express");
var app = express();
var db = require("./db/sql_connect");


app.get('/', (req,res)=>{
        res.send("helloWorld");
    }
);


app.listen(5000,()=>{
    console.log("node is connected");
});