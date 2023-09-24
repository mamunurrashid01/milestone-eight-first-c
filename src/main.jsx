import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import myCreatedRoute from './route/Route'
// import Mainlayout from './components/Mainlayout'
// import Home from './pages/home/Home'
// import Products from './pages/products/Products'
// const myCreatedRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<div>This is my first routing project</div>
//   },
//   {
//     path:"/Products",
//     element:<div>Product page</div>
//   },
//   {
//     path:"/Price",
//     element:<div>Price page</div>
//   },
// ])
// const myCreatedRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<section>
//       <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod?</div>
//       <Outlet></Outlet>
//     </section>,
//     children:[
//       {
//         path:"/",
//         element:<div>This is nested route.</div>
//       },
//       {
//         path:"/About",
//         element:<div>This is about page</div>
//       }
//     ]
//   }
// ])
// const myCreatedRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<Mainlayout></Mainlayout>,
//     children:[
//       {
//         path:"/Home",
//         element:<Home></Home>,
//       },
//       {
//         path:"/About",
//         element:<div>This is about page</div>
//       },
//       {
//         path:"/Products",
//         element:<Products></Products>
//       }
//     ]
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
