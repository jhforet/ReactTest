import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/blog',
        component: ShowPage
    }
];

export default routes;