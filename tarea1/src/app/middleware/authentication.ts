import { NextFunction, Request, Response } from "express";
import { API_KEY } from "../..";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const header = req.get("X-Api-Key");

  if (!header) {
    return res.status(401).json({ message: "Missing API Key." });
  }

  if (header !== API_KEY) {
    return res.status(401).json({ message: "Invalid API Key." });
  }

  next();
}