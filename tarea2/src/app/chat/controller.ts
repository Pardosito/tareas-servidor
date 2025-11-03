import { Request, Response } from "express";

export function renderChat(req: Request, res: Response) {
  const roomId = req.params.id;

  const rooms = [
    { id: "sala1", name: "Sala General" },
    { id: "sala2", name: "Sala de Películas" },
    { id: "sala3", name: "Sala de Profecito" },
  ];

  const room = rooms.find((r) => r.id === roomId);
  const roomName = room ? room.name : roomId;

  res.render("chat", { roomId, roomName });
}
export function renderRooms(req: Request, res: Response) {
  const rooms = [
    { id: "sala1", name: "Sala General" },
    { id: "sala2", name: "Sala de Películas" },
    { id: "sala3", name: "Sala de Profecito" },
  ];

  res.render("rooms", { rooms });
}