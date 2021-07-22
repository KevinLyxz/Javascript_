//NOTA: Constantes
const $items = document.getElementById("items");
const $TemplateCarrito = document.getElementById("template-carrito").content;
const $TemplateMsjFooter = document.getElementById(
  "template-message-footer"
).content;
const $TemplateCarritoFooter =
  document.getElementById("template-footer").content;
const $tableBody = document.getElementById("itemsCarrito");
const $tableFooter = document.getElementById("footer");
const $templateFooter = document.getElementById("template-footer").content;
//NOTA: Nunca olvidar el content
const $templateCard = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();
let carrito = {};

/**
 * ?TITULO: Consumiendo una "API" recibida en formato JSON.
 */
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  if (localStorage.getItem("cartKey")) {
    carrito = JSON.parse(localStorage.getItem("cartKey"));
    pintarCart();
  }
});

//NOTA: Click dentro de cada producto
items.addEventListener("click", (e) => {
  addCart(e);
});

$tableBody.addEventListener("click", (e) => {
  btnIncrement(e);
});

const fetchData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    pintarCard(data);
    //NOTA: CONSOLES
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (data) => {
  data.forEach((producto) => {
    $templateCard.querySelector("h5").textContent = producto.title;
    $templateCard.querySelector("span").textContent = producto.precio;

    $templateCard
      .querySelector("img")
      .setAttribute("src", producto.thumbnailUrl);
    $templateCard.querySelector("button").dataset.id = producto.id;
    let clone = $templateCard.cloneNode(true);
    $fragment.appendChild(clone);
  });
  items.appendChild($fragment);
};

const addCart = (e) => {
  if (e.target.classList.contains("btn-dark")) {
    setCart(e.target.parentElement);
    // console.log(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCart = (obj) => {
  const producto = {
    id: obj.querySelector(".btn-dark").dataset.id,
    title: obj.querySelector("h5").textContent,
    //NOTA: Selecciono el segundo "P" donde está el precio
    precio: obj.querySelector("span").textContent,
    cantidad: 1,
  };

  //NOTA: Carrito es toda la colección de objetos
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }

  //NOTA: Spread Operator
  //Estmaos haciendo una colección de objetos pero indexado
  //Con el SpreadOperator adquiriendo/Copiando la informacion de producto
  // Creo el index con su id
  carrito[producto.id] = { ...producto };
  pintarCart();
};

const pintarCart = () => {
  // console.log(carrito);
  $tableBody.innerHTML = "";
  Object.values(carrito).forEach((p) => {
    $TemplateCarrito.querySelector("th").textContent = p.id;
    $TemplateCarrito.querySelectorAll("td")[0].textContent = p.title;
    $TemplateCarrito.querySelectorAll("td")[1].textContent = p.cantidad;
    $TemplateCarrito.querySelector("span").textContent = p.precio * p.cantidad;
    //BOTONES
    $TemplateCarrito.querySelector(".btn-info").dataset.id = p.id;
    $TemplateCarrito.querySelector(".btn-danger").dataset.id = p.id;

    const clone = $TemplateCarrito.cloneNode(true);
    $fragment.appendChild(clone);
  });
  $tableBody.append($fragment);

  pintarFooter();

  localStorage.setItem("cartKey", JSON.stringify(carrito));
};

const pintarFooter = () => {
  $tableFooter.innerHTML = "";
  if (Object.keys(carrito).length === 0) {
    $tableFooter.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;
    // const txt = document.createTextNode("Carrito vacío - comience a comprar!");
    // $TemplateMsjFooter.querySelector("th").textContent = txt;
    // let clone = $TemplateMsjFooter.cloneNode(true);
    // $fragment.appendChild($clone);
    // $tableFooter.appendChild($fragment);
    return;
  }

  const allQty = Object.values(carrito).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );
  const allPrices = Object.values(carrito).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  );

  $templateFooter.querySelectorAll("td")[0].textContent = allQty;
  $templateFooter.querySelector("span").textContent = allPrices;
  let clone = $templateFooter.cloneNode(true);
  $fragment.appendChild(clone);

  $tableFooter.appendChild($fragment);

  //NOTA: Botón vaciar carrito
  const btnVaciar = document.getElementById("vaciar-carrito");
  btnVaciar.addEventListener("click", () => {
    (carrito = {}), pintarCart();
  });
};

const btnIncrement = (e) => {
  /**
   * ?TITULO: BOTÓN DE INCREMENTO  */
  if (e.target.classList.contains("btn-info")) {
    const producto = carrito[e.target.dataset.id];
    // producto.cantidad = carrito[e.target.dataset.id].cantidad + 1;
    producto.cantidad++;
    carrito[e.target.dataset.id] = { ...producto };
    console.log(carrito[e.target.dataset.id]);
    pintarCart();
  }

  if (e.target.classList.contains("btn-danger")) {
    const producto = carrito[e.target.dataset.id];
    // producto.cantidad = carrito[e.target.dataset.id].cantidad - 1;
    producto.cantidad--;
    carrito[e.target.dataset.id] = { ...producto };
    pintarCart();

    if (producto.cantidad === 0) {
      delete carrito[e.target.dataset.id];
    }
    e.stopPropagation();
  }
};
