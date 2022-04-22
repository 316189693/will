const express = require('express');
let fs = require('fs');
let https = require("https");
let cfg = require("../will-config/will-front/config.json");
let options = {
    key: fs.readFileSync(cfg.privkey_file),
    cert: fs.readFileSync(cfg.cacert_file)
};
const app = express();
app.use(express.static("./dist"))

let server = https.createServer(options, app);
server.listen(cfg.port);