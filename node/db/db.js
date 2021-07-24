const mongoose = require("mongoose");
const user = "kevinlyxz";
const password = "5tV8wPtS6QxkV77A";
const dbname = "veterinaria";
const uri = `mongodb+srv://${user}:${password}@cluster0.6cqh9.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("base de datos conectada"))
  .catch((e) => console.error("ERROR DE CONEXION", e));

module.exports = mongoose;
