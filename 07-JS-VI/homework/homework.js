// Do not change any of the function names

function mayuscula(nombre) {
  var nombreMod = nombre[0].toUpperCase();

  for (i=1; i < nombre.length; i++) {
    nombreMod=nombreMod + nombre [i];
  }
  
  return nombreMod;
    
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
}

function invocarCallback(cb) {
  return cb();
  // Invoca al callback `cb`
  //Tu código:
}

function operacionMatematica(n1, n2, cb) {
  return cb(n1,n2);
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
}

function sumarArray(numeros, cb) {
var suma = numeros.reduce(function(acc, elemento){
  return acc + elemento;
});
return cb(suma);
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
}

function forEach(array, cb) {
  array.forEach(cb);

  
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
}

function map(array, cb) {
  var nuevoarray = array.map(cb);
  return nuevoarray;
  
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
}

function filter(array) {
  var Narray = [];
  for (i=0; i<array.length; i++){
    if((array[i][0]) === 'a') {Narray.push(array[i]);}
  }
  return Narray;
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
