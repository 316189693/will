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
             if (res.status == 200) {
                 commit('setAuthenticate', true)
                 localStorage.setItem("htjy_token", res.data.token)
                 localStorage.setItem("htjy_user_id", res.data.user_id)
                 commit('userId', res.data.user_id)

             } else {
                 commit('setAuthenticate', false)
                 commit('setError', res.message)
             }
         }, function (e) {
             commit('setAuthenticate', false);
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