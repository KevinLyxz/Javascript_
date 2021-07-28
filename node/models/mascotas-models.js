/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const mascotaSchema = new Schema({
  nombre: String,
  descripcion: String,
});
const mascotasModels = mongoose.model('mascotas', mascotaSchema);
module.exports = mascotasModels;
