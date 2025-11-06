import express from "express";
import router from "./routes";

const app = express();
app.use(router);

const PORT = 3000;

app.get("", (req, res) => {
    res.send('api works');
})

app.listen(PORT, () => {
    console.log("api is running");
});

export default app