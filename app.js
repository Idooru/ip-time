const express = require("express");
const { getClientIp } = require("request-ip");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/ip", (req, res) => {
  let { ip, clientIp, hostname } = req;
  let getClientIp = getClientIp(req);

  res.json({
    hostname,
    ip,
    clientIp,
    getClientIp,
  });
});

app.listen(80, "0.0.0.0", () => {
  console.log("Server is running");
});
