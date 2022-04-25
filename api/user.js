import axiosService from '../infrastructure/axiosService';
export default {
    signUp (user, cb, errorcb) {
        axiosService.post("/user/signup", user) .then(cb, errorcb);
    },
    detail(user_id, cb, errorcb) {
        const UserToken = localStorage.getItem("htjy_token");
        const UserID = localStorage.getItem("htjy_user_id");
        axiosService.get("/htjy/api/user/detail", {params:{user_id: user_id, "UserToken":UserToken, "UserID":UserID}}) .then(cb, errorcb);
    }
}