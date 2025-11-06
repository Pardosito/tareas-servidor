import { JwtPayload } from "jsonwebtoken";

export interface IUser {
    token?: JwtPayload;
}