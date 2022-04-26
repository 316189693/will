import userService from "../../../api/user";

const state = {
    user: {
        account: "",
        password: "",
        first_name: "",
        last_name: "",
    },
    isCreated: false,
    error: "",
}

const getters = {
    isCreated: (state) => {
        return state.isCreated;
    }
}

const actions = {
    signup({commit, state}, params) {

        userService.signUp(params, function (res) {
            if (res.status == 200) {
                commit('setCreated', true)

            } else {
                commit('setCreated', false)
                commit('setError', res.message)
            }
        }, function (e) {
            commit('setCreated', false);
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
    setCreated(state, value) {
        state.isCreated = value;
        if (value == false) {
            state.user.account = "";
            state.user.password = "";
            state.user.first_name = "";
            state.user.last_name = "";
            state.error = "";

        }
    },
    setError(state, value) {
        state.error = value;
    },
    reset(state, value){
        state.user.account = "";
        state.user.password = "";
        state.user.first_name = "";
        state.user.last_name = "";
        state.error = "";
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}