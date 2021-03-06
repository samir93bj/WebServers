require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); //hbs

// Servir contenido estatico
app.use(express.static('public'));

/*
//De esta manera podemos renderizar la view del index
app.get('/',  (req, res) => {
  res.render('home', {
    nombre : 'Samir Mahmud',
    titulo: 'Curso de Node JS'
  });
});

app.get('/generic',  (req, res) => {
    res.render('generic', {
    nombre : 'Samir Mahmud',
    titulo: 'Curso de Node JS'
  });
});

app.get('/elements',  (req, res) => {
    res.render('elements', {
    nombre : 'Samir Mahmud',
    titulo: 'Curso de Node JS'
  });
});*/

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });


app.listen(port,() => {
    console.log(`Example app listening at: https://localhost:${process.env.PORT}`);
});