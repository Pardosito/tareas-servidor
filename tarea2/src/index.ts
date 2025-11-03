import express, { static as static_ } from 'express';
import { Server } from 'http';
import { Server as SocketServer } from 'socket.io';
import { engine } from 'express-handlebars';
import path from 'path';
import routes from './app/chat/routes'

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views")
const port = 3000;

app.use(express.json());
app.use("/static", static_(path.join(__dirname, "..", "public")));
app.use(routes);

app.get("", (req, res) => {
    res.render("login");
})

const server: Server = app.listen(port, () => {
    console.log(`app is running in port ${port}`)
})

const io = new SocketServer(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("Se creo una nueva conexión");
    socket.emit("Confirmacion");

    socket.on('joinRoom', ({ room, username }) => {
        if (!room) return;
        socket.join(room);
        socket.data.username = username;
        // notify other users in the room that someone joined
        socket.to(room).emit('userJoined', { room, username });
    });

    socket.on('leaveRoom', ({ room, username }) => {
        if (!room) return;
        socket.leave(room);
        socket.to(room).emit('userLeft', { room, username });
    });

    // When a socket disconnects unexpectedly, notify rooms about the departure
    socket.on('disconnect', (reason) => {
        const username = socket.data.username || 'Anon';
        // socket.rooms is a Set-like object including the socket.id and joined rooms
        for (const room of socket.rooms) {
            // skip the socket's own room (its id)
            if (room === socket.id) continue;
            socket.to(room).emit('userLeft', { room, username });
        }
    });

    socket.on("messageSent", (datos) => {
        const { room } = datos;
        if (room) {
            io.to(room).emit("messageReceived", datos);
        } else {
            io.emit("messageReceived", datos);
        }
    });

});