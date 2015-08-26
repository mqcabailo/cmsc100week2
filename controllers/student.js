var db = require(__dirname+'/../lib/mysql');

exports.find = function(req,res){
      
      db.query("SELECT * FROM student",function(err,rows){
            if(err)return next(err);
            res.send(rows);
      });
      
      //res.send('Hello World!');
};

exports.insert = function(req,res){
      db.query("INSERT INTO student(studno,name) VALUES(?,?)",[req.body.studno,req.body.name],
      function(err,rows){
          if(err)return next(err);
            res.send(rows);  
      });   
};

exports.findOne = function(req,res){

      db.query("SELECT * FROM student where id = ?",[req.params.id],function(err,rows){
            if(err)return next(err);
            
            if(rows.length === 0){
                  res.status(404).send('Student not found')     
            }else{     
                  res.send(rows[0]);
            }
      });
      
};

exports.update = function(req,res){
     
      db.query("UPDATE student SET ? WHERE id = ?",[req.body,req.params.id],function(err,rows){
            if(err)return next(err);
            res.send(rows);
      });
            
};

exports.remove = function(req,res){
      
      db.query("DELETE FROM student WHERE id = ?",[req.params.id],function(err,rows){
            if(err)return next(err);
            res.send(rows);
      });     
      
};