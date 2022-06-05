var bodyParser= require('body-parser'),
    mongoose= require('mongoose'),
    express= require('express'),
    path= require('path'),
    app= express()
mongoose.connect('mongodb://localhost/camp_zone');
var blogappSchema= new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    created: {type: Date, default: Date.now}
})
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.redirect('/blogs');
})
app.get('/blogs', (req, res)=>{
    res.render('index');
})
app.listen(3000, ()=>{
    console.log('Server is Listening');
})