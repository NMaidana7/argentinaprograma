


let var1 = 2;
let var2 = 9;
let var3 = 3;
let var4 = 7;

let suma = var1 + var2; 
let resta = var4 - var3; 

let resultadoFinal = suma * resta;

console.log(resultadoFinal)


let esPar; if ((resultadoFinal % 2) === 0){
    esPar = true;
} else {esPar = false}

console.log(esPar)

console.log("Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es: %s", var1, var2, var3, var4, esPar);


