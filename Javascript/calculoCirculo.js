function calcularAreaCirculo(radio){
    const PI=3.14;
    if(radio<0){
        return undefined;
    }
    return PI*(radio**2);
}
console.log(calcularAreaCirculo(2));