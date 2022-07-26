let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");
if ((nombreIngresado != "") && (apellidoIngresado != "")) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert("Error: Ha fallado la autenticación");
}

/*** Tercer Desafio ***/
let parcial, final, promedio;
parcial = parseFloat(prompt("Parcial"));
final = parseFloat(prompt("Final"));
promedio = (parcial + final) / 2;
if (promedio >= 6.5) {
    document.write("El promedio de " + nombreIngresado + " " + apellidoIngresado + " " + 'es' + " " + promedio + " APROBADO ");
} else {
    document.write("El promedio de " + nombreIngresado + " " + apellidoIngresado + " " + 'es' + " " + promedio + " DESAPROBADO ");
}



/***Sexto Desafio***/
const notasDeExamen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function esPar(elemento) {
    return elemento % 2 == 0
}

const arrayDeBooleans = notasDeExamen.map(esPar);

console.log(arrayDeBooleans)

//CAMBIAR EL TITULO DE LA PAGINA ETIQUETA H1 ID=TITULO 
let titulo = document.getElementById("titulo")
titulo.innerText = "Nota del alumno:"
console.log(titulo.innerText)

//agregar botton enviar

const button = document.createElement('button');
button.type = 'button';
button.innerText = 'Enviar';
document.body.appendChild(button);