const mysql = require("mysql2");
const db = require('../db/connection');

const express = require('express');
const router = express.Router();


router.post("/add", (req,res) =>{
    const {name, status} = req.body;

    db.query("select id from tb_category where name=? ", [name], (error,result) =>{

        if (result){
            
            if (result[0]===undefined){
                //insert new register in database
                db.query("insert into tb_category (name,status) values (?,?)", [name,status], (error1, result1)=>{
                    if (error1) {
                        res.status(500).json({msg: 'Error in insert category'});
                    }else{
                     res.send({msg: "Category insert susccessful!", type: 'success'})
                    }
                   
                })
            }else{
                res.status(500).json({msg: 'Category found in our database. Try again with another name.'});
            }
        }else if(error) res.status(500).json({msg: 'Error in find category'});
    })
});

router.get("/list", (req,res) =>{
    db.query('select * from tb_category', (err,result)=>{
        if (err) {
            res.status(500).json({msg: 'Error in insert category'});
        }else{
            res.send(result)
        }
    })
});

router.delete("/:id", (req,res) =>{
    const {id} = req.params;
    db.query('delete from tb_category where id=?', [id], (err,result)=>{
        if (err) {
            res.status(500).json({msg: 'Error in delete category'});
        }else{
            res.send({msg: "Category delete susccessful!", type: 'success'})
        }
    })
});

router.get("/:id", (req,res) =>{
    const {id} = req.params;
    db.query('select * from tb_category where id=?', [id], (err,result)=>{
        if (err) {
            res.status(500).json({msg: 'Error in find specificy category'});
        }else{
            res.send(result)
        }
    })
});

router.put("/:id", (req,res) =>{
    const {id,name,status} = req.body;
    db.query('update tb_category  set name=?, status=? where id=?', [name, status, id], (err,result)=>{
        if (err) {
            res.status(500).json({msg: 'Error in update specificy category'});
        }else{
            res.send({msg: "Category updated susccessful!", type: 'success'})
        }
    })
});

router.put("/status/:id/:status", (req,res) =>{
    const {id,status} = req.params;
    newStatus = status==='ATIVO' ? 'INATIVO' : 'ATIVO'

    db.query('update tb_category  set status=? where id=?', [ newStatus, id], (err,result)=>{
        if (err) {
            res.status(500).json({msg: 'Error in update category`s status '});
        }else{
            res.send({msg: "Category`s status updated susccessful!", type: 'success'})
        }
    })
});


module.exports = router;

