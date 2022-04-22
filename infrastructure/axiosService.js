let axios = require('axios');
let env = process.env.NODE_ENV !== 'production' ? 'dev':'prod';
let  cfg = require("../../will-config/will-front/"+env+"/config.json");
let instance = axios.create({
    baseURL: cfg.backend_base_url,
    timeout: cfg.timeout,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
})
module.exports = instance;