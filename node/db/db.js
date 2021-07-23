const mongoose = require("mongoose");
const user = "kevinlyxz";
const password = "ATHBPQsQC8FEsfL2";
const dbname = "veterinaria";
const uri = `mongodb+srv://${user}:${password}@cluster0.6cqh9.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("base de datos conectada");
  })
  .catch((e) => console.error(e));
