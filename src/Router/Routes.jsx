import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import AllFoods from "../Pages/AllFoods/AllFoods";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/logIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/allFoods',
                element:<AllFoods></AllFoods>,
                loader:()=>fetch('/public/cleaned_restaurant_food_items.json')
            }
        ]
    }
])

export default router