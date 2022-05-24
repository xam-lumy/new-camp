var express= require('express');
var app= express();

app.get('/r/:another/comment/:title', (req, res)=>{
    let path= (req.params.another);
    res.send(`i love ${path}`)
    
});
app.get('*', (req, res)=>{
});

app.listen(3000, ()=>{
    console.log('listening');
})
