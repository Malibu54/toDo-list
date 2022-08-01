let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");
if ((nombreIngresado != "") && (apellidoIngresado != "")) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert("Error: Ha fallado la autenticación");
}

let parcial, final, promedio;
parcial = parseFloat(prompt("Parcial"));
final = parseFloat(prompt("Final"));
promedio = (parcial + final) / 2;
if (promedio >= 6.5) {
    document.write("El promedio de " + nombreIngresado + " " + apellidoIngresado + " " + 'es' + " " + promedio + " APROBADO ");
} else {
    document.write("El promedio de " + nombreIngresado + " " + apellidoIngresado + " " + 'es' + " " + promedio + " DESAPROBADO ");
}

const arrayDeBooleans = notasDeExamen.map(esPar);
console.log(arrayDeBooleans);

let titulo = document.getElementById("titulo");
titulo.innerText = "Nota del alumno:";
console.log(titulo.innerText);

function EnviarAlAlumno() {
    document.getElementById("theirEmail").placeholder = "montoto@js.com";
}