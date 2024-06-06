var tabla = [{
    a: 1,
    b: 'z',
},
{
    a: 2,
    b: 'Otra'
}]

console.table(tabla);

// ---

console.group('Conversacion');
console.log('hola');
console.group('Bla');
console.log('blablabla');
console.log('blablabla');
console.log('blablabla');
console.groupEnd('Bla');
console.log('Adios');
console.groupEnd('Conversacion');
console.log('Otra cosa');

// ---

function function1() {  
    console.group('Funcion 1');
    console.log('Esto es de la funcion 1');
    function2();
    console.log('He vuelto a la funcion 1');
    console.groupEnd('Funcion 1');
}

function function2() {
    console.group('Funcion 2');
    console.log('Esto es de la funcion 2');
    console.groupEnd('Funcion 2');
}

function1();
console.log('Empezamos');

// ---

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');