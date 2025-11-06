import { Request, Response, NextFunction } from "express";
import { IUser } from "./model";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).send({ message: "JWT Secret no encontrado" });
  }

  if (!authHeader) {
    return res.status(401).send({ message: "no header"});
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "no token" });
  }

  try {
    const decodedToken = jwt.verify(token, secret) as JwtPayload;
    req.user = {token: decodedToken};
    next();
  } catch (err) {
    return res.status(401).send({ message: "invalid token" });
  }
}