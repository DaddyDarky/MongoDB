const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//Como es una web 
const app = express();


const session = require('express-session');
// para cargar configuración de la APP desde .env
const dotenv = require('dotenv');

//Motor de HTML
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

//Contenido estatico
app.use(express.static('public'));

dotenv.config();

mongoose.connect(process.env.MONGO_URL)

const authRoutes= require('./routes/auth')
app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
    res.redirect("/auth");
});



app.listen(process.env.SERVER_PORT, () => {
    console.log( `Servidor en funcionamiento en el puerto ${
    process.env.SERVER_PORT} `);
    });