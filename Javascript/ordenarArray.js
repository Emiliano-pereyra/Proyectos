//Ordenamientos

function burbuja(arreglo){
    //recorreremos todos los elementos hasta n-1
    for(i=0;i<(arreglo.length-1);i++){
    //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
    for(j=0;j<(arreglo.length-i);j++){
 
        //comparamos
        if(arreglo[j]>arreglo[j+1]){
             //guardamos el numero mayor en el auxiliar
             aux=arreglo[j];
             //guardamos el numero menor en el lugar correspondiente
             arreglo[j]=arreglo[j+1];
             //asignamos el auxiliar en el lugar correspondiente
             arreglo[j+1]=aux;
            //En este caso es para ordernar de menor a mayor el array de datos
        }
 
    }
 
    return arreglo;
}
}

let array=[45, 10, 1, 2, 423];
function bubble(arr){
    for(let i=0;i<arr.lengh-1;i++)//pongo -1 porque voy a comparar de a pares
        for(let j=0;j<arr.lengh-1;j++){
            if(arr[j]>arr[j+1]){
                let aux=arr[j];//ejemplo 45,10   45 es aux y 10 sera j+1 y compara
                arr[j] = arr[j+1];//45 sigue siendo aux pero 10 es arr[j]
                arr[j+1] = aux;//arr[j+1] pasa a la posicion de aux y arr[j] a la de arr[j+1]
            }
        }
    }
