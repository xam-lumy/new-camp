var express= require('express');
var app= express();
var bodyParser= require('body-parser');

var friends= ['Oladele', 'Olumide', 'Samson', 'Wilson', 'Damilola']

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('home');
});
app.get('/friends', (req, res)=>{
    res.render('friends', {friends: friends});
});

app.post('/addfriend', (req, res)=>{
    console.log(req.body.newfriend);;
   
});

app.listen(3000, ()=>{
    console.log('i don dey with you bloodmi');
})
