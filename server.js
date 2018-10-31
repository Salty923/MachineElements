const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
// app.set('view engine', 'html');

//Use the express statc middlw ware to server static content for the app from the "public directory";
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/contact", (req, res) => {
    console.log('route hit');
    res.sendFile(path.join(__dirname, "public/contact.html"));
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, "public/projects.html"));
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});