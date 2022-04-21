const express = require('express');
let fs = require('fs');
let https = require("https");
let options = {
    key: fs.readFileSync("./enc/privkey.pem"),
    cert: fs.readFileSync("./enc/cacert.pem")
};

const app = express();
app.use(express.static("./dist"))

let server = https.createServer(options, app);
server.listen(8000);