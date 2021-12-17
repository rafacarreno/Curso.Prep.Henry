// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array [0];
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
}


function devolverUltimoElemento(array) {
  return array [(array.length - 1)];
  // Devuelve el último elemento de un array
  // Tu código:
}


function obtenerLargoDelArray(array) {
  return array.length;
  // Devuelve el largo de un array
  // Tu código:
}


function incrementarPorUno(array) {
  for (i = 0; i<=(array.length-1); i++) {
    array [i]=(array [i] + 1);
  }
  return array;
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}


function dePalabrasAFrase(palabras) {
  var Frase = '';
  for (i = 0; i < palabras.length; i++) {
    if (i === (palabras.length - 1)) {Frase = (Frase + palabras [i]);} 
      else {Frase = (Frase + palabras [i] + ' ');} 
  }
  return Frase;
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}


function arrayContiene(array, elemento) {
  var Compara = false;
  var i = 0;
  while (i < array.length) {
    if (array[i] === elemento) {Compara = true; i = array.length;} 
      else {i = (i + 1);}
  }
  return Compara; 
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}


function agregarNumeros(numeros) {
  var resultado = 0;
  for (i = 0; i < numeros.length; i++) {
    resultado = (resultado + numeros [i]);
  }
  return resultado;
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}


function promedioResultadosTest(resultadosTest) {
  var suma = 0;
  var resultado = 0;
  for (i = 0; i < resultadosTest.length; i++) {
       suma = suma + resultadosTest [i];
  }
  resultado = (suma/resultadosTest.length);
  return resultado;
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}


function numeroMasGrande(numeros) {
  var numMayor = numeros [0];
   for (i = 1; i < (numeros.length - 1); i++) {
     if (numMayor > numeros [i]) {numMayor = numMayor;} else {numMayor = numeros [i];}
   }
  return numMayor; 
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}


function multiplicarArgumentos() {
  var total = 1;
  if (arguments.length === 0) return 0;

  for (i = 0; i < arguments.length; i++) {
    total = total * arguments [i];
    }
  return total;

  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}


function cuentoElementos(arreglo){
  var suma = 0;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {suma = (suma + 1);} else {suma = suma;}
  }
  return suma;
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

}


function diaDeLaSemana(numeroDeDia) {
    if (numeroDeDia === 1 || numeroDeDia === 7) 
     {return 'Es fin de semana';} 
      else {return 'Es dia Laboral';}
  
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var Convertir = n.toString();
      if (Convertir[0] === '9') {return true;} {return false;}

}


function todosIguales(arreglo) {
  if (arreglo.length === 1) {return false;}

  var sumaIgual = 0;

  for (i = 1; i < arreglo.length; i++) {
    if (arreglo [0] === arreglo [i]) {sumaIgual = (sumaIgual + 1);} else {return false;}
  }

  if (sumaIgual === (arreglo.length - 1)) {return true;} else {return false;}

  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {

  var nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array [i] === 'Enero' || array [i] === 'Marzo' || array [i] === 'Noviembre') {
      nuevoArray.push(array [i]);} 
  }

  if (nuevoArray.length === 3) {return nuevoArray;} else {return 'No se encontraron los meses pedidos';}

  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  var nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array [i] > 100) {nuevoArray.push(array[i]);}
  }
  return nuevoArray;
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {

  var nuevoArray = [];
  var guardarNum = numero;

  for (let i = 1; i <= 10; i++) {
    if (i === (guardarNum + 2)) {
      return'Se interrumpió la ejecución';   
    } else {
        guardarNum = guardarNum + 2;
        nuevoArray.push(guardarNum);}
  }
  return nuevoArray;

  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  var nuevoArray = [];
  var guardarNum = numero;

  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;} else {
        guardarNum = guardarNum + 2;
        nuevoArray.push(guardarNum);}
  }
  return nuevoArray;
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};