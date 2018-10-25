var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

//Use the express statc middlw ware to server static content for the app from the "public directory";
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index.html');
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});