const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const tasksContainer = document.getElementById("tasksContainer");
let tasksArray = [];

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
};

const loadTasks = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach((task) => {
    createTaskElement(task.text, task.done);
  });
  tasksArray = storedTasks;
};

const createTaskElement = (text, done = false) => {
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  if (done) task.classList.add("done");
  task.textContent = text;
  task.addEventListener("click", () => toggleTask(task));
  tasksContainer.prepend(task);
};

const addNewTask = (event) => {
  event.preventDefault();
  const input = event.target.taskText;
  const value = input.value.trim();
  if (!value) return;

  const duplicate = tasksArray.some((t) => t.text === value);
  if (duplicate) {
    Swal.fire({
      icon: "warning",
      title: "Tarea duplicada",
      text: "Ya existe una tarea con ese nombre.",
    });
    return;
  }

  tasksArray.unshift({ text: value, done: false });
  createTaskElement(value);
  saveTasks();
  input.value = "";

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Tarea agregada",
    showConfirmButton: false,
    timer: 1200,
  });
};

const toggleTask = (taskEl) => {
  taskEl.classList.toggle("done");

  const text = taskEl.textContent;
  const task = tasksArray.find((t) => t.text === text);
  if (task) {
    task.done = !task.done;
    saveTasks();
  }
};

const order = () => {
  const done = [];
  const toDo = [];
  tasksArray.forEach((t) => (t.done ? done.push(t) : toDo.push(t)));
  tasksArray = [...toDo, ...done];
  saveTasks();
};

const renderOrderedTasks = () => {
  order();
  tasksContainer.innerHTML = "";
  tasksArray.forEach((task) => createTaskElement(task.text, task.done));
};

setDate();
loadTasks();
