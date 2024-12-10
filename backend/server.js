const mysql = require("mysql2")
const db = require('./db/connection.js');

const cors = require("cors");

const express = require ("express");
const app = express();

require('dotenv').config()

const category = require('./Routes/Category');
const user = require('./Routes/User');


const jwt = require("jsonwebtoken")
const SECRET = process.env.JWT_SECRET // essa variavel está no env



//parte de criptografia de senha. So irei utilizar, caso fizer a tela de cadastro
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(cors());
app.use(express.json());

app.use('/category', category);
//app.use('/user', user);




//routes from register and login keeping in innitial code
app.post('/register', (req,res) =>{
    const {name, password} = req.body;
    const datereg = new Date;

    let sql1 = "select id from tb_users where name=?";
    db.query(sql1, [name], (error,result) =>{
        if (error){
            console.log(error)
        }else if (result[0]){
            res.send({msg: "User found in our database. try again", type :'error'})
        }else{
            bcrypt.hash(password, saltRounds, function(err, hash) {
                let sql = "insert into TB_USERS (name, password, datereg) values (?,?,?)";
                db.query(sql, [name, hash, datereg], (err, result) => {
                    if (err){
                        console.log(err)
                    }else{
                        res.send({msg: "User register susccessful!", type: 'success'})
                    }
                });
            });
        }
    })
})

app.post('/login', (req,res) =>{
    const {name, password} = req.body;
   

    let sql1 = "select id, password from tb_users where name=? ";
    db.query(sql1, [name], (error,result) =>{
        if (error){
            console.log(error)
        }else if (result[0]){
            bcrypt.compare(password, result[0].password, function(err,resu){
                if (err) console.log(err);
                if (resu){
                    const token= jwt.sign(result[0].id, SECRET);
                    res.send({msg: "User authenticated!", type :'success', token: token})
                }else{
                    res.send({msg: "Verify your password. Try again!", type :'error'})
                }
            })


           
        }else{
            res.send({msg: "User not found. Try again!", type :'error'})
        }
    })
})

    
app.listen(process.env.PORT_BACKEND,() =>{
    console.log("rodando servidor na porta ", process.env.PORT_BACKEND)
});
