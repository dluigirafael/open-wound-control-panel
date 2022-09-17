import express from "express";
import config from "./config";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(config.app.port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
