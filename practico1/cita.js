

let cita = 'Tres tristes tigres comen trigo en un trigal';
let substring = 'tigres comen trigo';



let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: %s", tamañoDeCita);



let indice = cita.indexOf(substring);
console.log("El indice del substring es: %s ",indice);



let citaRevisada = cita.substring(0, indice) + substring;
console.log(citaRevisada);