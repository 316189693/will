import {createStore} from 'vuex'
import homeModule from './modules/home';
import actions from './actions';
import mutations from './mutations';
const store = createStore({
    modules: {
        home: homeModule
    },
    actions: actions,
    mutations: mutations
});
export default store;