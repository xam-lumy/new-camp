var express= require('express');
var app= express();
var bodyParser= require('body-parser');
var path= require('path');
var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/camp_zone');

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})
var Campground= mongoose.model('Campground', campgroundSchema);
// Campground.create({
//     name: 'mount sinai',
//     image: 'https://media.istockphoto.com/photos/multigeneration-family-sitting-and-eating-outdoors-by-car-caravan-picture-id1337586097?b=1&k=20&m=1337586097&s=170667a&w=0&h=QS1a_OkRrY-2FUMCn2v0wCTBgdYgUT5uTwh6-cTXAtM=',
//     description: 'i love this place'
// }, (err, campground)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(campground);
//     }
// })

//var campgrounds= [   
//     {name: 'mount sinai', image: 'https://media.istockphoto.com/photos/multigeneration-family-sitting-and-eating-outdoors-by-car-caravan-picture-id1337586097?b=1&k=20&m=1337586097&s=170667a&w=0&h=QS1a_OkRrY-2FUMCn2v0wCTBgdYgUT5uTwh6-cTXAtM='},
//     {name: 'park min so', image: 'https://media.istockphoto.com/photos/shot-of-a-cute-vintage-teapot-in-a-campsite-near-to-lake-picture-id1305448692?b=1&k=20&m=1305448692&s=170667a&w=0&h=JIAAnIWgx2dwTi96Zn37rauFCRV11EBIPeTbwAjbpPc='},
//     {name: 'park min so', image: 'https://media.istockphoto.com/photos/two-female-friends-sitting-next-to-campfire-in-a-wild-camp-in-the-picture-id1305448689?b=1&k=20&m=1305448689&s=170667a&w=0&h=BbJ-c-EoQz-FXIvAe-lgsf79zfYMeBlodWacp3l2WFo='},
//     {name: 'park min so', image: 'https://media.istockphoto.com/photos/motor-home-and-sunset-picture-id1321202626?b=1&k=20&m=1321202626&s=170667a&w=0&h=-Xggj1lySaS1HQvEXBTy2Ba4_rPUEyR3nt40les3ues='},
//     {name: 'park min so', image: 'https://media.istockphoto.com/photos/woman-resting-laying-on-hammock-at-camping-site-picture-id1383464109?b=1&k=20&m=1383464109&s=170667a&w=0&h=ssnAnx8HVAemx9NXDsKkTfo_cP6_jM76D3iJNF6REPE='},
//     {name: 'park min so', image: 'https://media.istockphoto.com/photos/camping-out-with-my-dog-picture-id1319659043?b=1&k=20&m=1319659043&s=170667a&w=0&h=1cUgJ32m2N9KTReb6DWnQUK5ACMHSOk1vmFsWgc2flo='},
//     {name: 'park min so', image: 'https://media.istockphoto.com/photos/two-female-friends-sitting-next-to-campfire-in-a-wild-camp-in-the-picture-id1305448689?b=1&k=20&m=1305448689&s=170667a&w=0&h=BbJ-c-EoQz-FXIvAe-lgsf79zfYMeBlodWacp3l2WFo='}
// ]

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('home');
})
app.get('/index', (req, res)=>{
    Campground.find({}, (err, campgrounds)=>{
        if(err){
            console.log(err);
        } else{
            res.render('campground', {campgrounds: campgrounds})
        }
    })
    
   
})

app.get('/campgrounds/new', (req, res)=>{
    res.render('addcamp');
})

app.post('/campgrounds', (req, res)=>{
    var campName= req.body.campname;
    var imgUrl= req.body.imgurl;
    var description= req.body.descript;
    var newCamp= {name: campName, image: imgUrl, description: description};
    Campground.create(newCamp, (err, newlyCreated)=>{
        if(err){
            console.log(err);
        } else{
            res.redirect('/index')
        }
    });
    

})
app.get('/campgrounds/:id', (req, res)=>{
    Campground.findById(req.params.id, (err, foundCampground)=>{
        if(err){
            console.log(err)
        } else {
            res.render('show', {campground: foundCampground})
        }
    })
})

app.listen(3000, ()=>{
    console.log('lets run this boss');
})