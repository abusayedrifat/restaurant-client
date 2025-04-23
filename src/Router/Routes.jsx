import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import AllFoods from "../Pages/AllFoods/AllFoods";
import SingleFood from "../Pages/SingleFood/SingleFood";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";

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
                loader:()=>fetch('http://localhost:5000/foodItems')
            },
            {
                path:'/addFood',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute> 
            },
            {
                path:'/singleFoodPage/:id',
                loader:({params})=>fetch(`http://localhost:5000/foodItems/${params.id}`) ,
                element:<SingleFood></SingleFood>
                
            },
            {
                path:'/foodPurchase/:id',
                loader:({params})=>fetch(`http://localhost:5000/foodItems/${params.id}`),
                element:<PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>  
            }
        ]
    }
])

export default router