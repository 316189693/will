import axiosService from '../infrastructure/axiosService';
export default {
    login (user, cb, errorcb) {
        axiosService.post("/login", user) .then(cb, errorcb);
    }
}