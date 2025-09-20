import { Router } from "express";
import { getSourcesByCategory } from "./controllers";
import { getSourcesByCountry } from "./controllers";
import { getSourcesByLanguage } from "./controllers";
import { getAllSources } from "./controllers";

const router = Router();

router.get("/", getAllSources);
router.get("/category", getSourcesByCategory);
router.get("/country", getSourcesByCountry);
router.get("/language", getSourcesByLanguage);

export default router;