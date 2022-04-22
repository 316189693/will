import axiosService from '../infrastructure/axiosService';
export default {
    signUp (user, cb, errorcb) {
        axiosService.post("/user/signup", user) .then(cb, errorcb);
    }
}