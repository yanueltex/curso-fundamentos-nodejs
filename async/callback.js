function hola(nombre, miCallback) {
    console.log('Hola, soy una función asíncrona');
    setTimeout(() => {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1500);
}

console.log('Iniciando proceso...');
hola('Ale', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso...');
    })
});

// hola('Carlos', () => {});
// adios('Carlos', () => {});