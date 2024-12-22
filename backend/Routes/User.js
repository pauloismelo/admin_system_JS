const mysql = require("mysql2");
const db = require('../db/connection');

const express = require('express');
const router = express.Router();

//parte de criptografia de senha. So irei utilizar, caso fizer a tela de cadastro
const bcrypt = require("bcryptjs");
const SALT_ROUND = 10


router.get(`/list`, (req, res) => {
    db.query(`select * from TB_USERS`, (error, result) => {
        if (error) res.status(500).json({msg: 'Error in find users'});
        if (result) res.send(result)
    })
})

router.delete(`/:id`, (req,res)=>{
    const {id} = req.params;

    db.query(`delete from TB_USERS where id=?`, [id], (error, result)=>{
        if (error) {
            res.status(500).json({type:'error', msg: 'Error in delete user'});
        }else{
            res.status(200).json({type: 'success', msg: 'User deleted succesfull', result: result});
        }
    })
})

router.post(`/add`, (req,res)=>{
    const {name, password} = req.body;
    const datereg = new Date;

    bcrypt.hash(password, SALT_ROUND, function(err, hash) {
        if (err) {
            res.status(500).json({type: 'error', msg:'Error in get hash by bcrypt'});
        }else{
            db.query(`insert into TB_USERS (name, password, datereg) values (?,?,?)`, [name, hash,datereg],  (error, result)=>{
                if (error) {
                    res.status(500).json({type:'error', msg:'Error in add user'})
                }else{
                    res.status(200).json({type: 'success', msg: 'User added succesfull', result: result});
                }
                
            })
        }
            
        
    })
})

router.get(`/:id`, (req,res)=>{
    const {id} = req.params;

    db.query(`select * from TB_USERS where id=? `, [id], (error, result)=>{
        if (error){
            res.status(500).json({type: 'error', msg:'Error in get user'});
        }else{
            res.status(200).send(result);
        }
    })
})

router.put(`/`, (req,res)=>{

    const {id, name, password} = req.body;

    bcrypt.hash(password, SALT_ROUND, function(err, hash) {
        db.query(`update TB_USERS set name=?, password=? where id=?`, [name, hash, id], (error, result)=>{
            if (error){
                res.status(500).json({type: 'error', msg: 'Error in update user'})
            }else{
                res.status(200).json({type: 'success', msg: 'User updated successful'})
            }
        })
    })
})


module.exports = router;