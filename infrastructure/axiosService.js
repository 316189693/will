let axios = require('axios');
let env = process.env.NODE_ENV !== 'production' ? 'dev':'prod';
let  cfg = require("../../will-config/will-front/"+env+"/config.json");
let qs = require('qs');
axios.defaults.transformRequest = function (data) {
    const UserToken = localStorage.getItem("htjy_token");
    const UserID = localStorage.getItem("htjy_user_id");
    let parseData = qs.parse(data);

    let requestData = JSON.stringify({
        UserID: UserID,
        UserToken: UserToken,
        ...parseData
    });

    return requestData;
};

let instance = axios.create({
    baseURL: cfg.backend_base_url,
    timeout: cfg.timeout,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
})
module.exports = instance;