var fs=require('fs');
var data=fs.readFileSync('index.json', 'utf8');
var students =JSON.parse(data);

var port = process.env.PORT || 3030;
console.log(students);
var express=require('express');

var app=express();

//request students list
app.get('/students', function(req, res){
    res.json(students)
  });

//request student id
app.get('/students/:studentid', function(req, res){
    res.send("Hello  " + req.params.studentid)
  });


app.listen(port, function(){
    console.log('listening on *:' + port);
  });
