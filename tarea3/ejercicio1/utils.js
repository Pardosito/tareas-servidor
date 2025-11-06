function suma(a, b) {
  return Number(a) + Number(b);
};

function resta(a, b) {
  return a - b;
};

function multiplica(a, b) {
  return a * b;
};

function divide(a, b) {
  if (b == 0) {
    return;
  }
  return a / b;
}

module.exports = {
  suma,
  resta,
  multiplica,
  divide
};