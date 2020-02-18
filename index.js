const express = require('express'), 
path=require('path'), 
bodyParser= require('body-parser'),
cons=require("consolidate"), 
dust=require('pg'), 
app=express();

//DB Connect String
const connect="postgres://ayanahawk:Mangos407!@localhost/recipe"

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function(req, res){
    console.log(test)
});

app.listen(3000, function(){
    console.log('server started port 3000');
})