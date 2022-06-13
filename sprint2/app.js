// Entry point


// modules and port configuration
const express = require('express');
const app = express();
const path = require('path')
const puerto = 3030;

// static routes
app.use('/3d', express.static(__dirname + '/public/3D'));
app.use('/audios', express.static(__dirname + '/public/audios'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/product', (req, res) => {
    res.sendFile(__dirname + '/views/product.html')
})

app.get('/cart', (req, res) => {
    res.sendFile(__dirname + '/views/cart.html')
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

// Levantar servidor
app.listen (puerto, ( ) => {
    console.log("Servidor corriendo en el puerto" + puerto);
});