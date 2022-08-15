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
    let thisText = document.getElementById("thisText")
    console.log(thisText.innerText)

    thisText.innerText = ("El promedio de " + nombreIngresado + " " + apellidoIngresado + " es " + promedio + "," + " esta" + " APROBADO ");
    console.log(thisText.innerText)
} else {
    let thisText = document.getElementById("thisText")
    console.log(thisText.innerText)

    thisText.innerText = ("El promedio de " + nombreIngresado + " " + apellidoIngresado + " es " + promedio + "," + " esta" + " DESAPROBADO ");
    console.log(thisText.innerText)
}

let titulo = document.getElementById("titulo");
titulo.innerText = "Nota del alumno";
console.log(titulo.innerText);

let alumnos = { id: 2, alumno: "Ramiro" };
const enJSON = JSON.stringify(alumnos);

console.log(enJSON);
console.log(typeof alumnos);
console.log(typeof enJSON);
localStorage.setItem("alumnos", enJSON);

const alumnosEnTexto = JSON.parse(localStorage.getItem("alumnos"));
console.log(alumnos.id);

Toastify({
    text: "No te olvides de ver mi toDoList!",
    newWindow: true,
    close: true,
    gravity: "buttom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function() {} // Callback after click
}).showToast();

Toastify({
    text: "toDoList",
    duration: 9999999999,
    destination: "modulo_tareas/tareas.html",
    className: "info", // `top` or `bottom`
    position: "buttom",
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
}).showToast();