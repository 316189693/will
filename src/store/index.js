import {createStore} from 'vuex'
import actions from './actions';
import mutations from './mutations';

import homeModule from './modules/home';
import loginModule from './modules/login';

const store = createStore({
    modules: {
        home: homeModule,
        login: loginModule
    },
    actions: actions,
    mutations: mutations
});
export default store;