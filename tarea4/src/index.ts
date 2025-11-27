import dotenv from "dotenv";
import express from "express";
import router from "./routes";
import { engine } from "express-handlebars";

dotenv.config()
console.log("User:", process.env.EMAIL_USER);
console.log("Pass:", process.env.EMAIL_PASSWORD ? "Si" : "NO")
const app = express();
app.use(router);
const PORT = 3000;
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views")


app.get("", (req, res) => {
    res.render("main");
})

app.listen(PORT, () => {
    console.log("api is running");
});

export default app