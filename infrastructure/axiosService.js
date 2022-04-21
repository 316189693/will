import axios from 'axios'
console.log("axios")
let instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 3000,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
})
export default instance;