import loginService from "../../../api/login";
const state = {
    user: {
        user_id: "",
        account : "",
        password : "",
    },
    isAuthenticate: false,
    error:""
}

const getters= {
    isAuthenticate: (state) => {
        return state.isAuthenticate;
    }
}

const actions = {
     login ({commit, state}, params) {
         loginService.login(params, function (res) {
             console.log(res);
             if (res.status == 200) {
                 commit('setAuthenticate', true)
                 commit('userId', res.user_id)

             } else {
                 commit('setAuthenticate', false)
                 commit('setError', res.message)
             }
         }, function (e) {
             commit('setAuthenticate', false);
             commit('setError', "status_code:" + e.response.data.status + " detail:" + e.response.data.message);
         })

    }
}

const mutations = {
    setAuthenticate(state, value) {
        state.isAuthenticate = value;
        if (value == false) {
            state.user.account = "";
            state.user.password = "";
            state.user.user_id = "";
            state.error = "";
        }
    },
    account(state, value) {
        state.user.account = value;
    },
    password(state, value) {
        state.user.password = value;
    },
    userId(state, value) {
        state.user.user_id = value;
    },
    setError(state, value) {
        state.error = value;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}