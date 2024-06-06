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

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

// --

console.log('Iniciando proceso...');
hola('Ale', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('Proceso terminado');
    });
});

// hola('Ale', (nombre) => {
//     hablar(() => {
//         hablar(() => {
//             adios(nombre, () => {
//                 console.log('Terminando proceso...');
//             });
//         });
//     });
// });

// hola('Carlos', () => {});
// adios('Carlos', () => {});