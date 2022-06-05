var express= require('express');
var app= express();
var bodyParser= require('body-parser');
var friends= [
    'olumide', 'oladele', 'samson', 'lekan', 'damilola'
]


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('home');
})


app.get('/friends', (req, res)=>{
    
    res.render('friendsList' , {friends: friends})
})

app.post('/friends', (req, res)=>{
    var newFriend=req.body.newfriend;
    friends.push(newFriend);
    res.redirect('/friends');
})


app.listen(3000, ()=>{
    console.log('i no fit shenk you blood mi');
})