var request= require('request');
request('https://api.openweathermap.org/data/2.5/weather?q=london&appid=81099200f1e920e234d2e611aa9b61c4', (error, response, body)=>{
    if(!error && response.statusCode === 200){
        var parsedData= JSON.parse(body);
        console.log(parsedData['weather'].main);
    }else{
        console.log('There is a mistake somewhere');
        console.log(error);
    }
})