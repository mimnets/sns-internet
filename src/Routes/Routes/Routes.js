import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddCollectedBills from "../../Pages/Dashboard/AddCollectedBills/AddCollectedBills";
import AddCustomer from "../../Pages/Dashboard/AddCustomer/AddCustomer";
import BillCollect from "../../Pages/Dashboard/BillCollect/BillCollect";
import Customers from "../../Pages/Dashboard/Customers/Customers";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path: '/dashboard/customers',
                element: <Customers></Customers>,
            },
            {
                path: '/dashboard/add-customer',
                element: <AddCustomer></AddCustomer>
            },
            {
                path: '/dashboard/add-bills',
                element: <AddCollectedBills></AddCollectedBills>
            },
            {
                path: '/dashboard/bill-collect',
                element: <BillCollect></BillCollect>
            },
        ]
    }
])