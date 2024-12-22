const express = require ("express");
const app = express();
const serverless = require('serverless-http');

const mysql = require("mysql2")
const db = require('./db/connection.js');

const cors = require("cors");

const path = require('path');
require('dotenv').config()

const category = require('./Routes/Category.js');
const user = require('./Routes/User.js');
const articles = require('./Routes/Articles.js');
const helpAI = require('./Routes/helpAi.js');

const jwt = require("jsonwebtoken")
const SECRET = process.env.JWT_SECRET // essa variavel está no env


//parte de criptografia de senha. So irei utilizar, caso fizer a tela de cadastro
const bcrypt = require("bcryptjs");
const SALT_ROUND = 10

app.use(cors());
app.use(express.json());

// Configuração para servir arquivos estáticos (imagens) - quando você acessar http://localhost:3001/uploads/algum_arquivo.png, o Express vai procurar o arquivo na pasta ./uploads e servir a imagem.
app.use('/uploads', express.static(path.join(__dirname, './uploads')));

app.use('/category', category);
app.use('/articles', articles);
app.use('/helpAi', helpAI);
app.use('/user', user);


app.get('/', (req,res)=>{
    res.send('ok, acessei!!')
})

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
            bcrypt.hash(password, SALT_ROUND, function(err, hash) {
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

//app.listen(process.env.PORT_BACKEND,() =>{
//    console.log("rodando servidor na porta ", process.env.PORT_BACKEND)
//});

module.exports.handler = serverless(app);