const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
// MOTOR DE PLANTILLA
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
//FIN DE MOTOR DE PLANTILLA

//NOTA: BASE DE DATOS
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.6cqh9.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("base de datos conectada"))
  .catch((e) => console.error("ERROR DE CONEXION", e));
//

//NOTA: RUTAS DE LA WEB
app.use("/", require("./router/routes"));
app.use("/mascotas", require("./router/mascotas-routes"));

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

app.listen(port, () => {
  console.log(`Escuchando desde http://localhost:${port}`);
});
