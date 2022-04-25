import Home from "../components/HomePage.vue";
import Dashboard from "../components/DashboardPage.vue";
import LogIn from "../components/LoginPage.vue";
import SignUp from "../components/SignUpPage.vue";

export default [
    {path: '/', component: Home},
    {path: '/dashboard', component: Dashboard},
    {path: '/login', component: LogIn},
    {path: '/user/signup', component: SignUp},
];
