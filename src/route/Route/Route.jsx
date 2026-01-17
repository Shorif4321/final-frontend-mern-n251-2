import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../components/Shared/NotFound/NotFound";
import Main from "../../layout/Main/Main";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            }

        ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>

    }
])

export default router