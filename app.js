var request =require('request');
var express= require('express');
var app=express();

app.set("view engine", "ejs");

app.get("/search",function(req,res){
	res.render("search");
})

app.get("/movie",function(req,res){
	var search= req.query.name
	var url="http://www.omdbapi.com/?s="+search+"&apikey=thewdb"
    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            var movieName=JSON.parse(body);
            res.render("movie",{movieName:movieName});
        }	
    });
});

app.listen(3000,function(){
	console.log("Server has started");
})