import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>,
                loader:()=>fetch("/news.json"),

            }
        ]
    },
    {
        path:"auth",
        element:<h2>auth layout</h2>
    },
    {
        path:"news",
        element:<h2>news layout</h2>
    },
    {
        path:"/*",
        element:<h2>Error 404 not found </h2>
    },
])
