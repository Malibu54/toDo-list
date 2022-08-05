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

let titulo = document.getElementById("titulo");
titulo.innerText = "Nota del alumno";
console.log(titulo.innerText);

/*const button = document.createElement('button');
button.type = 'button';
button.innerText = 'Control de tareas pendientes'
href = "tareas.html";
document.body.appendChild(button);*/

document.getElementById("Button").addEventListener("click", gotoUrl);

function gotoUrl() {
    window.location.assign("https://www.google.com/");
}