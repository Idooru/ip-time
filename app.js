const express = require("express");
const { getClientIp } = require("request-ip");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/ip", (req, res) => {
  let { ip } = req;
  let clientIp = getClientIp(req);

  res.json({
    ip,
    clientIp,
  });
});

app.listen(8080, "0.0.0.0", () => {
  console.log("Server is running");
});