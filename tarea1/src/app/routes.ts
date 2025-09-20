import { Router } from "express";
import everythingRoutes from "./everything/routes";
import topheadlinesRoutes from "./topheadlines/routes";
import sourcesRoutes from "./sources/routes"

const router = Router();

router.use("/news", everythingRoutes);
router.use("/topheadlines", topheadlinesRoutes);
router.use("/sources", sourcesRoutes);

export default router;