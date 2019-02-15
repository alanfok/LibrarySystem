var express = require('express');
var router = express.Router();
const db = require("../db/sql_connect");

//url = localhost:5000/book/add_book?bk={name}&yr={year}&au={author}
router.get("/add_book",async (req,res,next)=>
{
    var s_BookName = req.query.bk;
    var n_year = req.query.yr;
    var s_author = req.query.au;
    let check = []
     db.query(`SELECT * FROM librarysystems.book WHERE name = '${s_BookName}';`,(err,result,field)=> {
         if (err) {
             console.log(err);
         }
         else {
             if (result.length > 0) {

                 check.push(result[0].quantity);
             }
             else {
                 check.push(0);
             }
         }
         if (check[0] === 0) {
             db.query(`INSERT INTO librarysystems.book (name, author, year, quantity) VALUES ( '${s_BookName}','${s_author}','${n_year},1')`,(err)=>{
                     if(err) {
                         console.log(err);
                         return;
                     }
                     else{
                         res.send("succeed to add book");
                         console.log("succeed to add book");
                         next();
                     }
                 }
             )
         } else
         {
            db.query(`UPDATE librarysystems.book SET quantity = ${check[0]+1} Where name = '${s_BookName}';`, (err)=>{
                if(err) {
                    console.log(err);
                    return;
                }
                else{
                    res.send("succeed to update book quantity");
                    console.log("succeed to update book quantity");
                    next();
                }
            })
         }


    })
});






module.exports = router;