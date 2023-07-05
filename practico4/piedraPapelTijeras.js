


const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";

function obtenerJugadaComputadora() {
  let opciones = [PIEDRA, PAPEL, TIJERAS];
  let indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

function obtenerJugadaUsuario() {
  let readlineSync = require("readline-sync");
  let jugada = readlineSync.question("Ingrese su jugada: (piedra, papel o tijeras): ");
  jugada = jugada.toLowerCase();
  while (jugada !== PIEDRA && jugada !== PAPEL && jugada !== TIJERAS) {
    console.log("Jugada inválida, por favor ingrese piedra, papel o tijeras");
    jugada = readlineSync.question("Ingrese su jugada: (piedra, papel o tijeras): ");
    jugada = jugada.toLowerCase();
  }
  return jugada;
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  let resultado;
  if (jugadaComputadora === jugadaUsuario) {
    resultado = "Empate";
  } else if (
    (jugadaComputadora === PIEDRA && jugadaUsuario === TIJERAS) ||
    (jugadaComputadora === PAPEL && jugadaUsuario === PIEDRA) ||
    (jugadaComputadora === TIJERAS && jugadaUsuario === PAPEL)
  ) {
    resultado = "Gana la computadora";
  } else {
    resultado = "Gana el usuario";
  }
  return resultado;
}

let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultadoJuego = determinarGanador(jugadaComputadora, jugadaUsuario);



console.log("                                   ");
console.log("El usuario eligio: " + jugadaUsuario);
console.log("                                   ");
console.log("La computadora eligio: " + jugadaComputadora );
console.log("                                   ");
console.log("El resultado fue: " + resultadoJuego);
console.log("                                   ");



