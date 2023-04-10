import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Login from "../../pages/Login/Login";
import POS from "../../pages/POS/POS";
import ManageProducts from "../../pages/ManageProducts/ManageProducts";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Register from './../../pages/Register/Register';
import AddProduct from "../../pages/AddProduct/AddProduct";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/pos',
                element: <POS/>
            },
            {
                path: '/manage-products',
                element: <ManageProducts/>
            },
             {
                path: '/add-product',
                element: <AddProduct/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
]);