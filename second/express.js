var express= require('express');
var app= express();
var path = require('path');



let parameter= new URLSearchParams(window.location.search)
console.log(parameter.get(parameterName))

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('partials'));
app.get('/', (req, res)=>{
    res.render('index');
});

app.set('view engine', 'ejs');
app.get('/post', (req, res)=>{
    var posts= [
        {title: "football lovers", author: "Oladele"},
        {title: "fashion", author: "Samson"},
        {title: "love", author: "Olumide"}
    ]
    res.render('posts', {posts: posts});
});
app.set('view engine', 'ejs');
app.get('/statement/:start', (req, res)=>{
    var con= req.params.start;
    res.render('condition', {condition: con});
});



app.listen(3000, ()=>{
    console.log('i dey with you');
});
