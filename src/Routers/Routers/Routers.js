import { createBrowserRouter } from "react-router-dom";
import DashboarLayout from "../../layout/DashboarLayout";
import Main from "../../layout/Main";
import ErrorPage from "../../pages/404page/ErrorPage";
import Blog from "../../pages/Blog/Blog";
import AllBuyer from "../../pages/Dashboard/AllBuyer";
import AllUsers from "../../pages/Dashboard/AllUsers";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders";
// import CategoryCard from "../../pages/Home/Category/CategoryCard";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import CategoryProduct from "../../pages/Products/CategoryProduct";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><CategoryProduct></CategoryProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboarLayout></DashboarLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/sellers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/buyers',
                element: <AllBuyer></AllBuyer>
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])