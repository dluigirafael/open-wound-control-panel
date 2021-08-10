// const express = require("express");
// const PORT = process.env.PORT || 4000;
// const morgan = require("morgan");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const config = require("./config/db");
// const app = express();
// //configure database and mongoose
// mongoose.set("useCreateIndex", true);
// mongoose
//   .connect(config.database, { useNewUrlParser: true })
//   .then(() => {
//     console.log("Database is connected");
//   })
//   .catch((err) => {
//     console.log({ database_error: err });
//   });
// // db configuaration ends here
// //registering cors
// app.use(cors());
// //configure body parser
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// //configure body-parser ends here
// app.use(morgan("dev")); // configire morgan
// // define first route
// app.get("/", (req, res) => {
//   res.json("Hola Svelte Developers...Shall we fight??");
// });
// app.listen(PORT, () => {
//   console.log(`App is running on ${PORT}`);

// });
import { Application, send, connect } from "./deps.js";
import { database } from "./db.js";
const app = new Application();

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/../client/build`,
      index: "index.html",
    });
  } catch {
    next();
  }
});

app.addEventListener("listen", ({ port }) =>
  console.log(`listening on port: ${port} `)
);

await app.listen({ port: 8000 });
