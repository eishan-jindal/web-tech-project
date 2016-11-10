const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join('/home/ea/zpro' , 'public')));
app.set('view engine','ejs')


var db;

MongoClient.connect('mongodb://127.0.0.1:27017/fepsidb', function(err, database) {
  if (err) return console.log(err)
  db = database 
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.get( '/' , function (req, res) {
	res.sendFile('/home/ea/zpro' + '/index.html')
})

//***********************************************

app.post('/login', (req, res) => {
	console.log('Login clicked')
    db.collection('member').find().toArray((err, result) => {
    var flag = false;
    if (err) return console.log(err)
    	
    else
    {
    	
    	for (var i=0 ; i < result.length ; i++) {
    		if (result[i].reg_no == req.body.name && result[i].password == req.body.pwd) {
    			console.log('successfull login')
    			flag = true;
    			break
    		}
    	}

    	if (flag==true) {res.redirect('/member.html');}
    	else
    	{res.redirect('/index.html');}	
    }
  })
})

app.post('/addmem', function(req, res) {
	db.collection('member').save(req.body, function(err, result){
		if(err) return console.log(err)
		console.log('saved to db')
		res.redirect('/dbms.html')
	})
})

app.post('/addcomments', function(req, res) {
	db.collection('comment').save(req.body, function(err, result){
		if(err) return console.log(err)
		console.log('comment saved to db')
		res.redirect('/member.html')
	})
})


app.post('/qur', (req, res) => {
  db.collection('member').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/com', (req, res) => {
  db.collection('comment').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('comment.ejs', {quotes: result})
  })
})

app.post('/eventret', function(req, res) {
  db.collection('event').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
	console.log('Events Retrieved');
    res.render('events.ejs', {quotes: result})
  })
})

app.post('/addevent', function(req, res) {
	db.collection('event').save(req.body, function(err, result){
		if(err) return console.log(err)
		console.log('event reg saved to db')
		res.redirect('/index.html')
	})
})
