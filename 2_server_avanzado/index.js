var express = require('express');
var app = express();

// responde hola mundo en la ruta /
app.get('/', function(req, res) {
    console.log("Peticion recibida.")
debugger
   res.send('Hola mundo');
});

app.listen(8000, () => {
    console.log("Servidor funcionando en http://localhost:8000/");
})
