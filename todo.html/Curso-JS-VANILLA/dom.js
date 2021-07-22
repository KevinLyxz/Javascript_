/**
 * ! un metodo llamado speechSynthesis y el método speak
 * ! Pueden realizar que la computadora lea lo escritor
 */

// console.log(window);
// console.log(document);
// let texto = "Que miedo";
// const hablar = (texto) =>
//   speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// hablar(texto);
/**
 * ?TITULO: Elementos del DOM
 
console.log("****** Elementos del Documento ******");
// EJEMPLO:

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);*/
// document.write("<h2>Document write</h2>");

/**
 * !NOTA: Las etiqueta de HTML son nodos
 * !Los nodos de tipo elemento y texto son de considerar
 */
//NOTA: Estos no se usan actualmente
document.getElementsByTagName("li");
console.log(document.getElementsByClassName("card"));
document.getElementsByName("nombre");
//NOTA: Para los IDs podríamos usarlo para los ID
document.getElementById("card");
console.log(document.querySelector("#menu"));
/**
 * !NOTA:
 * !querySelector solamente te trae un elemento
 * !NOTA: pero querySelectorAll, te trae todos los elementos
 * !NOTA: querySelectorAll devuelve un Nodelist y no un HTML collection
 */

console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
//EJEMPLO: Muestra la card en la posición número 2
console.log(document.querySelectorAll(".card")[2]);
//EJEMPLO: Accediendo a las etiquetas interiores
console.log(document.querySelector("#menu li"));
/**
 * ?TITULO: Atributos y Data Attributes
 * !NOTA:
 * !NOTA:
 *
 */
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
/**
 * !NOTA: Se puede cambiar el valor del atributo con
 * !los métodos Data o con la propiedad setAttribute
 */
document.documentElement.lang = "es";
document.documentElement.setAttribute("lang", "es-PE");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
/**
 * !NOTA: El rel es parte de las buenas praticas del HTML
 * !NOTA: Para evitar que la pestaña sea insegura o evitar "HACKEOS"
 *  !NOTA: Se puede agregar a todas las etiquetas el atributo REL
 */
$linkDOM.setAttribute("rel", "noopener");

$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
//NOTA: ELIMINAR un atributo
// console.log($linkDOM.removeAttribute("rel"));

/**
 * ?TITULO: DATA-ATTRIBUTES
 */
console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.setAttribute("data-id", 1);
console.log($linkDOM.hasAttribute("data-id"));

console.log(document.querySelector(".link-dom"));
/**
 * ?TITULO: Estilos con los elementos HTML
 */
$linkDOM.setAttribute("style", "background: #F7DF1E; color: #222");
// NOTA: aqui mapea todas las propiedades disponibles en CSS y afectadas
// NOTA: También muestran las propiedades que tienen valores por defecto
//EJEMPLO:
// console.log($linkDOM.style);

// NOTA: Otra forma de llamar el style o acceder a un atributo de style
//EJEMPLO:
console.log($linkDOM.getAttribute("style"));
//NOTA: Otra manera de acceder a las propiedades dinamicas
console.log($linkDOM.style.color);

/**
 * ?TITULO: Propiedades dinamicas de windows
 * !NOTA: MAPA distinto del CSS DECLARATION
 * !Este mapa nos da las propiedades y sus valores por defecto
 * !Es distinto al ".style" que muestra solamente las propiedades afectadas
 * !En cambio el getComputedStyle nos muestra los valores por defecto
 * TODO: console.log(window.getComputedStyle($linkDOM));
 */
//NOTA: También muestra la cadena de herencia de todos los prototipos
// que está utilizando el $linkDOM

// NOTA: Acceder a una propiedad en particar, al color(clase), etiqueta
// EJEMPLO:
console.log("--------------------------------");
console.log("Accediendo a propiedad en particular");
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//EJEMPLO: Establecer valores
//NOTA: Sin dos puntos y en dos argumentos
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.setProperty("width", "50%");
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "5rem";

//NOTA: CSS DECLARATION
/**
 * TODO: console.log($linkDOM.style);
 * */
//NOTA: Cadena de styles utilizados
// EJEMPLO:
console.log($linkDOM.getAttribute("style"));
//NOTA: ComputedStyle
//NOTA: Está mapeando a nivel de pixel, es lo que interpreta el navegador
//EJEMPLO:
/**
 * TODO: console.log(getComputedStyle($linkDOM));
 */
/**
 * TODO: const $html = document.documentElement,
*  TODO:$body = document.body;

*TODO:let colorNegro = getComputedStyle($html).getPropertyValue("--dark-color"),
* TODO: colorAmarillo = getComputedStyle($html).getPropertyValue("--yellow-color");
* !//NOTA: aquí asigno el color al body
* TODO:$body.style.backgroundColor = colorNegro;
* TODO:$body.style.color = colorAmarillo;
 */
//TITULO: CSS - Custom Properties CSS

//NOTA: Aquí re asigno otro color a la variable de CSS
// EJEMPLO:
/**
 * TODO: $html.style.setProperty("--dark-color", "pink");
 * NOTA: RE ASIGNO la variable colorNegro con la propiedad getcomputedStyle
 * y accedo a toda la cadena de propiedades y jalo la misma variable
 * con el color cambiando
 * TODO: colorNegro = getComputedStyle($html).getPropertyValue("--dark-color");
// EJEMPLO: lo ejecuto
 * TODO: $body.style.setProperty("background-color", colorNegro);
 *  */

/** TITULO: Classes CSS
 * ? Métodos: add()   remove()   toggle()   contains()

*? const $card = document.querySelector(".card");
* TODO: NOTA: Si la lista de clases contiene la clase devolverá un bool
* TODO:console.log($card.classList.contains("rotate-45"));
NOTA: Agregar la clase a la lista de clases
* TODO:$card.classList.add("rotate-45");
NOTA: Lo confirmamos
* TODO:console.log($card.classList.contains("rotate-45"));

* TODO:console.log($card.classList);
* TODO:console.log($card.className);
//EJEMPLO: remover/eliminar una clase
* TODO:$card.classList.remove("rotate-45");
* TODO:console.log($card.classList.contains("rotate-45"));
// console.log($card.classList);
//TITULO: el método toggle
/** EJEMPLO:
 * TODO:$card.classList.toggle("rotate-45");
 * !NOTA: El método toggle agrega y quita una funcionalidad
 
* TODO:$card.classList.toggle("rotate-45");
* TODO:console.log($card.classList.contains("rotate-45"));
* TODO:$card.classList.replace("rotate-45", "rotate-135");
*/
/**
 * ? TITULO: DOM: Texto y HTML
 */
const $whatisdom = document.getElementById("que-es");
let text = `
<p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

// $whatisdom.innerText = text; NOTA: No es parte del STANDARD
/**
 * !NOTA: textContent se utiliza solo cuando quieres enviar TEXTO
 */
$whatisdom.textContent = text;
$whatisdom.innerHTML = text;
/**
 * !NOTA: Tenemos el  outerHTML
 * NOTA: El outerHTML reemplaza la posición del HTML donde se
 * ejecutará el código
 * TODO: $whatisdom.outerHTML = text;
 */

/**
 * ? TITULO: DOM Traversing: Recorriendo el DOM
 * !NOTA: serie de propiedades que nos da el API del DOM para RECORRER
 * !diferentes elementos
 * NOTA: El traversing está enfocado a las etiquetas HTML
 * EJEMPLO:
 */
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children); // Hijos de cards
console.log($cards.children[2]); // hijo de la posición numero 2
console.log($cards.parentElement); //Muestra el elemento padre del elemento seleccionado

console.log($cards.firstChild); // hace referencia al espacio "enter", por lo tanto no es muy útil.

console.log($cards.firstElementChild); // Muestra el primero elemento hijo
console.log($cards.lastElementChild); // Muestra el ultima elemento hijo
console.log($cards.previousElementSibling); //El "elemento" hermano antes del "card"
console.log($cards.nextElementSibling); // El "elemento" hermano después de card
//NOTA: Los closest son propiedadesque busca lo más cercano al elemento
// es un método que busca el ancestro, el padre más cercano
console.log($cards.closest("div"));
console.log($cards.closest("body"));
//NOTA: El padre más cercano del elemento numero 3
console.log($cards.children[3].closest("section"));

/**
 * ? TITULO: Creando elementos y Fragmentos
 * */

const $figure = document.createElement("figure"),
  $figure2 = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals");

$img.setAttribute("src", "http://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);

$figure.classList.add("card");
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.classList.add("card");
$figure2.innerHTML = `
<img src ="http://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>`;
//NOTA: Lo agrego
$cards.appendChild($figure2);

const $h3 = document.createElement("h3");
document.body.appendChild($h3).textContent = "Estaciones del año";

const $ul = document.createElement("ul");
document.body.appendChild($ul);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});
/**
 * !NOTA: INNERHTML
 * Los innerHTML nos va a renderizar el ultimo elemento
 * en el forEach, por ello mismo tenemos que inicializar
 * con un string vacio en el INNERHTML
 * y utilizar el incremento += para no reemplazar y colocar el ultimo
 * con el += concatenamos lo que se renderiza
 */
document.write("<h3> Continentes del mundo </h3>");

$ul2 = document.createElement("ul");
document.body.appendChild($ul2);
// EJEMPLO:
$ul2.innerHTML = "";
const continentes = ["África", "América", "Asia", "Europa", "Oceania"];
continentes.forEach((el) => {
  $ul2.innerHTML += `<li> ${el}</li>`;
});

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();
/**
 * !NOTA: Fragmento
 * Los fragmentos se le pueden iterar todos los elementos
 * Por lo tanto no le estamos pegando directamento al dom
 * más bien estamos iterando al fragmento y por ultimo mostrarlo en el DOM
 *
 * !NOTA: Con el FRAGMENTO solamente hacemos una sola inserción al DOM
 * !NOTA: Y eso mejora el rendimiento
 */
meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});
$ul3.appendChild($fragment);
document.write("<h3> Meses del año</h3>");
document.body.appendChild($ul3);

/**
 * ? TITULO: TEMPLATE HTML + template + importNode() + fragment
 * !NOTA: Las etiquetas template no se renderizan en el DOM
 * 69. DOM: Templates HTML
 * Templates , modelo a seguir, el cual tu estructura es el contenido HTML que quieras para que se convierta en dinámico y es otra forma de poder interactuar con el DOM
 * a partir de un template se generan los elemenots
 */
const $fragment2 = document.createDocumentFragment(),
  $template = document.getElementById("template-card").content,
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];
cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;
  //NOTA: Los templates solo renderizan el primer elemento, y no estarían
  // Disponibles para una segunda, tercera.
  //EJEMPLO: Clonar el nodo de referencia
  let $clone = document.importNode($template, true);
  //NOTA: True clona la estructura interna, el falso sola las etiquetas
  $fragment2.appendChild($clone);
});

$cards.appendChild($fragment2);
/**
 * ?TITULO: OLD STYLE -  MODIFICANDO ELEMENTOS
 * ! replaceChild()  removeChilde()  insertBefore()
 

const $newCard = document.createElement("figure");

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any" />
        <figcaption>Any</figcaption>`;

$newCard.classList.add("card");
$cards.replaceChild($newCard, $cards.children[2]);
$cards.removeChild($cards.lastElementChild);
$cards.insertBefore($newCard, $cards.firstElementChild);
*/

/**
 * ?TITULO:  MODIFICANDO ELEMENTOS
 * ?        COOL STYLE
 * !insertAdjacentHTML(position, e)
 * !insertAdjacentElement(position, e)
 * !insertAdjacentText(position, text)
 * !NOTA: posiciones
 * ? beforebegin  afterbegin  beforend  afterend
 */
const $newCard = document.createElement("figure");

// $newCard.innerHTML = `
// <img src="https://placeimg.com/200/200/any" alt="Any" />
//         <figcaption>Any</figcaption>`;
//NOTA: Otra forma
let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any" />
        <figcaption></figcaption>`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//NOTA: Primera forma
// $cards.insertAdjacentElement("afterbegin", $newCard);
//NOTA: Segunda forma de insertar
$cards.prepend($newCard);
//NOTA: Tercera forma
// $cards.before($newCard);
//NOTA: Cuarta forma
// $cards.after($newCard);
/**
 * ! prepend()  before()  after()
 */

/**
 * ? TITULO MANEJADORES DE EVENTOS
 */
/**
 * 📝 Los Eventos
    👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos
     comportamientos del document
    sucedan en cierto momento o cuando se cumplan algunas condiciones.

    👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido
     Manejadores 
    de Eventos, o tmb Observadores o Escuchadores.
    
    👉 Hay 3 maneras de definir los Eventos en JS : 
 */
/* ************************************************************************************************************************************** */

//1️⃣ COMO ATRIBUTO DEL HTML

//👀 Muy importante:
/**👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
    *!👉 Cuando una función se convierte en un Event Handler, es decir una función que se 
    ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento
     en sí, y eso lo podemos acceder con la palabra reservada 'event'
   */
function holaMundo() {
  alert("Holaaa Mundo");
  console.log(event); //👈 con esto en la consola, se desencadena un tipo de
  //Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos
  //propiedades muy importantes: type y target.

  //👉 type.- es el tipo de evento q se desencadeno
  //👉 target.- es el elemento que origino el evento
  //👉 Dentro de target estan todos los eventos y propiedades q se pueden usar
  // por dicho elemento y los q estan en null son eventos q no tienen definida dicha
  //función en dichos eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo
}
/* *************************************************************************************************************************************** */

//2️⃣ COMO MANEJADOR SEMÁNTICO

//👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo
//👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo; //👈 no le ponemos () a la función xq sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se ejecuta.

//👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function
$eventoSemantico.onclick = function (e) {
  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
  alert(`Hola Manejador de Evento Semántico`);
  console.log(e);
  console.log(event);
};

/* ************************************************************************************************************************************** */

//3️⃣ COMO MANEJADOR MÚLTIPLE

//👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
const $eventoMultiple = document.getElementById("evento-multiple");
//👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
// 1° Nombre de evento
// 2° Función q se va a ejecutar, pero sin parentesis
/**
 *!NOTA: la función manejadora no lleva parentesis ()
 */
$eventoMultiple.addEventListener("click", holaMundo);

//👇 tmb podemos trabajar con una arrow function
$eventoMultiple.addEventListener("click", (e) => {
  //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
  alert(`Hola Manejador de Evento Múltiple`);
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

const saludar = (nombre = "Desconocid@") => {
  console.log(`Hola ${nombre}`);
};
/**
 *!NOTA: la función manejadora no lleva parentesis ()
 * ! En este caso saludar() deja de ser la funcion manejadora
 * ! porque primero tenemos la arrow function como la función manejadora
 */
$eventoMultiple.addEventListener("click", () => {
  saludar();
});
const $eventoRemover = document.getElementById("evento-remover");

const removerEvent = (e) => {
  alert("Remover el Event Listener");
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerEvent);
  $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener("dblclick", removerEvent);

/* ************************************************************************************************************************************** */

//1️⃣ Flujo de eventos BURBUJA Y CAPTURA
$flujos = document.querySelectorAll(".eventos-flujo");

function flujosEventos(e) {
  console.log("Hola");
}

$flujos.forEach((e) => {
  e.addEventListener("click", flujosEventos);
});
