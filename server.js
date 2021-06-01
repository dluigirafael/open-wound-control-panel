const express = require("express");
const { exec } = require("child_process");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");
const axios = require("axios");

app.use(cors());

app.get("/reboot", (req, res) => {
  exec("ls", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  res.send({
    success: true,
  });
});

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
