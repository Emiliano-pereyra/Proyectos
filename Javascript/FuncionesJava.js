const { json } = require("express/lib/response");
const res = require("express/lib/response");

//escribo codigo que puedo reutilizar en mi programa
function mostrarMensaje(){
    console.log("Falopa para todos");
}
mostrarMensaje();

function sumar(a, b){ //a y b son mis parametros para esta funcion
    var suma= a + b; //escribo esta linea en el cuerpo que es donde se ubica la parte del codigo para mi funcion
    console.log("El resultado de " + a + " + " + b + " suma " + suma);
}

sumar(5, 10); //los valores los asigno en el mismo orden en que puse los parametros de la función


function resta(a,b){
    return a-b;
}
var resultado= resta(5,3);//asigno a una variable el valor retornado por la función
console.log(resta(4-3)); //retorna el valor, tengo que usar console.log porque sino no retorna nada

function multiplicar(a,b){
    console.log(a*b);
}
console.log(multiplicar(4,5)); //en este caso no retorna valor ya que no declare el return, va a tirar undefined


function proximoEnFila(arreglo, elemento){
    arreglo.push(elemento); //agregar al final del arreglo
    return arreglo.shift(); //remueve el primer elemento, no toma valor por lo que va solo () y va a retornar el elemento eliminado
}
var miArray=[1, 2, 3, 4, 5];
console.log("Antes: " + JSON.stringify(miArray));//convierto el arreglo en una cadena de caracteres y la concateno
console.log(proximoEnFila(miArray, 6));//agrego el 6 y elimino el primer elemento del array al llamar a la funcion
console.log("Despues: " + JSON.stringify(miArray));//muestra el arreglo luego de la modificacion anterior
