import About from "../pages/About"
import Characters from "../pages/Characters"
import Episodes from "../pages/Episodes"
import Location from "../pages/Location"
import MainPage from "../pages/MainPage"



export const PrivetRoutes = [
    {path:'/MainPage', component: MainPage, exact: 'true'},
    {path:'/MainPage/1', component: Characters, exact: 'true'},
    {path:'/MainPage/2', component: Location, exact: 'true'},
    {path:'/MainPage/3', component: Episodes, exact: 'true'},
    {path:'/About', component: About, exact: 'true'},
    // {path: 'Favorit', component: ,exact:'true'}
]

export const PublickRoutes = [
    {path:'/MainPage', component: MainPage, exact: 'true'},
    {path:'/MainPage/1', component: Characters, exact: 'true'},
    {path:'/MainPage/2', component: Location, exact: 'true'},
    {path:'/MainPage/3', component: Episodes, exact: 'true'},
    {path:'/About', component: About, exact: 'true'},
]