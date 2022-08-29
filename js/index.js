// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
    Swal.fire({
        position: 'left-top',
        icon: 'success',
        title: 'Nuevo TP agregado',
        showConfirmButton: false,
        timer: 1500
    })
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
    Swal.fire({
        title: 'Que bueno que ya terminaste :3',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',

    })
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
};

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))

};

setDate();

area.value = localStorage.getItem('area');
area.oninput = () => {
    localStorage.setItem('area', area.value)
};

let alumnos = { id: 1, alumno: "Ramiro" };
const enJSON = JSON.stringify(alumnos);

localStorage.setItem("alumnos", enJSON);

const alumnosEnTexto = JSON.parse(localStorage.getItem("alumnos"));
console.log(alumnos.id);


Swal.fire({
    title: 'Acordate que para pushear tus proyectos en Github y el tutor pueda corregirlos debes contar con un registro en la plataforma. Para ver si tu usuario esta registrado en Gh ingresa el nombre de usuario: si devuelve un avatar el usuario ya esta registrado y deberas elegir otro.',
    input: 'text',
    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Buscar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .catch(error => {
                Swal.showValidationMessage(
                    `Request failed: ${error}`
                )
            })
    },
    allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: `${result.value.login}'s user`,
            imageUrl: result.value.avatar_url
        })
    }
});