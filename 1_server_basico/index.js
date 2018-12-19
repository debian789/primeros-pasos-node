// Cargar el modulo HTTP
var http = require('http');
 
// Configurar una respuesta HTTP para todas las peticiones
function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}
 
var server = http.createServer(onRequest);
 
// Escuchar al puerto 8001
server.listen(8001);
 
// Poner un mensaje en la consola
console.log("Servidor funcionando en http://localhost:8001/");