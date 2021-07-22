const express = require("express");
const app = express();
const port = 3000;
// MOTOR DE PLANTILLA
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//FIN DE MOTOR DE PLANTILLA

app.get("/", (req, res) => {
  res.render("index", { titulo: "mi titulo dinamico" });
});

/**
 * ! app.get("/servicios", (req, res) => {
 * ! res.send("Estás en la página de servicios");
 * ! });
 */

app.get("/servicios", (req, res) => {
  res.render("servicios", {
    titulo: "Servicios de EJS",
    descripcion: "Esta es una página dinamica de EJS para servicios",
  });
});

app.listen(port, () => {
  console.log(`Escuchando desde http://localhost:${port}`);
});

app.use(express.static(__dirname + "/public"));

//NOTA: status 404 - devolver un archivo estatico
// app.use((req, res, next) => {
//   res.status(404).sendFile(__dirname + "/public/404.html");
// });

// NOTA: 404 con EJS
app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Esto es un 404 con EJS",
  });
});
