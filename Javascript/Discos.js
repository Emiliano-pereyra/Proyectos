/*
Un objeto representa parte de una coleccion de discos musicales.
Cada disco tiene un id unico asociado a otras propiedades
No todos los albumes tienen la  informacion completa
*/ 

var coleccionDiscos={
    7853:{
        titulo: "Bee Gees Greatest",
        artista:"Bee Gees",
        canciones:["Stayin Alive"]
},
    5439:{
        titulo:"ABBA Gold"
    },
};

/*
Definir una funcion para actualizar discos que tome los siguientes parametros:
- discos(el objeto que representa la coleccion de discos)
-id
-propiedad (artista, cancion)
-valor

La funcion debe de:
- Si "valor" es una cadena vacía, elimina la propiedad del album correspondiente
-Si "propiedad" es igual a la cadena de caracteres "canciones" pero el albúm no tiene una propiedad llamada canciones, crea un arreglo vacion y agrega "valor" a ese arreglo
- Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es una cadena vacía, agrega "valor" al final del arreglo de canciones del albúm correspondiente
- Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna el valor del parametro "valor" a la propiedad.
si la  propiedad no existe, debe crearla y asignar ese valor
*/

function actualizarDiscos(discos, id, propiedad, valor){
    if (valor==""){
        delete discos[id][propiedad]; //accedo al albúm primero por id  y una vez echo eso obtengo la propiedad que busco y la elimina
    }else if(propiedad==="canciones" ){
        discos[id][propiedad]=discos[id][propiedad]||[];//accedo al objeto anidado y le asigno un arreglo vacio, antes intento acceder a la propiedad para verificar sino esta definido anteriormente
        discos[id][propiedad].push(valor);//agrego al arreglo vacio o el valor correspondiente con el push
    }else{
        discos[id][propiedad]=valor;//tomo el valor y lo asigno a la propiedad del album especifico, sino existe lo crea y si existe lo actualiza
    }
}

console.log(coleccionDiscos[7853].titulo);//antes del cambio
actualizarDiscos(coleccionDiscos, 7853, "titulo", "");//coleccionDiscos es un argumento, id, nombre propiedad, valor
console.log(coleccionDiscos[7853].titulo);//despues del cambio, en este caso me devuelve undefined porque se borro la propiedad