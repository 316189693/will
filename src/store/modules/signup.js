import userService from "../../../api/user";

const state = {
    user: {
        account: "",
        password: "",
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
            commit('setError', "status_code:" + e.response.data.status + " detail:" + e.response.data.message);
        })
    }
}

const mutations = {
    setCreated(state, value) {
        state.isCreated = value;
        if (value == false) {
            state.user.account = "";
            state.user.password = "";
            state.error = "";
        }
    },
    setError(state, value) {
        state.error = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}