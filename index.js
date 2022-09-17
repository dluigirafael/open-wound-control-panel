import express from "express";
import config from "./config";
import "dotenv/config.js";

const app = express();
app.listen(config.app.port);
