import { createBrowserRouter } from "react-router-dom";
import DashboarLayout from "../../layout/DashboarLayout";
import Main from "../../layout/Main";
import ErrorPage from "../../pages/404page/ErrorPage";
import Blog from "../../pages/Blog/Blog";
import AddBike from "../../pages/Dashboard/AddBike";
import AllBuyer from "../../pages/Dashboard/AllBuyer";
import AllUsers from "../../pages/Dashboard/AllUsers";
import MyOrders from "../../pages/Dashboard/MyOrders";
import MyProduct from "../../pages/Dashboard/MyProduct";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import CategoryProduct from "../../pages/Products/CategoryProduct";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddBike></AddBike></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])