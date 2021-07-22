const $templateHomework = document.getElementById("template-tarea").content;
const $form = document.getElementById("formulario");
const $inputTarea = document.getElementById("inputtarea");
const $listaTarea = document.getElementById("lista-tarea");
const $fragment = document.createDocumentFragment();
let tareas = {
  //  1625517580970: {
  //   id: "1625517580970",
  //   texto: "Tarea 01",
  //   estado: false,
  //  },
  //  1625517649918: {
  //    id: "1625517649918",
  //   texto: "Tarea 02",
  //    estado: false,
  //  },
};
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("homeworkKey")) {
    tareas = JSON.parse(localStorage.getItem("homeworkKey"));
    printHomework();
  }
});
// // let todos = {
// //   1: { nombre: "item 1" },
// //   2: { nombre: "item 2" },
// // };

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if (e.target.querySelector(".form-control")) {
  //   console.log(e.target[0].value);
  //   console.log(e.target.querySelector(".form-control").value);
  //   console.log($inputTarea.value);
  // }
  setHomework(e);
});

const setHomework = (e) => {
  if ($inputTarea.value.trim() === "") {
    console.warn("Está vació");
    return;
  }
  let fechaActual = new Date();
  let fechaActualTexto = new Date(Date.now()).toLocaleDateString();
  let horaObtenida =
    fechaActual.getHours() +
    ":" +
    fechaActual.getMinutes() +
    ":" +
    fechaActual.getSeconds();

  const tarea = {
    id: Date.now(),
    texto: $inputTarea.value,
    estado: false,
    fecha: fechaActualTexto,
    hora: horaObtenida,
  };

  //NOTA: Agregamos la tarea a la colección de objetos TAREAS
  tareas[tarea.id] = { ...tarea };

  $form.reset();
  $inputTarea.focus();

  printHomework();
};

const printHomework = () => {
  localStorage.setItem("homeworkKey", JSON.stringify(tareas));

  if (Object.values(tareas).length === 0) {
    $listaTarea.innerHTML = `<div class="alert alert-dark text-center">
        Sin tareas pendientes 😍
        </div>`;
    return;
  }

  $listaTarea.innerHTML = "";
  Object.values(tareas).forEach((el) => {
    let clone = $templateHomework.cloneNode(true);

    if (el.estado) {
      clone
        .querySelectorAll(".fas")[0]
        .classList.replace("fa-check-circle", "fa-undo-alt");
      clone
        .querySelector(".alert")
        .classList.replace("alert-warning", "alert-primary");
      clone.querySelector("p").style.textDecoration = "line-through";
    }
    clone.querySelector("p").textContent = el.texto;
    clone.querySelectorAll("i")[0].dataset.id = el.id;
    clone.querySelectorAll("i")[1].dataset.id = el.id;
    clone.querySelectorAll("h6")[0].textContent = el.fecha;
    clone.querySelectorAll("h6")[1].textContent = el.hora;
    $fragment.appendChild(clone);
  });
  $listaTarea.appendChild($fragment);
};

$listaTarea.addEventListener("click", (e) => {
  btns(e);
});

const btns = (e) => {
  if (e.target.classList.contains("text-success")) {
    let tarea = tareas[e.target.dataset.id];
    tarea.estado = true;
    printHomework();
  }
  if (e.target.classList.contains("fa-minus-circle")) {
    let tarea = tareas[e.target.dataset.id];
    console.log(tarea);
    delete tareas[e.target.dataset.id];
    printHomework();
  }
  if (e.target.classList.contains("fa-undo-alt")) {
    let tarea = tareas[e.target.dataset.id];

    tarea.estado = false;
    printHomework();
  }
  e.stopPropagation();
};
