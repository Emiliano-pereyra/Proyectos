/* 
En el Blackjack se realiza una acción a la cual se denomina "conteo de cartas".
Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.
-Cuando el conteo es positivo el jugador debería apostar alto, en caso de ser 0 o negativo el jugador debería apostar bajo.

Tabla:
cambio de conteo         cartas
    +1                      2,3,4,5,6
    0                       7,8,9
    -1                      10.J,Q,K,A

    La funcion a realizar toma un parametro carta que puede ser una cadena de caracteres y tiene que aumentar o reducir el valor de la variable global conteo  segun el valor de carta
    "Apostar" positivo
    "Esperar" negativo

    El conteo actual y la decision del jugador deben estar separados por un espacio al determinar el conteo y mostra el veredicto.
    */

    var conteo=0;
    function contarCartas(carta){
        var decision;//variable local
        switch(carta){//para actualizar el valor de conteo
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                conteo++;
                break;
            //casos 7,8,9 los obvio porque el valor de conteo no cambia
            case 10:
            case 'J':
            case 'K':
            case 'Q':
                conteo--;
                break;
        }
        if(conteo>0){
            decision="Apostar";
        }else{
            decision="Esperar"
        }

        return conteo + " " + decision;//se pide como cadena de caracteres
    }
    //aca ejecuto la funcion con distintas variables, probar a gusto y ya lo hice con 20 combinaciones distintas 
    console.log(contarCartas(2)); //me va a mostrar lo que va a hacer el jugador