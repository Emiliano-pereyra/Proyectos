var a; //variable "a" sin valor asignado, si yo coloco un console.log(a) este me tira undefined ya que no tiene valor asignado por el momento 
var b = "falopa";//valor "b" con valor asignado y interpreta string automaticante al llamar a b
var myName = "Emi"; //camelcase: al llamar una variable de esta forma la primer palabra va en miscula y la segunda en mayuscula la primer inicial
a = 10; //acabo de asignar un valor a la variable "a"
//= es el operador de asignacion
var c = 5;
var d = c; //se le asignó a "d" el valor de la variable "c"

var suma = a + c; //suma las variables a y c
var resta = c - a;//resta
var multiplicar = c * a;//multiplicacion
var division = a / c;//division, si intento dividir por 0 indicia infinity en lugar de tirar error
//todas las operaciones matematicas detectan si el numero es negativo o decimal

var resto = 15 % 5; //va a dar el resto de la operacion en lugar del cociente de la division
var librosComprados = 105; //intentar incrementar el valor
librosComprados = librosComprados + 1;//primera opcion le agrega 1 al valor anterior
librosComprados++; //opcion mas comun para incrementar valor en 1, unicamente en 1
librosComprados--;//en caso de querer reducir en 1 en lugar de incrementarlo

var f = 25;
var f = f + 5;//incremento en 5, parecido al caso de librosComprados
f += 5;//forma mas comun de hacerlo "añade 5 al valor actual de f y asignalo a esa variable"

//EJEMPLO DE EL ULTIMO TEMA DE INCREMENTO Y REDUCCION
var totalVentas = 13567.67;
console.log(totalVentas);
totalVentas += 345.67;
console.log(totalVentas);
totalVentas -= 100;//le saco 100 totalVentas luego de agregarle los 345.67
console.log(totalVentas);
//se le agrego 345.67 a las ventas y luego se le quito 100

var ejemplo = 23;
ejemplo *= 2;//forma mas comun de la multiplicacion, parecido a suma o resta
console.log(ejemplo);

var cosa = 13;
cosa /= 2;//forma comun de division
console.log(cosa);

var nombre = "Caca";
var apellido = 'coca';//si se ponen distintas comillas en cada lado tira error, en este caso de sintaxis

var nombreCompleto = "caca" + " coca"; //muestra toda la cadena de caracteres y se le hizo el espacio a coca para que se muestre separadas a ambas palabras


//construir cadenas con variables

var verbo = "programar";
var mensaje = "estoy cagandola en " + verbo; //va a interpretar progamar en "verbo"

//agregar variables en cadenas de caracteres

var mensajeCompleto = "fafa buena ";
var parteFinal = "si señor";
console.log(mensajeCompleto);
mensajeCompleto += parteFinal; //va a mostrar el mensaje compelto de esta forma

//longitud de cadena de caracteres

var miCadena;
miCadena = "A";
console.log(miCadena.length); //.length me muestra la cantidad de caracteres que hay en la cadena, incluye espacios pero no muestra el mensaje en si de esta forma
console.log(miCadena[0]); //me muestra el caracter que esta en la posicion 0 de en este caso el mensaje "miCadena"
miCadena = "caca caca"; //modifique el mensaje compelto de "miCadena"
//no se puede modificar 1 unico caracter del mensaje, si el mensaje completo
console.log(miCadena[miCadena.length - 1]); //forma automatizada para mostrar el ultimo caracter de una cadena de caracteres

var miArray = ["pedro", 25]; //array de datos
var miArrayAnidado = [["falopa", 22], [30, "monos"]]; //agrupa los conjuntos de datos entre los corchetes por arrays individuales, falopa y 22 por un lado y el segundo array por separado
miArray[0]= "imperio"; //modifico el dato de pedro en miArray y aparecera imperio en su lugar
console.log(miArrayAnidado [0] [1]);//muestra el numero 22 en la consola, el primer termino indica el grupo del array anidado y el segundo indica la posicion interna de dicho array

var estaciones= ["Invierno", "Verano", "otoño"];
estaciones.push("primavera"); //push agrega esta variable a mi array de datos en la ultima posicion
var posiciones= [1, 2, 3, 4];
posiciones.pop(); //quita el ultimo dato de mi array en este caso el numero 4
console.log(estaciones);
estaciones.shift(); //remueve el primer elemento del array de datos
estaciones.unshift("que te importa la estacion que va"); //agrega este elemento a la primer posicion del array de datos

console.log(true);//si la detecta porque esta bien escrito el booleano
console.log(True);//tira error porque no esta bien escrita

console.log(6 == 6);//comparador, en este caso me devuelve true o false dependiendo el valor en el comparador pero este no es capaz de comparar arreglos, solo elementos
console.log(9 == 9);//true
console.log(9 == "9");//true, identifica el mismo valor aun si esta escrito como caracter de texto
console.log(9 === "9")// el triple === es el comparador estricto, va a distinguir si se compara el mismo tipo de elementos en este caso indica false, puesto que un oes entero y otro es un dato tipo string

console.log(9 != 6);//desigualdad o distinto de, en este caso tira true
console.log(9!=9);//false
console.log(9!=="9")//desigualdad estricta, true

console.log(1>2);//false
console.log(1>=2);// mayor o igual a, false en este caso
console.log(1<2);//true
console.log(1<=2);// menor o igual a, true en este caso
//para caracteres de texto los compara por posicion de la letra en el alfabeto, por ejemplo b>a, c>b y en ese orden

var p=2;
console.log(a>5 && a==10); //si ambas condiciones son verdaderas indica true, si al menos 1 no se cunple indica false
// "&&" significa "and" o "y" en javascript

console.log(p==2 || p<= 8); //si al menos 1 condicion se cumple indica true, sino se cumple ninguna indica false
// "||" signifa or en javascript

console.log(!(p==2)) //false, la exclamacion antes de la condicion es una negacion y como en este caso el resultado es true si lo niego se convierte en false
 
if (p<=2){
    console.log("esta re bien porque es verdad");
} else{ //se usa para dar un caso contrario al condicional o mejor dicho, lo que ocurre en caso de que el condicional no se cumpla
    console.log("boludon es mentira");
}

function clasificarValor(valor){
            if(valor % 2==0){
                console.log("divisible por 2");
            }else if(valor % 3==0){ //condicion extra para el if inicial, seria una clausula extra al if inicial
                console.log("divisible entre 3");
            }else{
                console.log("no es divisible entre la opciones");
            }
}
clasificarValor(2);//me va a indicar true en el primer if
clasificarValor(15);//indica true en la segunda clausula
//toma prioridad de las clausulas en el orden que estan escritas

function valor(valor){
    var respuesta;
    switch(valor){//switch es muy util para hacer menus
        case 1:
            respuesta="alpha";
            break;
        case 2:
            respuesta="beta";
            break;
        case 3:
            respuesta="gamma";
            break;
        case 4:
            respuesta="delta";
            break; 
         default://es la opcion por defecto en caso de que no se seleccione ninguna de las opciones
             respuesta="infinite";
             break;              
    }
    return respuesta;//lo pongo al final porque no se incluye en la sentencia de switch
}
valor(1);//va a seleccionar cualquiera de los case de switch, en este ejemplo sería el 1


function miFuncion(){
    console.log("Hola");
    return "Mundo";
    console.log("adios");//como esta luego del return, no va a ser ejecutada esta linea nunca
}
console.log(miFuncion());//muestra como no se ejecuta la linea de "adios"


//CREAR OBJETOS, permiten almacenar guardar una secuencia o un conjunto de propiedades que estan asignadas con sus respectivos valores

var miPerro={ //para declarar al objeto utilizo var y asigno el nombre y coloco sus propiedades entre llaves
    "nombre": "Gino",//todas las propiedades excepto la ultima se las separa por una "," al final de cada linea
    "edad": 5,//puedo usar el numero como propiedad al escribirla al reves
    "peso":1,
    "raza":"caniche"
    //estas propiedades con sus valores se las denomina objeto, es como agrupar todas en una misma estuctura de datos
};
console.log(miPerro.edad); //accedo a la propiedad "edad" al colocarlo de esta forma y la muestro, se le llama anotación de punto

var miCuaderno={
    "color": "verde",
    "categoria": 3,
    "num pag": 1999,
    "num caratulas":20
};
console.log(miCuaderno["color"]);//notacion alternativa para llamar a la propiedad, obligatorio con propiedades con espacios en su nombre por ejemplo "num pag"

var resultados={
    1: "batman",
    2: "pepe",
    3: "puto el que lee"
};
var posicion=1; //otra forma de obtener el valor de la propiedad, en este caso por medio de una variable global
console.log(resultados[posicion]);

var mochila={
    "color": "rojo",
    "tamaño": "Grande",
    "contenido": ["libro", "lapiz"]
};

console.log(mochila.color);//muestra rojo
mochila.color= "negro";//actualizo el valor de la propiedad
console.log(mochila.color);//muestra que es negro el valor actual de "color"
mochila.contenido.push("calzon");//agregue al final del array otro valor
mochila.marca="Nike"; //agregue la propiedad al objeto, marca es el nombre de la porpiedad y Nike su valor
delete mochila.tamaño;//borro la propiedad del objeto, en este caso elimine "tamaño" y su valor asociado
// si intento hacer un console.log a la propiedad eliminada el programa me devuelve "undefined"
console.log(mochila.hasOwnProperty ("color"));//verifico si el objeto tiene la propiedad seleccionada, en este caso devuelve "true" porque lo tiene 

function buscarElemento(simbolo){
    var elementoQuimico ="";
    var simboloQuimico={
        "Al":"Aluminio",
        "K":"Potasio",
        "H":"Hidrogeno"
    };
    /*switch (simbolo){ // A partir del valor de simbolo  se asocia el caso correspondiente
        case "Al":
            elementoQuimico="Aluminio";
            break;
        case "K":
            elementoQuimico="Potasio";
            break;
        case "H":
            elementoQuimico="Hidrogeno";
            break;
    }*/
    return simboloQuimico[simbolo]; //devuelve el nombre completo del elementoQuimico, volviendo mas conciso el codigo en lugar de usar el switch
}
// Muestro como usar un objeto para realizar la busqueda en switch, abajo de esta llave se puede hacer el console.log para verificarlo

var ordenPizza=[{
    "tipo":"fugazzeta",
    "tamaño":"Grande",
    "precio": 1320,
    "toppings":[//arreglo anidado, objeto dentro de otro objeto
        "Muzzarella",
        "cebolla",
        "jamon"
    ],
    "Delivery": true
},//esta forma de escritura es una arreglo de objetos o objetos complejos, parecido al formato json
{
    "tipo":"cuaro quesos",
    "tamaño": "chica",
    "precio": 980,
    "toppings":[
        "Muzzarella",
        "roquefort",
        "provoleta",
        "queso azul"
    ],
    "Delivery": false
}
];
console.log(ordenPizza[0]); //el indice 0 me retorna el primer objeto en este caso la primer orden de pizza
console.log(ordenPizza[1].precio);//me devuelve el precio de la segunda orden debido al indice 1 antes de llamar a la propiedad en el console.log


var z=0;
while(z<=3){//condicion
    console.log("que onda");
    z++;//actualizo la variable porque la estoy aumentando para que se verifique si cumple la funcion

}

var cosa=[];
for (var i=0;i<10;i++){//valor de variable, condicion, actualizacion
    cosa.push(i);
}
console.log(cosa);

var myArray=[4,6,8,10,2];
var total=0;
for(var i=0; i< myArray.length;i++){//mientras que i sea menor a la longitud de mi array
    total +=myArray[i];//arranca con el valor en el indice 0 que en este caso es 4
}
console.log(total);//va a mostrarme el valor total de mis valores en myArray

