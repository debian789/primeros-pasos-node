var io = require('socket.io').listen(3000);
io.sockets.on('connection', function (socket) {
    socket.on('mensaje_cliente', function (mensaje) {
        console.log(mensaje)
        io.sockets.emit("mensaje_servidor", mensaje);
    });
});