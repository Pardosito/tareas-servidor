import { Router } from "express";
import { getHeadlineByCategory } from "./controllers";
import { getHeadlineByCountry } from "./controllers";
import { getHeadlineBySource } from "./controllers";
import { getHeadlineByQuery } from "./controllers";


const router = Router();

router.get("/category", getHeadlineByCategory);
router.get("/country", getHeadlineByCountry);
router.get("/source", getHeadlineBySource);
router.get("/query", getHeadlineByQuery);

export default router;