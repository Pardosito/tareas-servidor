import { Router } from "express";
import { testEndpoint, adminEndpoint } from "./controller";
import { authMiddleware } from "./middleware";

const router = Router();

router.get("/test", testEndpoint);
router.get("/admin", authMiddleware, adminEndpoint);

export default router;