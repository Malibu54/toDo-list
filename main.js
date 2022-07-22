/*** Primer Desafio ***/

//let entrada = prompt("Pone tu nombre");
//let salida = entrada + " " + "es tu nombre";

/*** Segundo desafio ***/
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

/*** Cuarto Desafio ***/
/*class alumno {
    constructor(nombre, curso, instituto) {
        this.nombre = nombre.UpperCase();
        this.curso = curso;
        this.instituto = instituto;
    }
    rendir() {
        console.log("El alumno/a es " + this.nombre);
    }
}
const alumno1 = new Alumno("Homero", 39, "Av. Siempreviva 742");
alumno1.rendir();*/

class Parcial {
    constructor(nombre, curso) {
        this.nombre = nombre.toUpperCase();
        this.nota = parseFloat(nota);
        this.aprobado = true;
    }
    aprueba() {
        this.nota = this.nota * 1;
    }
    aprobar() {
        this.aprobado = true;
    }
}
const Parcial1 = new alumno1("Homero", "8");
const Parcial2 = new alumno2("Federico", "9");
alumno1.aprueba();
alumno2.aprueba();
alumno1.aprobar();

/***Quinto Desafio ***/

const alumnos = ['Oriana', 'Soledad', 'Marilyn', 'Eduardo', 'Ezequiel', 'Veronica']

const eliminar = (alumnos) => {

    let index = alumnos.indexOf(alumnos)

    splice
    if (index != -3) {
        alumnos.splice(index, 3)
    }
}
eliminar('Marilyn')


/***Sexto Desafio***/
const notasDeExamen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function esPar(elemento) {
    return elemento % 2 == 0
}

const arrayDeBooleans = notasDeExamen.map(esPar);

console.log(arrayDeBooleans)