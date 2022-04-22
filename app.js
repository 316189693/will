const express = require('express');
let fs = require('fs');
let https = require("https");
let env = process.env.NODE_ENV !== 'production' ? 'dev':'prod';
let cfg = require("../will-config/will-front/"+env+"/config.json");
let options = {
    key: fs.readFileSync(cfg.privkey_file),
    cert: fs.readFileSync(cfg.cacert_file)
};
const app = express();
app.use(express.static("./dist"))

let server = https.createServer(options, app);
server.listen(cfg.port);

console.log("port:"+cfg.port);