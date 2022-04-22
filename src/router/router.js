import Home from "../components/HomePage.vue";
import LogIn from "../components/LoginPage.vue";
import SignUp from "../components/SignUpPage.vue";

export default [
    {path: '/', component: Home},
    {path: '/login', component: LogIn},
    {path: '/user/signup', component: SignUp},
];
