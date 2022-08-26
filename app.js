const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.listen(3030, () => { console.log("server iniciado") });
app.get("/", (res, req) => { req.sendFile(path.join(__dirname, "/views/home.html")) });
//app.get("/", (res, req) => { req.sendFile(path.join(__dirname, "/views/register.html")) });