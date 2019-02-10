var express = require('express');
var router = express.Router();
const db = require("../db/sql_connect");


//url = localhost:5000/book/add_book?bookname={name}&year={year}&author={author}
router.get("/add_book",(req,res,next)=>
{
    var s_BookName = req.query.bookname;
    var n_year = req.query.year;
    var s_author = req.query.author;
    if(s_BookName != null || n_Bookyear != null || s_author !=null)
    {
        db.query(`INSERT INTO librarysystems.book (name, author, year) VALUES ( '${s_BookName}','${s_author}','${n_year}')`,(err)=>{
            if(err) {
                console.log(err);
                return;
            }
            else{
                res.send("succed to add book");
                console.log("succed to add book");
                next();
            }
            }
        )
    }
});

module.exports = router;