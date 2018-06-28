var express = require("express");

var app = express();

// "/"=> "Hy there!"
app.get("/", function(req, res) {
    res.send("Hy there!");
});
// "/bye" => "goodbye"
app.get("/bye", function(req, res) {
    res.send("goodbye");
})
// "/dog" => "Moaw"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    res.send("Moaw!");
})

// Tell Express to listen for request (start server)

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started!");
});