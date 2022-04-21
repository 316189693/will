import axios from 'axios'
console.log("axios")
let instance = axios.create({
    baseURL: 'https://42.192.226.123:7000',
    timeout: 3000,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
})
export default instance;