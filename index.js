const express = require('express');
const bodyParser =require('body-parser');
const path =require('path');

const app =express();

const port = process.env.PORT || 3000;

app.set('views',__dirname +'/views');
app.set('views engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'
)));

app.get(('/'),(req, res, next )=> {
    res.render('home.ejs');  
} )

app.get(('/about'),(req, res, next )=> {
    res.render('about.ejs');  
} )

app.get(('/contact'),(req, res, next )=> {
    res.render('contact.ejs');
} )

app.get(('/profile'),(req, res, next )=> {
    res.render('profile.ejs');
} )

app.listen(port,() => {
    console.log('server run http://localhost:',port);
})