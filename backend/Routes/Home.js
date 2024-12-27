const mysql = require("mysql2");
const db = require('../db/connection');

const express = require('express');
const { error } = require("console");
const router = express.Router();


router.get('/bar', async (req, res) => {
    try {
      const data = [];
      
      // promissing the search in database
      const queryPromise = (query, params = []) =>
        new Promise((resolve, reject) => {
          db.query(query, params, (error, results) => {
            if (error) return reject(error);
            resolve(results);
          });
        });
  
      // get the categories
      const categories = await queryPromise('SELECT name FROM TB_CATEGORY WHERE status="ATIVO"');
  
      // For each categories, get the total
      for (const category of categories) {
        const result = await queryPromise('SELECT COUNT(id) AS total FROM TB_CATEGORY WHERE name=?', [category.name]);
        data.push({ category: category.name, qty: result[0].total });
      }
  
      // Retornar os dados
      res.status(200).json({ msg: 'Get data successful', type: 'success', datas: data });
    } catch (error) {
      console.error('Erro ao obter dados:', error);
      res.status(500).json({ msg: 'Error in fetching data', type: 'error' });
    }
});


router.get('/doughnut', (req, res)=>{
    db.query(`SELECT name FROM TB_CATEGORY WHERE status="ATIVO"`, (error, result)=>{
        if (error){
            res.status(500).json({msg: 'Error in get categories data', type: 'error'})
        }else{
            res.send(result)
        }
    })
})

module.exports = router