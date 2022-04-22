import axios from 'axios'
import cfg from '../../will-config/will-front/config.json';

let instance = axios.create({
    baseURL: cfg.backend_base_url,
    timeout: cfg.timeout,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
})
export default instance;