var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat= mongoose.model("Cat", catSchema);
// var george= new Cat({
//     name: "Mrs Norris",
//     age: 10,
//     temperament: "Evil"
// });

// george.save((err, cat)=>{
//     if(err){
//         console.log('something went wrong');
//     } else {
//         console.log('we just saved a  cat to the DB:');
//         console.log(cat);
//     }
// });
// Cat.find({}, (err, cats)=>{
//     if(err){
//         console.log('Oh NO, ERROR');
//         console.log(err);
//     } else {
//         console.log("ALL THE CATS");
//         console.log(cats);
//     }
// })
Cat.create({
    name:'Snow White',
    age: '15',
    temperament: 'Bland'
}, (err, cat)=>{
    if(err){
        console.log('Oh NO, ERROR');
         console.log(err); 
    } else{
        console.log("ALL THE CATS");
         console.log(cat);
    }
})