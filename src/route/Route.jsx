// import React from 'react';
import Mainlayout from '../components/Mainlayout';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';
import Dashboard from '../pages/deshboard/Dashboard';
import SingleProduct from '../pages/singlePdoduct/SingleProduct';
import DashboardLayout from '../components/DashboardLayout';
import Profile from '../pages/profile/Profile';
import EditProfile from '../pages/editprofile/EditProfile';
const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/Home",
                element:<Home></Home>
            },
            {
                path:"/Products",
                element:<Products></Products>,
                loader:()=> fetch('https://dummyjson.com/products'),
            },
            {
                path:"/Products/:id",
                element:<SingleProduct></SingleProduct>,
                loader:(object)=> fetch(`https://dummyjson.com/products/${object.params.id}`),
            },
            {
                path:"/Dashboard",
                element:<DashboardLayout></DashboardLayout>,
                children:[
                    {
                        path:"/Dashboard",
                        element:<Dashboard></Dashboard>,
                    },
                    {
                        path:"/Dashboard/profile",
                        element:<Profile></Profile>
                    },
                    {
                        path:"/Dashboard/editProfile",
                        element:<EditProfile></EditProfile>
                    },
                ]
            },
            
        ]
    },
    
  ])

export default myCreatedRoute;