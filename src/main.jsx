import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Home/home';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import LoadCartData from './assets/Loader/LoadCartData';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/', 
        element: <Shop></Shop>
      },
      {
        path:'orders',
        element: <Orders></Orders>,
        loader: LoadCartData
      }, 
      {
        path:'inventory',
        element: <Inventory></Inventory>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
