const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.listen(process.env.PORT || 3030, () => { console.log("server iniciado") });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
    console.log("Te logueaste correctamente");
    res.redirect("/");
});

app.get('/register', (req, res) => {
    console.log("Te registraste correctamente");
    res.sendFile(__dirname + '/views/register.html');
});

app.post("/register", (req, res) => {
    res.redirect("/");
});
