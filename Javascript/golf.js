//Para este ejercicio dependiendo de la cantidad de golpes se retornará un valor diferente
function punto(par,golpes){
    if (golpes==1){
       return "Hole-In-One";
    }else if(golpes<=par-2){
        return "Eagle";
    }else if(golpes==par-1){
        return "Birdie";
    }else if(golpes==par){
        return "Par";
    }else if(golpes==par+1){
        return "Bogey";
    }else if(golpes==par+2){
        return "Double Bogey";
    }else{
        return "Go Home";
    }
}

punto(1,1);//me va a indicar Hole In One por el orden de las clausulas