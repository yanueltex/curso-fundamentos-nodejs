// const p = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso acabó');
    setTimeout(() => {
        console.log('Ésto no se va a ver nunca');
    }, 0);
});

process.on('uncaughtException', (err, origen) => {
    console.error('Se nos ha olvidado captura un error');
    console.error(err);
});

// functionquenoexiste();

console.log('Esto si el error no se recoje, no sale');