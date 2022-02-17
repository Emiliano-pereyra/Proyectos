var a ;
var b;

a=5;
b=5;

console.log(a==b);//true
console.log(a===b);//true, mismo tipo de dato "entero"
console.log(a!=b);//false

b=8;
console.log(a==b);//false
console.log(a===b);//false
console.log(a!=b);//true

b="5";
console.log(a==b);//true
console.log(a===b);//false