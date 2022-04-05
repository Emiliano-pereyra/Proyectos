/* Ejercicio 14
Se va a mostrar por consola

Imprimí todos los números entre -20 y 30
Imprimí todos los números pares entre 20 y 60
Imprimí todos los números impares entre 600 y 666
Imprimí todos los números primos entre 1 y 150
*/

for(let i=-20; i<=30;i++){
    console.log(i);
}

let paresAlerta= Number(prompt("Hasta que valor queres saber?:"));
if(paresAlerta==null||paresAlerta==''){
    alert("Ingresa un valor por favor");
}
for(let i=20;i<=paresAlerta;i++){
    if(i%2==0){
        console.log(i);
    }
}
let imparesAlerta= Number(prompt("Hasta que valor queres saber?:"));
if(imparesAlerta==null||paresAlerta==''){
    alert("Ingresa un valor por favor");
}
for(let i=600;i<=imparesAlerta;i++){
    if(i%2==1){
        console.log(i);
    }
}
const minimo=parseInt(prompt("Ingresa el minimo:"));
const maximo=parseInt(prompt("Ingresa el maximo:"));
console.log("Los numeros primos entre " + minimo + " y " + maximo + " son.");
for(let i=minimo;i<=maximo;i++){ // ciclo entre los valores ingresados por el usuario
    let flag=0;
    for (let j=2;j<i;j++){ // ciclo por 2 por el ciclo ingresado para hallar los primos
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(i>1&&flag==0){
        console.log(i);
    }
}

/* Ejercicio 15
Dada la edad de una persona (entre 1 y 110 años) y su género ('F' para mujeres, 'M' para hombres), indicar si está en edad para jubilarse.

Observación: Las mujeres se jubilan con 60 años o más. Los hombres se jubilan con 65 años o más. Ejemplo: Si ingresa 60 y 'M', debe mostrar como resultado en pantalla “No se jubila”.
*/

let edad=Number(prompt("Ingrese la edad (entre 1 y 110 años)"));
let genero=prompt("Es mujer (F) o hombre (M): ");
if (edad>=60 && genero=="F"){
    console.log("Se puede jubilar vieja");
}else if(edad>=65 && genero=="M"){
    console.log("Se jubila viejo choto");
}else{
    console.log("El/Ella no se puede jubilar");
}

/* Ejercicio 16
Crear un programa para el ingreso a un sistema. El usuario deberá ingresar una contraseña que deberá coincidir con la que esté guardada en la memoria.

Tiene 3 intentos para acertar: si acierta, se le deberá informar que acertó y que puede ingresar, y dejar de pedírsela, si se equivoca, se le solicitará que la ingrese de nuevo.
*/

let contraseña=prompt("Ingrese contraseña: ");
let contraseñaGuardada= "Esta123";
for(let i=0;i<3;i++){
    if (contraseña!=contraseñaGuardada){
        contraseña=prompt("Contraseña inccorrecta, le quedan: " + (3-i) + " intentos");
    }else {
        console.log("Contraseña correcta");
    }
}

/* Ejercicio 17
Se le pedirá al usuario un número y una vez que lo tengamos se deberá mostrar en pantalla las tablas de dicho número hasta el 10:

Por ejemplo, si el usuario escribe 5 se deberá generar lo siguiente:

5 x 1 = 5

5 x 2 = 10

5 x 3 = 15

...........

5 x 10 = 50
*/
let numero=Number(prompt("Ingrese un numero"));
for(let i=0;i<=10;i++){
    console.log(numero*i);
}