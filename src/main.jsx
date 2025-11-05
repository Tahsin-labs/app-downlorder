import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Component/ROOT/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Apps from './Component/Apps/Apps.jsx';
import Installation from './Component/Installation/Installation.jsx';
import AppDetails from './Component/Appdetails/AppDetails.jsx';
import Error from './Component/ErrorPage/Error.jsx';
import AppError from './Component/AppError/AppError.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <AppError />,
    children: [
      {
        index: true,
        loader: () => fetch('/App.json'),
        Component: Home
      },
      {
        path: 'apps',
        // hydrateFallbackElement:Loder.....,
        loader: () => fetch('/allApp.json'),
        Component: Apps
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch('/allApp.json'),
        Component: AppDetails,
        errorElement: <AppError />

      },

      {
        path: '/installation',
        loader: () => fetch('/allApp.json'),
        Component: Installation
      }
    ]
  },

  {
    path: '*',
    element: <Error />

  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
