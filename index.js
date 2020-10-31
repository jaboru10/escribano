const express = require("express");
const app = express();

let usuario = {
 nombre:'',
 apellido: ''
};


app.post('/hola', function (req, res) {
  res.send('[POST]Saludos desde express');
});
app.get('/hola', function (req, res) {
  res.send('[GET]Saludos desde express');
});
app.('/adios', function (req, res) {
  res.send('Adios hasta pronto!');
});
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});