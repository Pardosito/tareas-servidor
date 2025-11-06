import request from "supertest";
import app from "./index";
import jwt from "jsonwebtoken";

describe('Prueba endpoint /test', () => {

  test("Respuesta esperada: status 200", async () => {
    const res = await request(app).get("/test");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "ok" });
  });
});

describe("Prueba endpoint /admin", () => {
  const testSecret = "secretitomuysecreto";
  process.env.JWT_SECRET = testSecret;

  test("Responder 401 si no hay token" , async () => {
    const res = await request(app).get("/admin");
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({ message: "no header" });
  });

  test("Responder 401 si token inválido", async () => {
    const res = await request(app)
      .get("/admin")
      .set("authorization", "Bearer holabuenas");
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({ message: "invalid token"})
  });

  test("Responder 200 con token válido", async () => {
    const token = jwt.sign({ user: "admin" }, testSecret, { expiresIn: "1h"});
    const res = await request(app)
      .get("/admin")
      .set("authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "ok" });
  });
});
