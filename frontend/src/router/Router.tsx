import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import ErrorPage from '../views/ErrorPage';

import { MainPage } from '../views/main/view/MainPage';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <div>Create Login Page</div>,
    },
    {
      path: "/checkout",
      element: <div>Create Checkout Page</div>,
    },
    {
      path: "/admin",
      element: <div>Create Admin Page</div>,
    },
  ]);

export const Router = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}