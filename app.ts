import express from "express";
import config from "./config";
import Routes from "./Routes";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("root");
});
app.use("/", Routes);

app.listen(config.app.port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
