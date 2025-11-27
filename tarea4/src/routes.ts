import { Router } from "express";
import { sendEmail } from "./controllers";

const router = Router();

router.get("/email", sendEmail);

export default router;