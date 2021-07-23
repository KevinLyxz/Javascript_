const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "mi titulo dinamico" });
});

router.get("/servicios", (req, res) => {
  res.render("servicios", {
    titulo: "Servicios de EJS",
    descripcion: "Esta es una página dinamica de EJS para servicios",
  });
});

module.exports = router;
