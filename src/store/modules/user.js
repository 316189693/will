import userService from "../../../api/user";
const state = {
    user: {
        user_id: "",
        user_first_name : "",
        user_last_name : "",
        user_username : "",
    },
    error: ""
}

const getters= {
    getUser: (state) => {
        return state.user;
    }
}

const actions = {
    detail ({commit, state}, params) {
        userService.detail(params, function (res) {
            if (res.status == 200) {
                commit('setUser', res.data.data)

            } else {
                commit('setError', res.message)
            }
        }, function (e) {
            let message = "";
            if (e.response && e.response.data) {
                if (e.response.data.error) {
                    message = "status_code:" + e.response.data.error.status + " detail:" + e.response.data.error.message;
                } else {
                    message = "status_code:" + e.response.data.status + " detail:" + e.response.data.message;
                }

            } else {
             message = e.message;
            }
            commit('setError', message);
        })

    }
}

const mutations = {
    setUser(state, value) {
        state.user.user_first_name = value.user_first_name;
        state.user.user_last_name = value.user_last_name;
        state.user.user_username = value.user_username;
        state.user.user_id = value.user_id;
        state.error = "";
        if (value == false) {
            state.user.user_first_name = "";
            state.user.user_last_name = "";
            state.user.user_username = "";
            state.user.user_id = "";
            state.error = "";
        }
    },
    setError(state, value) {
        state.error = value
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}