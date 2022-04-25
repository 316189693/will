import {createStore} from 'vuex'
import actions from './actions';
import mutations from './mutations';

import homeModule from './modules/home';
import loginModule from './modules/login';
import signupModule from './modules/signup';
import userModule from './modules/user';

const store = createStore({
    modules: {
        home: homeModule,
        login: loginModule,
        signup: signupModule,
        user: userModule
    },
    actions: actions,
    mutations: mutations
});
export default store;