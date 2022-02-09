const http = require('http');
const { Http2ServerRequest } = require('http2');
const { listenerCount } = require('process');

http.createServer((req, res) => {

    /* res.writeHead(200, {'Content-Type': 'application/json'});

    persona = {
        id:1,
        nombre : 'Samir'
    }

    res.write(JSON.stringify(persona));*/

/*Enviamos un archivo csv por el header*/

    res.setHeader('content-disposition', 'attachment; filename="lista.csv"');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre \n');
    res.write('1, Fernando \n');
    res.write('2, Carlos \n');
    res.write('3, Samir   \n');
    res.write('4, Flor \n');
    
    res.end;
})
.listen(8080);

console.log('Escuchando en el puerto', 8080);