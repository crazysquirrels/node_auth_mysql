var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    
    const db = require('../db.js');
    
  
 db.query('SELECT * FROM users_table ', function(error, results, fields){
     if(error) throw error;
      console.log('The solution is: ', results);
  res.render('register', { title: 'Registration Compelte' });
     
 });
   
  res.render('register', { title: 'Registration' });
});

router.post('/register', function(req, res, next) {
 const username = req.body.username;
 const email = req.body.email;
 const password = req.body.password;

    
 const db = require('../db.js');
    
 db.query('INSERT INTO users_table (username, email, password) VALUES (?, ?, ?)', [username, email, password], function(error, results, fields){
     if(error) throw error;
     
  res.render('register', { title: 'Registration Compelte' });
     
 })   
  
});

module.exports = router;
