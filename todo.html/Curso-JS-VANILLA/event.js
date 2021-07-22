const $btnAumentar = document.querySelector(".btn-info");
const $btnDisminuir = document.querySelector(".btn-danger");
const $container = document.querySelector(".container");
const $span = document.getElementById("span");
let contador = 0;
/**
 * ?TITULO: Una forma de realizar un addEventListener por clase

$btnAumentar.addEventListener("click", () => {
  contador++;
  $span.textContent = contador;
});

$btnDisminuir.addEventListener("click", () => {
  contador--;
  $span.textContent = contador;
});
 */
/**
 * ?TITULO: Event Delegation
 */
$container.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("btn-info")) {
    contador++;
    $span.textContent = contador;
  }
  if (e.target.classList.contains("btn-danger")) {
    contador--;
    $span.textContent = contador;
  }
  e.stopPropagation(); //NOTA: Detiene la propagación de este Event
});
const $btnDark = document.querySelector(".btn-dark");
const $bgsuccess = document.querySelector(".bg-success");
$btnDark.addEventListener("click", (e) => {
  console.log("Botón negro");
  e.stopPropagation();
});
$bgsuccess.addEventListener("click", (e) => {
  console.log("Fondo exitoso");
  e.stopPropagation();
});

document.body.addEventListener("click", (e) => {
  console.log("Diste click en el body");
});
