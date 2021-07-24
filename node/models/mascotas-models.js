const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  nombre: String,
  descripcion: String,
});

const mascotasModels = mongoose.model("mascotasModels", mascotaSchema);

module.exports = mascotasModels;
