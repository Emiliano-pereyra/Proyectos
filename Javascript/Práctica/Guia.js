// EJERCICIO 1: Vamos a trabajar un poco con la consola para ir amigandonos con ella ya que será nuestra mejor amiga de ahora en más.

// Declara una variable llamada nombre en tu consola y asignale tu nombre.
// Declara una variable llamada apellido y asignale como valor tu apellido.
// Muestra por consola las variables nombre y apellido


var nombre = "Emiliano";
var apellido = "Pereyra";
console.log(nombre + " " + apellido + ".");

// EJERCICIO 2
// En nuestro archivo HTML vamos a vincular un fichero/archivo que se llame script.js(Este archivo debemos crearlo previamente).
// Recuerda que para vincular el fichero debemos hacerlo con la etiqueta script la cual debemos agregarla antes de que cierre la etiqueta body.
// Dentro del archivo script.js, vamos a declarar las variables nombre y apellido que habiamos declarado en la consola.Pero, esta vez deberemos asignarle el método prompt() para que sea el usuario quien introduzca los datos, nombre y apellido.
// Mostrar una alerta de bienvenida a nuestra página con el nombre y el apellido del usuario “Bienvenido a nuestra página(nombre + apellido)”

var x, y;
x = prompt("Escribe tu nombre");
y = prompt("Escribe tu apellido");
console.log("Bienvenido a la práctica " + x + " " + y);

// ejercicio 3
/* Crea 3 variables numero1,numero2 y resultado.
Pidele al usuario que ingrese los valores de las variables numero1 y numero2 mediante un prompt().
Asigna a la variable resultado el valor de la suma entre numero1 y numero2.
Muestra un alerta con el mensaje “El resultado es: (resultado)”. */

let num1, num2, num3;

num1 = Number(prompt("Escribe tu valor para el primer numero"));
num2 = Number(prompt("Escribe tu valor para el segundo numero"));
num3 = Number(prompt("Escribe tu valor para el tercer numero"));

var resultado = num1 + num2 + num3;
alert("El resultado es:" + " " + (num1 + num2 + num3));
console.log(resultado);

/* EJERCICIO 4
Crea 2 variables numero y numerotriple.
Pidele al usuario que ingrese el valor del numero a calcular mediante un prompt().
Asigna a la variable numerotriple el valor de la multiplicación por 3 del numero ingresado.
Muestralo el resultado por consola con el mensaje “El triple de este número es: (xx)”.
*/

let numero1, numeroTriple;
numero1 = Number(prompt("Escribe tu valor para el numero a triplicar"));
numeroTriple = 3 * numero1;
alert("El triple de " + numero1 + " es: " + numeroTriple);

/* EJERCICIO 5
Declara una variable que se llame texto y asignale el metodo prompt() para que le puedas solicitar al usuario que ingrese un texto.
Calcula su largo con lo que investigaste y muestra un alert() que diga “El largo del texto ingresado es: xx
*/

let texto;
texto = prompt("Ingrese el texto que quiera");
alert("El texto escrito es de un largo de: " + texto.length + " caracteres");

/* EJERCICIO 6 
¿Qué devuelve cada expresión?.

Sin probar en la consola, debes adivinar que devolverá cada una de estas expresiones. ¿True o False?

Primera expresión:

let x = 30
let y = "a"
y === "b" || x >= 30

Devuelve True por el condicional or que tiene, y=a por ende deberia ser false pero como la segunda opcion es x>=30 entonces es true

Segunda expresión

let x = 15
let y = 2
!( x == "15" || x === y ) && ! (y !== 2 && x <= y)
pensando con los valores queda
!(true || false) && !(false && false)
!(true) && !(false)
Por el operador ! (not) queda (false) && (true) y como tiene el operador and queda que es False
*/

/* EJERCICIO 7 
Utiliza la consola para escribir una expresión que compare dos strings y produzca un valor TRUE.
Escribí una expresión comparando dos strings que devuelva FALSE.
Escribí una expresión que involucre un string y un número y devuelva FALSE.
Escribí una expresión que involucre un string y un número y devuelva TRUE
*/

let nombre1 = "pedro";
let nombre2 = "sofia";
console.log(nombre1 != nombre2);
// Primer item echo, devuelve true
console.log(nombre1 == nombre2);
// Segundo item echo, devuelve false
let num = 10;
let ten = '10';
console.log(num === ten);
//Tercer item, devuelve false que se debe a que use comparador estricto en este caso por el tipo de variable
console.log(num == ten);
//Cuarto item, devuelve true

/* EJERCICIO 8
Realizar un algoritmo que pida el nombre de una persona. Si el dato entra vacío, debe pedir nuevamente al usuario que introduzca su nombre (“No ha introducido ningún nombre”).
Una vez hecho esto, que se despliegue una alerta de bienvenida con el nombre del usuario.
*/
let nombre3 = prompt("Ingrese otro nombre mas por favor");
if (nombre3.lenght == 0)// si pongo null en la alerta aparece undefined pero continua
{
    nombre = prompt("Por favor ingrese un nombre para continuar")
} else {
    alert("Bienvenido: " + nombre3);
}

/* EJERCICIO 9
Pedirle al usuario que introduzca 1 numero.
Comparar si es par o no, a través de un if/else. Si es par que muestre una alerta indicando que el número es par o en caso contrario que muestre una alerta que es impar.
*/

let number = Number(prompt("Por favor ingrese un numero: "));
if (number & 2 == 0) {
    alert("El numero es par!");
} else {
    alert("El numero es impar");
}

/* EJERCICIO 10
Declara una variable que se llame peliculaElegida y asignale el método prompt() para que le puedas solicitar al usuario que ingrese su película favorita de una lista, que tú vas a proporcionar en dicho método.
Importante: para que puedas enlistar las opciones de películas una debajo de otra, necesitaras el carácter especial (\n ) ó colocar un br para hacer un salto de línea. Sino te queda muy claro cómo usarlo, deberás googlea para ver un ejemplo.
Evalúa cada uno de los casos con el condicional switch (utilizaremos este método para practicarlo). En el bloque de código de cada case le diremos que “su ticket ha sido emitido”, pero, lo haremos a través del método document.write() y en su argumento(dentro de los paréntesis) haremos un template literals con el formato HTML del texto y la imagen de la película elegida.
*/

let peliculaElegida = Number(prompt("Elija su pelicula favorita\n 1-Nemo\n 2-Mi villano favorito\n 3-Alvin y las ardillas\n 4-Cars"));
switch (peliculaElegida) {
    case 1:
        document.write("Su ticket para Nemo a sido emitido");
        break;
    case 2:
        document.write("Su ticket para Mi villano favorito sido emitido");
        break;
    case 3:
        document.write("Su ticket para Alvin y las ardillas a sido emitido");
        break;
    case 4:
        document.write("Su ticket para Cars a sido emitido");
        break;
}

/* Ejercicio 11
Crea la variable numeroSecreto y hazlo igual a un entero (Tú eliges el número).
Pregúntale al usuario que adivine el numero en un prompt.
Si el usuario adivina el numero deberá aparecer un alert diciendo que adivinó el número. (Tienes que hacer la comparación con ( === ) y no te olvides de parsearlo).
El algoritmo también debe decir, si numeroSecreto es más alto o más bajo del que dijo el usuario.
Por último, si el usuario no adivina el número, deberá aparecer un mensaje diciendo que se equivocó.
*/

let numeroSecreto=20;
let numeroUsuario=Number(prompt("Adivina el numero que escribi. Ingresa el numero que crees es la respuesta"));
if (numeroSecreto===numeroUsuario){
    alert("Le pegaste perro");
}else if(numeroUsuario>numeroSecreto){
    alert("El numero que ingresaste es mas grande que el que puse.");
}else{
    alert("El numero que ingresaste es mas chico que el que puse");
}

/* Ejercicio 12
Crea un algoritmo utilizando el operador ternario que le pregunte al usuario cuantos tragos a tomado.

Si el número de trago es mayor a cero debe emitir una alerta que diga que no puede manejar.
Si el usuario indica que no ha tomado nada, entonces decirle que “Nos alegra que seas un conductor responsable”.
*/

let tragos= Number(prompt("Cuantos tragos te tomaste:"));
if (tragos=0){
    alert("Aburrido y responsable");
}else{
    alert("viva la joda y el choque estando en pedo");
}

/* Ejercicio 13 
Se le pedirá al usuario 2 números para generar la suma, la resta, la división y la multiplicación entre ellos.

Preguntar al usuario que operación quiere realizar antes de que ingrese los dos números a operar.
Si el usuario no ingresa ninguna respuesta, automáticamente informarle que deberá ingresar un dato.
*/

let numero5,numero6;
numero5 =Number(prompt("Escribe tu valor para el numero"));
numero6 =Number(prompt("Escribe tu valor para otro numero"));
let opcion=Number(prompt("Por favor elija la opcion (numero):\n 1-Suma\n 2-Resta\n 3-Multiplicacion\n 4-división"));
if(opcion.length!=0){
switch (opcion) {
    case 1:
        document.write("el resultado de la suma es: " + (numero5+numero6));
        break;
    case 2:
        document.write("El resultado de la resta es:" + (numero5-numero6));
        break;
    case 3:
        document.write("El resultado de la multiplicación es: " + (numero5*numero6));
        break;
    case 4:
        document.write("El resultado de la división es: " + (numero5/numero6));
        break;
}
}else{
    alert("no pusiste opcion valida");
    opcion=Number(prompt("Ingrese una opcion valida"));
    
}

