const express = require("express");
const router = express.Router();

const mascotasModels = require("../models/mascotas-models");

router.get("/", async (req, res) => {
  try {
    const arrayMascotas = await mascotasModels.find();
    // console.log(arrayMascotas);

    res.render("mascotas", {
      arrayMascotas: arrayMascotas,
      titulo: "Página de Mascotas",
    });
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
