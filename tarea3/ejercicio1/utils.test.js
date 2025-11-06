const utils = require("./utils");

describe("Utils.js tests", function() {
  it("sumando String y Number", () => {
      let a = "350";
      let b = 150;
      expect(utils.suma(a, b)).toBe(500);
  });

  it("restando negativos", () => {
    let a = -130;
    let b = 20;
    expect(utils.resta(a, b)).toBe(-150);
  });

  it("multiplicando negativo y positivo", () => {
    let a = -10;
    let b = 10;
    expect(utils.multiplica(a, b)).toBe(-100);
  });

  it("diviendo entre zero", () => {
    expect(utils.divide(10, 0)).toBe(undefined);
  });
});

