const { frutas, dinero } = require("./const");

frutas.forEach((el) => {
  console.log(el);
  console.log(dinero);
});

const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "Hola amigos de bluwweb",
    e: "Oo",
    T: "U",
  })
);
