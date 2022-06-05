var express= require('express');
var app = express();
var request= require('request')
app.set('view engine', 'ejs');



    

app.get('/', (req, res)=>{
    res.render('search');
    
})
app.get('/results', (req, res)=>{
    var query= req.query.search;
    var url= "http://www.omdbapi.com/?apikey=ba10c90b&s=" + query;
    
    request(url, (error, response, body)=>{
        if(!error && response.statusCode === 200){
            var data= JSON.parse(body);
           
        }
        res.render('find', {data:data});
    })
});



app.listen(3000, ()=>{
    console.log('i dey with you bro');
})