const readlineSync = require('readline-sync');

const numero = readlineSync.questionInt("Seleccione un numero del 1 al 7 para buscar un dia de la semana: ");

let dias;

switch (numero) {
  case 1:
    dias = "lunes";
    break;
  case 2:
    dias = "martes";
    break;
  case 3:
    dias = "miércoles";
    break;
  case 4:
    dias = "jueves";
    break;
  case 5:
    dias = "viernes";
    break;
  case 6:
    dias = "sabado";
    break;
  case 7:
    dias = "domingo";
    break;
  
 default:
   console.log("Numero invalido");
   return; 
}
console.log(`Hoy es ${dias}`);