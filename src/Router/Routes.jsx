import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import SingleFood from "../Pages/SingleFood/SingleFood";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import Gallery from "../Pages/Gallery/Gallery";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyFoods from "../Pages/MyFoods/MyFoods";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import UpdateMyFood from "../Pages/UpdateMyFood/UpdateMyFood";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                loader:()=>fetch('http://localhost:5000/foodItems'),
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
                element:<AllFoods></AllFoods>
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
            },
            {
                path:'/foodGallary',
                loader:()=>fetch('http://localhost:5000/foodItems'),
                element:<Gallery></Gallery>
            },
            {
                path:'/myOrders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute> 

            },
            {
                path:'/myFoods',
                element:<MyFoods></MyFoods>
            },
            {
                path:'/updateMyFood',
                element:<UpdateMyFood></UpdateMyFood>
            }
        ]
    }
])

export default router