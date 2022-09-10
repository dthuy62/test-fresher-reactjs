import { RouteList } from "../constants/routes"
import MainPage from "../features/Animal/pages/Main"
import Login from "../features/Auth/page/Login"
import Home from "../features/Home"


export const privateRoutes = [
    {
        path: RouteList.animals,
        component: MainPage
    }
]
export const publicRoutes = [
    {
        path: RouteList.home,
        component: Home
    },
    {
        path: RouteList.login,
        component: Login
    },
]

