import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Components/Statistics/Statistics';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import Blog from './Components/Blog/Blog';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import FeaturedJobDetails from './Components/FeaturedJobDetails/FeaturedJobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('featuredJob.json')


      },
      {
        path:'/home/:id',
        element:<FeaturedJobDetails></FeaturedJobDetails>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {

      },

      {
        path: '*',
        element: <div>404 data not found</div>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
