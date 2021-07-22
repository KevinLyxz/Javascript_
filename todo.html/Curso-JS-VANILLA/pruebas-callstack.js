const factorial = (n = undefined) => {
  if (n === undefined) return console.warn("No puede estar vacío");
  if (typeof n !== "number") return console.warn("No es un número");
  if (typeof n === 0) return console.warn("No puede ser 0 ");
  if (Math.sign(n) === -1) return console.warn("No puede ser negativo");
  f = 1;
  for (let i = n; i > 1; i--) {
    f *= i;
  }
  return console.log(f);
};

factorial(6);
