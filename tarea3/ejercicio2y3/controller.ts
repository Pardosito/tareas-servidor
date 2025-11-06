import { Request, Response } from "express";

export function testEndpoint(req: Request, res: Response) {
  res.status(200).send({ message: "ok" });
}

export function adminEndpoint(req: Request, res: Response) {
  res.status(200).send({ message: "ok" });
}