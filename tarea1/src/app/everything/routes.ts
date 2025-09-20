import { Router } from "express";
import { getEverythingTopic } from "./controllers";
import { getEverythingTopicFrom } from "./controllers";
import { getEverythingTopicSortBy } from "./controllers";

const router = Router();

router.get("", getEverythingTopic);
router.get("/sort", getEverythingTopicSortBy);
router.get("/from", getEverythingTopicFrom);

export default router;