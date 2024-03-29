// Info date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

// Tasks Container
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("en", { day: "numeric" });
  dateText.textContent = date.toLocaleString("en", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("en", { month: "short" });
  dateYear.textContent = date.toLocaleString("en", { year: "numeric" });
};

const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);
  task.textContent = value;
  tasksContainer.prepend(task);
  event.target.reset();
  Swal.fire({
    position: "left-top",
    icon: "success",
    title: "New item added",
    showConfirmButton: false,
    timer: 1500,
  });
};

const changeTaskState = (event) => {
  event.target.classList.toggle("done");
  Swal.fire({
    title: "You're rock!",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
  });
};

const order = () => {
  const done = [];
  const toDo = [];
  tasksContainer.childNodes.forEach((el) => {
    el.classList.contains("done") ? done.push(el) : toDo.push(el);
  });
  return [...toDo, ...done];
};

const renderOrderedTasks = () => {
  order().forEach((el) => tasksContainer.appendChild(el));
};

setDate();
