const http = require("http");
//NOTA: req (solicitud) - res (respuesta)
const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Te envío un saludo desde el servidor con node.js v4");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("Escuchando...");
});
