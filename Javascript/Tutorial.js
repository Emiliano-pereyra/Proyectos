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
}