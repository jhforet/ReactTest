import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import RegistrationPage from "./pages/RegistrationPage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/registration',
        component: RegistrationPage
    },
    {
        path: '/createproject',
        component: CreatePage
    }
];

export default routes;