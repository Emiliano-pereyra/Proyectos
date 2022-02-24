// definir 1 funcion que permite buscar 1 contacto en una lista de contactos
var contactos=[
    {//indice 0
        "nombre": "Nora",
        "apellido":"Nav",
        "numero": "79172381783",
        "gustos":["pizza", "correr"]
    },
    {//indice 1
        "nombre":"Diego",
        "apellido":"Maradona",
        "numero":"789412378912",
        "gustos":["falopa", "letra E"]
    },
    {//indice 2
        "nombre":"Sapo",
        "apellido":"pepe",
        "numero":"90183478123",
        "gustos":["saltar", "jardines"]
    }
];

function buscarPerfil(nombre, propiedad){
    for(var i=0; i<=contactos.length;i++){
        if(contactos[i].nombre===nombre){ //accedo a cada dato del objeto
            return contactos[i][propiedad]||"Pero que buscas bobo, los ves arriba";//accedo a la propiedad que indique al final en el console.log
        }
    }
    return "El contacto no esta en la lista de contactos.";//retorna esto si el contacto no esta en la lista directamente 
}

console.log(buscarPerfil("Nora", "gustos"));//muestra el nombre y lo que contiene "gustos"