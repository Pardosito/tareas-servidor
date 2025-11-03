import { renderChat, renderRooms } from "./controller";
import { Router } from "express";

const router = Router();

router.get("/chats/:id", renderChat);
router.get("/rooms", renderRooms);


export default router;