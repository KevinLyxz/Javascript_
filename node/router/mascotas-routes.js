/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const express = require('express');
// const { findByIdAndDelete } = require('../models/mascotas-models');
const router = express.Router();

const mascotasModels = require('../models/mascotas-models');

router.get('/', async (req, res) => {
  try {
    const arrayMascotas = await mascotasModels.find();
    // console.log(arrayMascotas);

    res.render('mascotas', {
      arrayMascotas,
      titulo: 'Página de Mascotas',
    });
  } catch (e) {
    console.error(e);
  }
});

router.get('/crear', (req, res) => {
  res.render('crear', {
    titulo: 'Crear mascota',
    descripcion: 'Página para crear mascotas',
  });
});

router.post('/', async (req, res) => {
  const { body } = req;
  try {
    // eslint-disable-next-line new-cap
    const mascotaDB = new mascotasModels(body);
    // await mascotaDB.save();

    await mascotasModels.create(body);

    res.redirect('/mascotas');
    console.log(mascotaDB);
  } catch (e) {
    console.error(e);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const mascotaDB = await mascotasModels.findOne({ _id: id });
    // console.log(mascotaDB);

    res.render('detalle', {
      mascota: mascotaDB,
      error: false,
      titulo: 'Detalle mascota',
    });
  } catch (error) {
    // console.error(error);
    res.render('detalle', {
      error: true,
      mensaje: 'No se encuentra el id seleccionado',
    });
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  // NOTA: tuve un error la ruta para acceder al ID
  // lo solucione investigando del req.params (los parametros de la URL)
  try {
    const mascotaDB = await mascotasModels.findByIdAndDelete({
      _id: id,
    });
    if (mascotaDB) {
      res.json({
        estado: true,
        mensaje: 'eliminado!',
      });
    } else {
      res.json({
        estado: false,
        mensaje: 'fallo eliminar',
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    // NOTA: método findByIdAndUpdate
    const mascotaDB = await mascotasModels.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });
    res.json({
      estado: true,
      mensaje: 'Editado mascota',
    });
    console.log('router put', mascotaDB);
  } catch (error) {
    console.error(error);
    res.json({
      estado: false,
      mensaje: 'Edición falló',
    });
  }
});
module.exports = router;
