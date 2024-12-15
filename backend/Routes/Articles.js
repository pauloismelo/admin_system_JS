const mysql = require("mysql2");
const db = require('../db/connection');

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const express = require('express');
const router = express.Router();

//jwt to use in find the userreg
const jwt = require("jsonwebtoken")
const SECRET = process.env.JWT_SECRET // essa variavel está no env


// Configurar o armazenamento do multer (pode salvar no disco ou na memória)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, './uploads');  // Diretório onde os arquivos serão salvos
    },
    filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Nome único para o arquivo
    }
});

const upload = multer({ storage: storage });
    

  

  
// Criar um endpoint para o upload
router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).send({ msg: 'Nenhum arquivo foi enviado!', type: 'error' });
    }
    res.status(200).send({
      msg: 'Arquivo enviado com sucesso!',
      type: 'success',
      file: req.file
    });
});

router.delete('/upload', (req,res)=>{
  const {image} = req.body;
  const imagePath = path.join(__dirname, '../uploads', image);

  fs.unlink(imagePath, (err) =>{
    if (err){
      return res.status(500).json({ type: 'error', msg: 'Error in delete file', details: err });
    }

    res.status(200).json({type: 'success', msg: 'file deleted succesfull'});
  })
})


router.post('/add', (req,res)=>{
  const {title, resume, text, nameFile, status} =  req.body;
  const token = req.headers['authorization']?.split(' ')[1]; // corto a string por espaco vazio e depois pegar o index 1

  if (!token) {
    console.log('Token nao enviado')
    return res.status(403).json({ msg: 'Token não fornecido!', type: 'error' });
  }
  const userreg = jwt.verify(token, SECRET);
  const datereg = new Date;
  
  let sql = "insert into TB_ARTICLES (title, resume, text, file, status, datereg, userreg) values (?,?,?,?,?,?,?)";
  db.query(sql, [title, resume, text, nameFile, status, datereg, userreg], (err, result) => {
      if (err){
        return res.status(500).json({ type: 'error', msg: 'Error in add article', details: err });
      }else{
        res.status(200).json({type: 'success', msg: 'Article inserted succesfull'});
      }
  });
})

router.get(`/list`, (req,res)=>{

  db.query(`select * from TB_ARTICLES order by id desc` , (error, result)=>{
    if (error){
      return res.status(500).json({ type: 'error', msg: 'Error in get articles', details: error });
    }else{
      res.status(200).json({type: 'success', msg: 'Article inserted succesfull', result: result});
    }
  })
})



module.exports = router;