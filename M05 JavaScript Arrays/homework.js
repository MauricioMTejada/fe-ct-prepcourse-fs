/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];

}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var numAux1 = array.length;
   var numAux2 = array[numAux1-1];
   return numAux2;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;

}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var array2 = [];
   
   for(var i = 0; i < array.length; i++){
      array2[i] = array[i]+1;
   }
   
   return array2;

   //ALTERNATIVA DEL VIDEO:
   //return array.map((num) => num += 1);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
   
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var string1 = [];

   for(var i = 0; i < palabras.length; i++){
      if(i == 0) string1 = string1 + palabras[i];
      else string1 = string1 + " " + palabras[i];
   }

   return string1;

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:

   return array.includes(elemento);

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0); 
   return suma;
   //el 0 significa que "acumulador" comienza en cero
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;

   for(let i = 0; i < resultadosTest.length; i++){
      suma = suma + resultadosTest[i];
   }

   promedio = suma/resultadosTest.length;

   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let acc = 1;
   if(arguments.length === 0) return 0;
   else if(arguments.length === 1) return arguments[0];
   else { 
      for (let i = 0; i < arguments.length; i++){
         acc = acc * arguments[i];
      }
      return acc;
   }

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la 
   // cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   let mayor18 = 0;
   for (let elemento of array){
      if (elemento>18) mayor18++;

   }
   return mayor18

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch(numeroDeDia) {
      case 1:
      case 7:
         return "Es fin de semana";
      default: 
         return "Es dia laboral";

   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let numChar = num.toString();
   let esNueve = numChar.charAt(0);
   if (esNueve == 9) return true;
   else return false;


}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:

   let sonIguales = array.every(elemento => elemento == array[0]);
   return sonIguales;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var mi_array = [];

   for(let elemento of array){
      if(elemento == "Enero" || elemento == "Marzo" || elemento == "Noviembre") mi_array.push(elemento);
   }

   let hayEnero = mi_array.find(aux => aux == "Enero");
   let hayMarzo = mi_array.find(aux => aux == "Marzo");
   let hayNoviembre = mi_array.find(aux => aux == "Noviembre");

   if(hayEnero && hayMarzo && hayNoviembre) return mi_array;
   else return "No se encontraron los meses pedidos";

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   var tabla6 = [];

   for(let i = 0; i < 11; i++){
      tabla6.push(6 * i);
   }

   return tabla6;

}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   let mi_array = array.filter(elemento => elemento > 100);
   return mi_array;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   let mi_array = [];

   for (i = 0; i < 10; i++){
      if (i == 0) mi_array[i] = num + 2;
      else mi_array[i] = mi_array[i-1] + 2;
      if (mi_array[i] == i){
         return "Se interrumpió la ejecución";
       }
   }

   return mi_array;

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   let mi_array = [];
   let valor = num;
 
    for (i = 0; i < 10; i++){
       if (i == 5) continue;
       else {
         valor = valor + 2;
         mi_array.push(valor)
      } }

   return mi_array;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
