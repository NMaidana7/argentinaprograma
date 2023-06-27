


let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];


let admitidos = [];
let rechazados = [];


for (let i = 0; i < personas.length; i++) {

  if (personas[i] === "Jose" || personas[i] === "Sofia") {
    rechazados.push(personas[i]);

  } else {
    admitidos.push(personas[i]);
  }
}


console.log("La lista de invitados admitidos es:");
for (let admit = 0; admit < admitidos.length; admit++) {
  console.log(admitidos[admit]);
}
console.log("La lista de invitados rechazados es:");
for (let recha = 0; recha < rechazados.length; recha++) {
  console.log(rechazados[recha]);
}




admitidos.sort();
rechazados.sort();


console.log("La lista ordenada de invitados admitidos es:");
for (let admit = 0; admit < admitidos.length; admit++) {
    console.log(admitidos[admit]);
}
console.log("La lista ordenada de invitados rechazados es:");
for (let recha = 0; recha < rechazados.length; recha++) {
    console.log(rechazados[recha]);
}
