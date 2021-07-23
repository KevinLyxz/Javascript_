const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  nombre: String,
  descripcion: String,
});

const mascotasModels = mongoose.model("Mascota", mascotaSchema);

module.exports = mascotasModels;
