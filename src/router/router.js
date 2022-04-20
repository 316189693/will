import Home from "../components/HomePage.vue";
import Login from "../components/LoginPage.vue";
const Help = {template: '<div>Help</div>'};
export default [
    {path: '/', component: Home},
    {path: '/help', component: Help},
    {path: '/login', component: Login},
];
