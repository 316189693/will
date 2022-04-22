import axios from 'axios'
let env = process.env.NODE_ENV !== 'production' ? 'dev':'prod';
let cfg_path = __dirname + "/../../will-config/will-front/"+env+"/config.json";
console.log(cfg_path);
let cfg = require(cfg_path);

let instance = axios.create({
    baseURL: cfg.backend_base_url,
    timeout: cfg.timeout,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
})
export default instance;