const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, db) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('No he podido escribirlo', err);
        }else{
            console.log('Se ha escrito correctamente');
        }
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo.txt', console.log);
borrar(__dirname + '/archivo1.txt', console.log);