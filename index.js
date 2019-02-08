const express = require("express");
const app = express();
const db = require("./db/sql_connect");
const api = require("./routes/api");
const book = require("./routes/book");


app.get('/', (req,res)=>{
        res.send("helloWorld");
    }
);

app.use('/api',api);

app.use("/book",book);



app.listen(5000,()=>{
    console.log("node is connected");
});