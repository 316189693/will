import loginService from "../../../api/login";
const state = {
    user: {
        account : "",
        password : "",
    },
    isAuthenticate: false
}

const getters= {
    isAuthenticate: (state) => {
        return state.isAuthenticate;
    }
}

const actions = {
     login ({commit, state}, params) {

        loginService.login(params, function(data) {
            console.log(data);
            if (data.data.status == 1) {
                commit('setAuthenticate', true)

            } else {
                commit('setAuthenticate', false)
            }
        }, function(error) {
            console.log("error "+ error);
        })
    }
}

const mutations = {
    setAuthenticate(state, value) {
        state.isAuthenticate = value;
    },
    account(state, value) {
        state.user.account = value;
    },
    password(state, value) {
        state.user.password = value;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}